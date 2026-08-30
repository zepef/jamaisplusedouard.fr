#!/usr/bin/env node
/**
 * integrate-proposals.mjs — intègre les propositions structurées de Hermès.
 *
 * Lit data-incoming/*.json (cf. scripts/veille-contract.md), valide chaque
 * entrée, dédoublonne par clé, fusionne les NOUVELLES entrées valides dans
 * lib/data/*.json et, pour `apparitions`, append dans lib/media-data.ts
 * (jamais d'écrasement). Archive les fichiers traités et met à jour un manifeste.
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
const MEDIA_DATA = path.join(ROOT, "lib", "media-data.ts");
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
const APPARITION_TYPES = new Set(["interview", "plateau", "reportage", "mention", "debat"]);
const TONALITES = new Set(["favorable", "neutre", "critique"]);

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

function validateApparition(o, errs, i) {
  const p = `apparitions[${i}]`;
  for (const f of ["chaineSlug", "date", "emission", "resume"]) {
    if (!isStr(o[f])) errs.push(`${p}.${f} requis (string)`);
  }
  if (typeof o.dureeMinutes !== "number" || !Number.isFinite(o.dureeMinutes) || o.dureeMinutes < 0) {
    errs.push(`${p}.dureeMinutes requis (number >= 0)`);
  }
  if (!APPARITION_TYPES.has(o.type)) errs.push(`${p}.type invalide`);
  if (!TONALITES.has(o.tonalite)) errs.push(`${p}.tonalite invalide`);
  if (o.url !== undefined && o.url !== null && !isStr(o.url)) {
    errs.push(`${p}.url doit être une string non vide si présent`);
  }
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

function matchingClose(src, openIdx, openCh, closeCh) {
  let depth = 0;
  let inStr = false;
  let quote = null;
  let escape = false;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (escape) {
        escape = false;
        continue;
      }
      if (c === "\\") {
        escape = true;
        continue;
      }
      if (c === quote) inStr = false;
      continue;
    }
    if (c === "\"" || c === "'" || c === "`") {
      inStr = true;
      quote = c;
      continue;
    }
    if (c === openCh) depth++;
    else if (c === closeCh) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findExportArray(src, name) {
  const re = new RegExp(`export\\s+const\\s+${name}\\s*:\\s*[^=]+=\\s*\\[`);
  const m = re.exec(src);
  if (!m) throw new Error(`export const ${name} introuvable dans media-data.ts`);
  const openIdx = m.index + m[0].length - 1;
  const closeIdx = matchingClose(src, openIdx, "[", "]");
  if (closeIdx < 0) throw new Error(`tableau ${name} non fermé dans media-data.ts`);
  return { openIdx, closeIdx, inner: src.slice(openIdx + 1, closeIdx) };
}

function extractObjectLiterals(inner) {
  const objects = [];
  let i = 0;
  while (i < inner.length) {
    const start = inner.indexOf("{", i);
    if (start === -1) break;
    const end = matchingClose(inner, start, "{", "}");
    if (end < 0) break;
    objects.push(inner.slice(start, end + 1));
    i = end + 1;
  }
  return objects;
}

function tsStringField(objSrc, field) {
  const re = new RegExp(`${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const m = objSrc.match(re);
  if (!m) return undefined;
  try {
    return JSON.parse(`"${m[1]}"`);
  } catch {
    return m[1];
  }
}

function loadMediaIndex(src) {
  const chaines = findExportArray(src, "chainesMedia");
  const slugs = new Set();
  for (const obj of extractObjectLiterals(chaines.inner)) {
    const slug = tsStringField(obj, "slug");
    if (slug) slugs.add(slug);
  }

  const apps = findExportArray(src, "apparitions");
  const urls = new Set();
  const triples = new Set();
  for (const obj of extractObjectLiterals(apps.inner)) {
    const url = tsStringField(obj, "url");
    const chaineSlug = tsStringField(obj, "chaineSlug");
    const date = tsStringField(obj, "date");
    const emission = tsStringField(obj, "emission");
    if (isStr(url)) urls.add(url.trim());
    if (isStr(chaineSlug) && isStr(date) && isStr(emission)) {
      triples.add(`${chaineSlug}::${date}::${emission}`);
    }
  }
  return { slugs, urls, triples, apps };
}

function apparitionIsDup(item, urls, triples) {
  if (isStr(item.url)) return urls.has(item.url.trim());
  return triples.has(`${item.chaineSlug}::${item.date}::${item.emission}`);
}

function rememberApparition(item, urls, triples) {
  if (isStr(item.url)) urls.add(item.url.trim());
  triples.add(`${item.chaineSlug}::${item.date}::${item.emission}`);
}

function formatApparitionTs(o) {
  const lines = [
    "  {",
    `    chaineSlug: ${JSON.stringify(o.chaineSlug)},`,
    `    date: ${JSON.stringify(o.date)},`,
    `    emission: ${JSON.stringify(o.emission)},`,
    `    dureeMinutes: ${o.dureeMinutes},`,
    `    type: ${JSON.stringify(o.type)},`,
    `    tonalite: ${JSON.stringify(o.tonalite)},`,
    `    resume: ${JSON.stringify(o.resume)},`,
  ];
  if (isStr(o.url)) lines.push(`    url: ${JSON.stringify(o.url.trim())},`);
  lines.push("  },");
  return lines.join("\n");
}

function appendApparitionsTs(src, items) {
  if (items.length === 0) return src;
  const { closeIdx } = findExportArray(src, "apparitions");
  const insert = items.map(formatApparitionTs).join("\n") + "\n";
  const before = src.slice(0, closeIdx);
  const pad = before.endsWith("\n") ? "" : "\n";
  return before + pad + insert + src.slice(closeIdx);
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

  let mediaSrc = fs.existsSync(MEDIA_DATA) ? fs.readFileSync(MEDIA_DATA, "utf-8") : "";
  let mediaIndex;
  try {
    mediaIndex = mediaSrc ? loadMediaIndex(mediaSrc) : { slugs: new Set(), urls: new Set(), triples: new Set() };
  } catch (e) {
    console.log(`[integrate] Impossible de lire lib/media-data.ts : ${e.message}`);
    mediaIndex = { slugs: new Set(), urls: new Set(), triples: new Set() };
  }
  const pendingApparitions = [];

  const report = { runAt: new Date().toISOString(), files: [], totals: { added: 0, skipped: 0, invalid: 0 } };
  let dataChanged = false;
  let mediaChanged = false;

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

    const incomingApparitions = payload.apparitions;
    if (Array.isArray(incomingApparitions)) {
      let added = 0;
      let skipped = 0;
      incomingApparitions.forEach((item, i) => {
        const errs = [];
        validateApparition(item, errs, i);
        if (errs.length > 0) {
          fileReport.errors.push(...errs);
          report.totals.invalid++;
          return;
        }
        const slug = item.chaineSlug.trim();
        if (!mediaIndex.slugs.has(slug)) {
          fileReport.errors.push(
            `apparitions[${i}].chaineSlug inconnu (« ${slug} ») — entrée ignorée`
          );
          skipped++;
          return;
        }
        if (apparitionIsDup(item, mediaIndex.urls, mediaIndex.triples)) {
          skipped++;
          return;
        }
        const row = {
          chaineSlug: slug,
          date: item.date.trim(),
          emission: item.emission.trim(),
          dureeMinutes: item.dureeMinutes,
          type: item.type,
          tonalite: item.tonalite,
          resume: item.resume.trim(),
        };
        if (isStr(item.url)) row.url = item.url.trim();
        pendingApparitions.push(row);
        rememberApparition(row, mediaIndex.urls, mediaIndex.triples);
        added++;
        mediaChanged = true;
      });
      if (added) fileReport.added.apparitions = added;
      if (skipped) fileReport.skipped.apparitions = skipped;
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

  if (mediaChanged) {
    const next = appendApparitionsTs(mediaSrc, pendingApparitions);
    fs.writeFileSync(MEDIA_DATA, next);
  }

  manifest.lastRun = new Date().toISOString();
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2) + "\n");

  console.log(`[integrate] Terminé. Ajouts: ${report.totals.added}, ignorés: ${report.totals.skipped}, invalides: ${report.totals.invalid}.`);
  console.log(`[integrate] dataChanged=${dataChanged} mediaChanged=${mediaChanged}`);
}

main();
