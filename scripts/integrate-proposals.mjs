#!/usr/bin/env node
/**
 * integrate-proposals.mjs — intègre les propositions structurées de Hermès.
 *
 * Lit data-incoming/*.json (cf. scripts/veille-contract.md), valide chaque
 * entrée, dédoublonne par clé, fusionne les NOUVELLES entrées valides dans
 * lib/data/*.json, archive les fichiers traités et met à jour un manifeste.
 *
 * Ne touche JAMAIS à git : l'orchestration (branche de revue, push) est gérée
 * par scripts/elestio-cron.sh. Sûr à lancer manuellement pour tester.
 *
 * Usage : node scripts/integrate-proposals.mjs
 * Code de sortie 0. Écrit data-incoming/last-report.json.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INCOMING = path.join(ROOT, "data-incoming");
const PROCESSED = path.join(INCOMING, "processed");
const DATA = path.join(ROOT, "lib", "data");
const MANIFEST = path.join(INCOMING, "manifest.json");
const REPORT = path.join(INCOMING, "last-report.json");
const PAUSE = path.join(INCOMING, "PAUSE");

const IGNORE = new Set(["manifest.json", "EXAMPLE.json", "last-report.json"]);

// ── Énumérations du contrat ──────────────────────────────────
const SOUS_RESEAUX = new Set([
  "young-leaders", "sino-francais", "matignon", "le-havre", "entreprises",
  "horizons", "villepin", "chiraquien", "facilitateurs", "portuaire",
  "bilderberg", "coalition-2027", "cyber-influence",
]);
const CENTROIDES = new Set(["philippe", "juppe", "raffarin", "villepin"]);
const SOURCE_TYPES = new Set(["presse", "officiel", "social", "registre"]);
const CATEGORIES = new Set(["biographie", "controverse", "carriere"]);
const GRAVITES = new Set(["haute", "moyenne", "basse"]);

// ── Helpers de validation ────────────────────────────────────
const isStr = (v) => typeof v === "string" && v.trim().length > 0;
const isStrArr = (v) => Array.isArray(v) && v.every(isStr);

function validateReseau(o, errs, i) {
  const p = `reseau[${i}]`;
  for (const f of ["nom", "slug", "role", "description", "typeLien"]) {
    if (!isStr(o[f])) errs.push(`${p}.${f} requis (string)`);
  }
  if (o.sousReseaux !== undefined && o.sousReseaux !== null) {
    if (!Array.isArray(o.sousReseaux) || !o.sousReseaux.every((s) => SOUS_RESEAUX.has(s)))
      errs.push(`${p}.sousReseaux : valeurs invalides`);
  }
  if (o.rattachement !== undefined && o.rattachement !== null) {
    const arr = Array.isArray(o.rattachement) ? o.rattachement : [o.rattachement];
    if (!arr.every((c) => CENTROIDES.has(c))) errs.push(`${p}.rattachement : centroïde invalide`);
  }
}

function validateTimeline(o, errs, i) {
  const p = `timeline[${i}]`;
  for (const f of ["annee", "titre", "description"]) {
    if (!isStr(o[f])) errs.push(`${p}.${f} requis (string)`);
  }
  if (!CATEGORIES.has(o.categorie)) errs.push(`${p}.categorie invalide`);
}

function validateSources(sources, p, errs, urlRequired) {
  if (!Array.isArray(sources) || sources.length === 0) {
    errs.push(`${p}.sources requis (>=1)`);
    return;
  }
  sources.forEach((s, j) => {
    if (!isStr(s.titre)) errs.push(`${p}.sources[${j}].titre requis`);
    if (urlRequired && !isStr(s.url)) errs.push(`${p}.sources[${j}].url requis`);
    if (!SOURCE_TYPES.has(s.type)) errs.push(`${p}.sources[${j}].type invalide`);
  });
}

function validateControverse(o, errs, i) {
  const p = `controverses[${i}]`;
  for (const f of ["slug", "titre", "resume", "contenu", "date"]) {
    if (!isStr(o[f])) errs.push(`${p}.${f} requis (string)`);
  }
  if (!GRAVITES.has(o.gravite)) errs.push(`${p}.gravite invalide`);
  if (!isStrArr(o.themes)) errs.push(`${p}.themes requis (string[])`);
  validateSources(o.sources, p, errs, true);
}

function validateInvestigation(o, errs, i) {
  const p = `investigations[${i}]`;
  for (const f of ["slug", "titre", "sousTitre", "resume", "date"]) {
    if (!isStr(o[f])) errs.push(`${p}.${f} requis (string)`);
  }
  if (!isStrArr(o.themes)) errs.push(`${p}.themes requis (string[])`);
  if (!isStrArr(o.noeudsLies)) errs.push(`${p}.noeudsLies requis (string[])`);
  if (!Array.isArray(o.parties) || o.parties.length === 0) {
    errs.push(`${p}.parties requis (>=1)`);
  } else {
    o.parties.forEach((part, j) => {
      if (!isStr(part.titre)) errs.push(`${p}.parties[${j}].titre requis`);
      if (!isStr(part.contenu)) errs.push(`${p}.parties[${j}].contenu requis`);
    });
  }
  validateSources(o.sources, p, errs, false);
}

// ── Datasets cibles ──────────────────────────────────────────
const TARGETS = {
  reseau: { file: "reseau.json", key: (o) => o.slug, validate: validateReseau },
  timeline: { file: "timeline.json", key: (o) => `${o.annee}::${o.titre}`, validate: validateTimeline },
  controverses: { file: "controverses.json", key: (o) => o.slug, validate: validateControverse },
  investigations: { file: "investigations.json", key: (o) => o.slug, validate: validateInvestigation },
};

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return fallback;
  }
}

function fileHash(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 16);
}

// ── Main ─────────────────────────────────────────────────────
function main() {
  console.log(`[integrate] ${new Date().toISOString()} — démarrage`);
  fs.mkdirSync(INCOMING, { recursive: true });

  // Kill switch : data-incoming/PAUSE suspend l'intégration.
  if (fs.existsSync(PAUSE)) {
    console.log("[integrate] data-incoming/PAUSE présent — intégration suspendue.");
    return;
  }

  fs.mkdirSync(PROCESSED, { recursive: true });

  const manifest = readJson(MANIFEST, { processed: {}, lastRun: null });

  const files = fs
    .readdirSync(INCOMING)
    .filter((f) => f.endsWith(".json") && !IGNORE.has(f) && !f.startsWith("_"));

  if (files.length === 0) {
    console.log("[integrate] Aucun fichier à traiter.");
    manifest.lastRun = new Date().toISOString();
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
    return;
  }

  // Charger les datasets cibles + index de clés existantes
  const loaded = {};
  const keys = {};
  for (const [type, t] of Object.entries(TARGETS)) {
    loaded[type] = readJson(path.join(DATA, t.file), []);
    keys[type] = new Set(loaded[type].map(t.key));
  }

  const report = { runAt: new Date().toISOString(), files: [], totals: { added: 0, skipped: 0, invalid: 0 } };
  let dataChanged = false;

  for (const file of files) {
    const full = path.join(INCOMING, file);
    const hash = fileHash(full);
    if (manifest.processed[file]?.hash === hash) {
      console.log(`[integrate] ${file} déjà traité, ignoré.`);
      continue;
    }

    const fileReport = { file, added: {}, skipped: {}, errors: [] };
    let payload;
    try {
      payload = JSON.parse(fs.readFileSync(full, "utf-8"));
    } catch (e) {
      fileReport.errors.push(`JSON invalide : ${e.message}`);
      report.files.push(fileReport);
      report.totals.invalid++;
      continue;
    }

    for (const [type, t] of Object.entries(TARGETS)) {
      const items = payload[type];
      if (!Array.isArray(items)) continue;
      let added = 0;
      let skipped = 0;

      items.forEach((item, i) => {
        const errs = [];
        t.validate(item, errs, i);
        if (errs.length > 0) {
          fileReport.errors.push(...errs);
          report.totals.invalid++;
          return;
        }
        const k = t.key(item);
        if (keys[type].has(k)) {
          skipped++;
          return;
        }
        loaded[type].push(item);
        keys[type].add(k);
        added++;
        dataChanged = true;
      });

      if (added) fileReport.added[type] = added;
      if (skipped) fileReport.skipped[type] = skipped;
      report.totals.added += added;
      report.totals.skipped += skipped;
    }

    // Archiver le fichier traité
    fs.renameSync(full, path.join(PROCESSED, file));
    manifest.processed[file] = { hash, processedAt: new Date().toISOString() };
    report.files.push(fileReport);
    console.log(`[integrate] ${file} : ${JSON.stringify(fileReport.added)} ajouté(s), ${JSON.stringify(fileReport.skipped)} ignoré(s), ${fileReport.errors.length} erreur(s)`);
  }

  // Écrire les datasets si modifiés
  if (dataChanged) {
    for (const [type, t] of Object.entries(TARGETS)) {
      fs.writeFileSync(path.join(DATA, t.file), JSON.stringify(loaded[type], null, 2) + "\n");
    }
  }

  manifest.lastRun = new Date().toISOString();
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2) + "\n");

  console.log(`[integrate] Terminé. Ajouts: ${report.totals.added}, ignorés: ${report.totals.skipped}, invalides: ${report.totals.invalid}.`);
  console.log(`[integrate] dataChanged=${dataChanged}`);
}

main();
