#!/usr/bin/env node
/**
 * daily-newsletter.mjs — Newsletter quotidienne automatique
 *
 * 1. git log des 24 dernieres heures → detecter les changements
 * 2. Parser les types de changements (investigations, controverses, reseau, actus, etc.)
 * 3. Lire les abonnes confirmes depuis Supabase
 * 4. Generer le HTML et envoyer via Resend (batch)
 *
 * Env vars requises :
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *   RESEND_API_KEY
 *   FROM_EMAIL (default: noreply@jamaisplusedouard.fr)
 *   SITE_URL (default: https://jamaisplusedouard.fr)
 */

import { execSync } from "child_process";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// ── Config ──────────────────────────────────────────────────

const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://jamaisplusedouard.fr";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@jamaisplusedouard.fr";
const BATCH_SIZE = 50; // Resend batch limit

// ── 1. Collect git changes from last 24h ────────────────────

function getRecentChanges() {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  let log;
  try {
    log = execSync(`git log --since="${since}" --pretty=format:"%s" --no-merges`, {
      encoding: "utf-8",
      cwd: process.env.REPO_DIR || new URL("..", import.meta.url).pathname,
    }).trim();
  } catch {
    log = "";
  }

  if (!log) return null;

  const commits = log.split("\n").filter(Boolean);
  const changes = {
    investigations: [],
    controverses: [],
    reseau: [],
    actualites: [],
    dashboard: [],
    other: [],
  };

  for (const msg of commits) {
    const lower = msg.toLowerCase();
    // Skip chore/veille commits
    if (lower.startsWith("chore(veille)") || lower.startsWith("chore:")) continue;

    if (lower.includes("investigation") || lower.includes("enquête") || lower.includes("rapport")) {
      changes.investigations.push(msg);
    } else if (lower.includes("controverse") || lower.includes("controvers")) {
      changes.controverses.push(msg);
    } else if (lower.includes("réseau") || lower.includes("reseau") || lower.includes("nœud") || lower.includes("noeud") || lower.includes("entit")) {
      changes.reseau.push(msg);
    } else if (lower.includes("actualit") || lower.includes("bulletin") || lower.includes("média") || lower.includes("media")) {
      changes.actualites.push(msg);
    } else if (lower.includes("dashboard") || lower.includes("indicateur") || lower.includes("premier") || lower.includes("pm")) {
      changes.dashboard.push(msg);
    } else if (lower.startsWith("feat") || lower.startsWith("fix") || lower.startsWith("refactor")) {
      changes.other.push(msg);
    }
  }

  const totalRelevant =
    changes.investigations.length +
    changes.controverses.length +
    changes.reseau.length +
    changes.actualites.length +
    changes.dashboard.length +
    changes.other.length;

  return totalRelevant > 0 ? changes : null;
}

// ── 2. Generate HTML ────────────────────────────────────────

