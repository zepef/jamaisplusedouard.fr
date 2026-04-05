#!/usr/bin/env node
/**
 * Inbox Watcher — Scans public/inbox/ for .docx files,
 * extracts text, identifies entities/connections/leads,
 * and writes structured JSON to public/bot-exchange/.
 *
 * Usage: node scripts/inbox-watcher.mjs
 * Designed to run via Elestio cron (weekdays 10h + 18h Paris).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mammoth from "mammoth";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INBOX = path.join(ROOT, "public", "inbox");
const EXCHANGE = path.join(ROOT, "public", "bot-exchange");
const MANIFEST = path.join(EXCHANGE, "manifest.json");

// ── Existing slugs (load from seed-data at build time or maintain list) ──

const KNOWN_SOUS_RESEAUX = [
  "young-leaders", "sino-francais", "matignon", "le-havre",
  "entreprises", "horizons", "villepin", "chiraquien",
  "facilitateurs", "portuaire", "bilderberg", "coalition-2027",
  "cyber-influence",
];

const KNOWN_CENTROIDES = ["philippe", "juppe", "raffarin", "villepin"];

const GRAVITE_KEYWORDS = {
  haute: ["scandale", "corruption", "fraude", "detournement", "abus", "condamn"],
  moyenne: ["polemiqu", "controvers", "critiqu", "accus"],
  basse: ["questionnement", "debat", "interrogation"],
};

const THEME_KEYWORDS = {
  "politique": ["politique", "parti", "election", "mandat", "depute", "senateur", "ministre"],
  "financier": ["financ", "argent", "million", "banque", "fonds", "investiss", "BlackRock"],
  "judiciaire": ["justice", "tribunal", "proc", "condamn", "enquete", "perquisition", "PNF"],
  "lobbying": ["lobby", "influence", "conflit d'interet", "pantouflage", "revolving"],
  "reseau": ["reseau", "connexion", "lien", "relation", "cercle", "club"],
  "international": ["international", "etranger", "ambassad", "bilderberg", "atlantis"],
  "media": ["media", "journalis", "presse", "communication", "pr "],
  "securite": ["securit", "renseignement", "DGSI", "DGSE", "police", "surveillance"],
};

// ── Manifest (tracks processed files) ──

function loadManifest() {
  if (fs.existsSync(MANIFEST)) {
    return JSON.parse(fs.readFileSync(MANIFEST, "utf-8"));
  }
  return { processed: {}, lastRun: null };
}

function saveManifest(manifest) {
  manifest.lastRun = new Date().toISOString();
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
}

// ── Text extraction ──

async function extractText(docxPath) {
  const buffer = fs.readFileSync(docxPath);
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

// ── Entity extraction (heuristic — names, orgs, roles) ──

function extractEntities(text) {
  const persons = [];
  const organizations = [];

  // Clean text: normalize whitespace, remove table artifacts
  const cleanText = text.replace(/\n{3,}/g, "\n\n").replace(/\t+/g, " ");

  // Named entity patterns (French context) — require proper name structure
  const personPatterns = [
    // "M./Mme Prénom Nom" or "M./Mme Nom"
    /(?:M\.|Mme|Monsieur|Madame|Dr\.?|Me\.?|Pr\.?)\s+([A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]+(?:\s+(?:de\s+(?:la\s+)?)?[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]+)+)/g,
    // "Prénom Nom" pattern (Capitalized + Capitalized, on same line, no newlines)
    /(?:^|[.\s,(])([A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]{2,}(?:-[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]{2,})?\s+(?:de\s+(?:la\s+)?)?[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]{2,}(?:-[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC]{2,})?)(?=[.\s,)]|$)/gm,
  ];

  // Noise filter: common French words that look like names
  const NOISE_WORDS = new Set([
    "le", "la", "les", "des", "du", "de", "un", "une", "code", "date",
    "forme", "statut", "table", "rapport", "document", "section",
    "chapitre", "partie", "note", "source", "type", "groupe",
    "ancien", "nouvelle", "premier", "dernier", "grand", "petit",
  ]);

  const seenPersons = new Set();
  for (const pattern of personPatterns) {
    let match;
    while ((match = pattern.exec(cleanText)) !== null) {
      const name = (match[1] || match[0]).trim();
      // Filter: must have at least 2 words, no newlines, min 5 chars
      if (
        name.length < 5 ||
        name.includes("\n") ||
        name.split(/\s+/).length < 2 ||
        NOISE_WORDS.has(name.split(/\s+/)[0].toLowerCase())
      ) continue;

      const normalized = name.replace(/\s+/g, " ");
      if (!seenPersons.has(normalized.toLowerCase())) {
        seenPersons.add(normalized.toLowerCase());
        const count = countOccurrences(cleanText, normalized);
        if (count >= 1) {
          persons.push({
            nom: normalized,
            slug: slugify(normalized),
            mentionCount: count,
          });
        }
      }
    }
  }

  // Known organizations (curated list relevant to the project's domain)
  const KNOWN_ORGS = [
    "Forward Global", "Havas", "McKinsey", "Rothschild", "Goldman Sachs",
    "JP Morgan", "BNP Paribas", "AXA", "TotalEnergies", "Total", "Engie",
    "EDF", "LVMH", "Bouygues", "Vinci", "Dassault", "Lagardère",
    "BlackRock", "LeakID", "Avisa Partners", "iStrat", "Boléro",
    "DGSI", "DGSE", "Matignon", "Elysée", "Horizons",
    "CMA CGM", "Bolloré", "Publicis", "Caritat",
  ];

  // Organization patterns — known orgs + legal form suffix
  const orgPatterns = [
    new RegExp(`(?:${KNOWN_ORGS.map(o => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi"),
    /([A-Z\u00C0-\u00DC][A-Za-z\u00C0-\u00FC&\-]+(?:\s+[A-Z\u00C0-\u00DC][A-Za-z\u00C0-\u00FC&\-]+){0,3})\s+(?:SA|SAS|SARL|SCI|GIE|SE)\b/g,
  ];

  const seenOrgs = new Set();
  for (const pattern of orgPatterns) {
    let match;
    while ((match = pattern.exec(cleanText)) !== null) {
      const name = (match[1] || match[0]).trim();
      if (name.length < 3 || name.includes("\n")) continue;
      const normalized = name.replace(/\s+/g, " ");
      if (!seenOrgs.has(normalized.toLowerCase())) {
        seenOrgs.add(normalized.toLowerCase());
        organizations.push({
          nom: normalized,
          slug: slugify(normalized),
          mentionCount: countOccurrences(cleanText, normalized),
        });
      }
    }
  }

  // Sort by mention frequency
  persons.sort((a, b) => b.mentionCount - a.mentionCount);
  organizations.sort((a, b) => b.mentionCount - a.mentionCount);

  return { persons: persons.slice(0, 30), organizations: organizations.slice(0, 20) };
}

// ── Connection extraction ──

function extractConnections(text, entities) {
  const connections = [];
  const linkVerbs = [
    { pattern: /(?:proche de|alli[eé] (?:de |d'))/gi, type: "politique" },
    { pattern: /(?:financ[eé] par|investiss|actionnair)/gi, type: "financier" },
    { pattern: /(?:employ[eé] (?:de |d'|par)|travaille? (?:pour|chez|avec)|collabor|conseill)/gi, type: "professionnel" },
    { pattern: /(?:mari[eé] [àa]|fils de|fille de|fr[eè]re de|cousin|beau-)/gi, type: "familial" },
    { pattern: /(?:interview|chronique|editorial|tribune|communiqu)/gi, type: "mediatique" },
  ];

  const personNames = entities.persons.map((p) => p.nom);
  const paragraphs = text.split(/\n{2,}/);

  for (const para of paragraphs) {
    const namesInPara = personNames.filter((n) => para.includes(n));
    if (namesInPara.length >= 2) {
      for (let i = 0; i < namesInPara.length - 1; i++) {
        for (let j = i + 1; j < namesInPara.length; j++) {
          let linkType = "politique"; // default
          for (const { pattern, type } of linkVerbs) {
            if (pattern.test(para)) {
              linkType = type;
              break;
            }
            pattern.lastIndex = 0;
          }
          connections.push({
            source: slugify(namesInPara[i]),
            target: slugify(namesInPara[j]),
            typeLien: linkType,
            context: para.slice(0, 300),
          });
        }
      }
    }
  }

  // Deduplicate
  const seen = new Set();
  return connections.filter((c) => {
    const key = [c.source, c.target].sort().join("↔") + c.typeLien;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ── Investigation leads ──

function extractLeads(text, filename) {
  const leads = [];
  const sections = text.split(/(?:^|\n)(?:#{1,3}\s+|[A-Z\u00C0-\u00DC][A-Z\u00C0-\u00DC\s]{5,}$)/m);

  // Detect overall themes
  const themes = [];
  for (const [theme, keywords] of Object.entries(THEME_KEYWORDS)) {
    const lower = text.toLowerCase();
    if (keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
      themes.push(theme);
    }
  }

  // Detect gravity
  let gravite = "basse";
  const lower = text.toLowerCase();
  for (const [level, keywords] of Object.entries(GRAVITE_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      gravite = level;
      break;
    }
  }

  // Detect potential sub-networks
  const sousReseaux = KNOWN_SOUS_RESEAUX.filter((sr) =>
    lower.includes(sr.replace(/-/g, " ")) || lower.includes(sr.replace(/-/g, ""))
  );

  // Detect centroide connections
  const centroides = KNOWN_CENTROIDES.filter((c) => lower.includes(c));

  leads.push({
    source: filename,
    themes,
    gravite,
    sousReseaux,
    centroides,
    summary: text.slice(0, 500).replace(/\n/g, " ").trim(),
    sectionCount: sections.length,
  });

  return leads;
}

// ── Proposed seed-data updates ──

function proposeSeedUpdates(entities, connections, leads) {
  const proposals = {
    newNodes: [],
    newConnections: [],
    newControverses: [],
    timelineEvents: [],
  };

  // Propose new network nodes for frequently mentioned persons
  for (const person of entities.persons.filter((p) => p.mentionCount >= 3)) {
    const lead = leads[0] || {};
    proposals.newNodes.push({
      nom: person.nom,
      slug: person.slug,
      role: "A determiner",
      description: `Mentionné(e) ${person.mentionCount} fois dans ${lead.source || "document"}. ${lead.themes?.length ? "Thèmes: " + lead.themes.join(", ") : ""}`,
      typeLien: "politique",
      sousReseaux: lead.sousReseaux?.length ? lead.sousReseaux : undefined,
      rattachement: lead.centroides?.length === 1 ? lead.centroides[0] : lead.centroides?.length ? lead.centroides : undefined,
    });
  }

  // Propose connections
  for (const conn of connections.slice(0, 20)) {
    proposals.newConnections.push({
      source: conn.source,
      target: conn.target,
      typeLien: conn.typeLien,
      description: conn.context.slice(0, 200),
    });
  }

  // Propose controversy if high gravity
  if (leads.some((l) => l.gravite === "haute")) {
    const lead = leads[0];
    proposals.newControverses.push({
      slug: slugify(lead.source.replace(/\.docx$/, "")),
      titre: `[A titrer] ${lead.source}`,
      resume: lead.summary,
      gravite: lead.gravite,
      themes: lead.themes,
    });
  }

  return proposals;
}

// ── Utilities ──

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function countOccurrences(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(escaped, "gi")) || []).length;
}

// ── Main ──

async function main() {
  console.log(`[inbox-watcher] ${new Date().toISOString()} — Starting scan`);

  // Ensure directories exist
  fs.mkdirSync(INBOX, { recursive: true });
  fs.mkdirSync(EXCHANGE, { recursive: true });

  const manifest = loadManifest();

  // Find .docx files in inbox
  const files = fs.readdirSync(INBOX).filter((f) => f.endsWith(".docx") && !f.startsWith("~$"));

  if (files.length === 0) {
    console.log("[inbox-watcher] No .docx files in inbox. Nothing to do.");
    saveManifest(manifest);
    return;
  }

  let processedCount = 0;

  for (const file of files) {
    const filePath = path.join(INBOX, file);
    const stat = fs.statSync(filePath);
    const fileKey = `${file}:${stat.size}:${stat.mtimeMs}`;

    // Skip already processed
    if (manifest.processed[file]?.key === fileKey) {
      console.log(`[inbox-watcher] Skipping ${file} (already processed)`);
      continue;
    }

    console.log(`[inbox-watcher] Processing ${file}...`);

    try {
      const text = await extractText(filePath);
      if (!text || text.trim().length < 50) {
        console.warn(`[inbox-watcher] ${file} — Too short or empty, skipping`);
        continue;
      }

      const entities = extractEntities(text);
      const connections = extractConnections(text, entities);
      const leads = extractLeads(text, file);
      const proposals = proposeSeedUpdates(entities, connections, leads);

      const output = {
        _meta: {
          source: file,
          processedAt: new Date().toISOString(),
          textLength: text.length,
          version: "1.0.0",
        },
        entities,
        connections,
        leads,
        proposals,
        rawTextPreview: text.slice(0, 2000),
      };

      const outName = file.replace(/\.docx$/, ".json");
      const outPath = path.join(EXCHANGE, outName);
      fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

      manifest.processed[file] = {
        key: fileKey,
        processedAt: new Date().toISOString(),
        outputFile: outName,
        entityCount: entities.persons.length + entities.organizations.length,
        connectionCount: connections.length,
        leadCount: leads.length,
      };

      processedCount++;
      console.log(
        `[inbox-watcher] ${file} -> ${outName} | ${entities.persons.length} persons, ${entities.organizations.length} orgs, ${connections.length} connections`
      );
    } catch (err) {
      console.error(`[inbox-watcher] Error processing ${file}:`, err.message);
      manifest.processed[file] = {
        key: fileKey,
        error: err.message,
        errorAt: new Date().toISOString(),
      };
    }
  }

  saveManifest(manifest);
  console.log(`[inbox-watcher] Done. Processed ${processedCount}/${files.length} files.`);
}

main().catch((err) => {
  console.error("[inbox-watcher] Fatal error:", err);
  process.exit(1);
});
