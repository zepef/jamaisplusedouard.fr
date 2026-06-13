#!/usr/bin/env bash
# Elestio Cron Runner — inbox watcher + git push
# Schedule: weekdays 10:00 + 18:00 Paris (cron: 0 8,16 * * 1-5 UTC)
#
# Environment requirements:
#   - Node.js >= 18
#   - Git configured with push access to the repo
#   - REPO_DIR set to the project root (default: script's parent dir)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="${REPO_DIR:-$(dirname "$SCRIPT_DIR")}"
LOG_FILE="${REPO_DIR}/scripts/inbox-watcher.log"

# Load environment variables (.env for Supabase, Resend, etc.)
if [ -f "$REPO_DIR/.env" ]; then
  set -a; source "$REPO_DIR/.env"; set +a
fi

echo "[elestio-cron] $(date -Iseconds) — Starting" | tee -a "$LOG_FILE"

cd "$REPO_DIR"

# Pull latest
git pull --rebase --quiet 2>&1 | tee -a "$LOG_FILE"

# Install deps if needed
if [ ! -d "node_modules/mammoth" ]; then
  echo "[elestio-cron] Installing mammoth..." | tee -a "$LOG_FILE"
  npm install mammoth --save 2>&1 | tee -a "$LOG_FILE"
fi

# ── Kill switch : data-incoming/PAUSE suspend toute la veille ──
if [ -f "data-incoming/PAUSE" ]; then
  echo "[elestio-cron] data-incoming/PAUSE présent — veille suspendue (kill switch actif)." | tee -a "$LOG_FILE"
else

# Run watcher
echo "[elestio-cron] Running inbox-watcher..." | tee -a "$LOG_FILE"
node scripts/inbox-watcher.mjs 2>&1 | tee -a "$LOG_FILE"

# Check for changes in bot-exchange
# ── bot-exchange (métadonnées de veille) → main si modifié ──
if ! (git diff --quiet public/bot-exchange/ && git diff --quiet --cached public/bot-exchange/); then
  git add public/bot-exchange/
  git commit -m "chore(veille): inbox-watcher $(date +%Y-%m-%d_%H:%M)

Co-Authored-By: Paperclip <noreply@paperclip.ing>" 2>&1 | tee -a "$LOG_FILE"
  git push 2>&1 | tee -a "$LOG_FILE"
  echo "[elestio-cron] bot-exchange poussé." | tee -a "$LOG_FILE"
fi

# ── Intégration des propositions (data-incoming/) ──
# Déléguée à l'agent Hermès LOCAL (scripts/hermes-local-cron.sh, Planificateur
# Windows toutes les 6 h). Elestio ne lance plus integrate-proposals.mjs ni la
# branche de revue : il se contente de collecter et de publier bot-exchange.

echo "[elestio-cron] $(date -Iseconds) — Veille terminée." | tee -a "$LOG_FILE"
fi

# ── Newsletter quotidienne (une seule fois par jour, run du matin 8h UTC) ──
HOUR=$(date -u +%H)
if [ "$HOUR" -lt 12 ]; then
  echo "[elestio-cron] Running daily newsletter..." | tee -a "$LOG_FILE"
  node scripts/daily-newsletter.mjs 2>&1 | tee -a "$LOG_FILE"
  echo "[elestio-cron] Newsletter done." | tee -a "$LOG_FILE"
fi