function generateHTML(changes) {
  const date = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [];

  if (changes.investigations.length > 0) {
    sections.push(renderSection("Nouvelles investigations", "#ff3333", changes.investigations, "/investigations"));
  }
  if (changes.controverses.length > 0) {
    sections.push(renderSection("Controverses", "#ff3333", changes.controverses, "/controverses"));
  }
  if (changes.reseau.length > 0) {
    sections.push(renderSection("Reseau mis a jour", "#ff00ff", changes.reseau, "/reseau"));
  }
  if (changes.actualites.length > 0) {
    sections.push(renderSection("Actualites", "#00f0ff", changes.actualites, "/actualites"));
  }
  if (changes.dashboard.length > 0) {
    sections.push(renderSection("Dashboard PM", "#f59e0b", changes.dashboard, "/dashboard"));
  }
  if (changes.other.length > 0) {
    sections.push(renderSection("Autres mises a jour", "#888899", changes.other, null));
  }

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0f;">
<div style="font-family:'Courier New',monospace;background:#0a0a0f;color:#d4d4d8;padding:40px 20px;max-width:600px;margin:0 auto;">

  <div style="text-align:center;margin-bottom:32px;">
    <h1 style="color:#00f0ff;font-size:28px;margin:0 0 4px;letter-spacing:-1px;">JAMAIS<span style="color:#ff00ff">+</span>EDOUARD</h1>
    <p style="color:#888899;font-size:10px;text-transform:uppercase;letter-spacing:3px;margin:0;">Veille citoyenne quotidienne</p>
  </div>

  <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:16px;margin-bottom:24px;">
    <p style="color:#a1a1aa;font-size:11px;margin:0;">
      <strong style="color:#f59e0b;">${date}</strong><br/>
      Voici les dernieres mises a jour du site jamaisplusedouard.fr :
    </p>
  </div>

  ${sections.join("\n")}

  <div style="text-align:center;margin:32px 0 24px;">
    <a href="${SITE_URL}"
       style="display:inline-block;padding:12px 32px;background:rgba(0,240,255,0.1);border:1px solid rgba(0,240,255,0.3);color:#00f0ff;text-decoration:none;font-size:13px;border-radius:4px;font-family:monospace;">
      Voir le site →
    </a>
  </div>

  <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0;"/>

  <p style="color:#3f3f46;font-size:9px;text-align:center;line-height:1.6;">
    jamaisplusedouard.fr — Liberte d'expression (Art. 11 DDHC)<br/>
    <a href="${SITE_URL}/api/newsletter/unsubscribe?email={{email}}" style="color:#52525b;text-decoration:underline;">Se desabonner</a>
  </p>

</div>
</body>
</html>`;
}

function renderSection(title, color, items, href) {
  const itemsHtml = items
    .map(
      (msg) => {
        // Clean commit prefix (feat:, fix:, refactor:, etc.)
        const clean = msg.replace(/^(feat|fix|refactor|chore|docs)\s*(\(.*?\))?\s*:\s*/i, "").trim();
        return `<li style="margin-bottom:6px;font-size:12px;color:#a1a1aa;line-height:1.5;">${escapeHtml(clean)}</li>`;
      }
    )
    .join("\n");

  const linkHtml = href
    ? `<a href="${SITE_URL}${href}" style="color:${color};font-size:11px;text-decoration:none;font-family:monospace;">Voir →</a>`
    : "";

  return `
  <div style="margin-bottom:20px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <h2 style="font-size:13px;color:${color};text-transform:uppercase;letter-spacing:1px;margin:0;">${title}</h2>
      ${linkHtml}
    </div>
    <ul style="margin:0;padding-left:16px;">
      ${itemsHtml}
    </ul>
  </div>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ── 3. Fetch subscribers ────────────────────────────────────

async function getSubscribers() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("[newsletter] SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant");
    return [];
  }

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("abonnes_newsletter")
    .select("email")
    .eq("confirmed", true);

  if (error) {
    console.error("[newsletter] Erreur Supabase:", error.message);
    return [];
  }

  return data.map((r) => r.email);
}

// ── 4. Send via Resend ──────────────────────────────────────

async function sendNewsletter(emails, html, subject) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[newsletter] RESEND_API_KEY manquant");
    return;
  }

  const resend = new Resend(apiKey);

  // Send in batches
  for (let i = 0; i < emails.length; i += BATCH_SIZE) {
    const batch = emails.slice(i, i + BATCH_SIZE);
    const batchPayload = batch.map((email) => ({
      from: `Jamais Plus Edouard <${FROM_EMAIL}>`,
      to: email,
      subject,
      html: html.replace("{{email}}", encodeURIComponent(email)),
    }));

    try {
      const result = await resend.batch.send(batchPayload);
      console.log(`[newsletter] Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} emails envoyes`, result);
    } catch (err) {
      console.error(`[newsletter] Erreur batch ${Math.floor(i / BATCH_SIZE) + 1}:`, err.message);
    }
  }
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  console.log(`[newsletter] ${new Date().toISOString()} — Demarrage`);

  // 1. Detect changes
  const changes = getRecentChanges();
  if (!changes) {
    console.log("[newsletter] Aucun changement pertinent en 24h. Pas d'envoi.");
    return;
  }

  const totalItems =
    changes.investigations.length +
    changes.controverses.length +
    changes.reseau.length +
    changes.actualites.length +
    changes.dashboard.length +
    changes.other.length;
  console.log(`[newsletter] ${totalItems} changement(s) detecte(s)`);

  // 2. Get subscribers
  const subscribers = await getSubscribers();
  if (subscribers.length === 0) {
    console.log("[newsletter] Aucun abonne confirme. Pas d'envoi.");
    return;
  }
  console.log(`[newsletter] ${subscribers.length} abonne(s) confirme(s)`);

  // 3. Generate email
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
  const subject = `[JPE] Mise a jour du ${date}`;
  const html = generateHTML(changes);

  // 4. Send
  await sendNewsletter(subscribers, html, subject);
  console.log(`[newsletter] ${new Date().toISOString()} — Termine`);
}

main().catch((err) => {
  console.error("[newsletter] Erreur fatale:", err);
  process.exit(1);
});
