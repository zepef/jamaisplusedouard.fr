#!/usr/bin/env bash
# Hermès local — intégration des propositions de l'agent Hermès distant.
#
# Remplace la partie « intégration » de scripts/elestio-cron.sh : l'agent distant
# (Hermès en ligne) collecte et dépose ses propositions dans data-incoming/ ; cet
# agent local les intègre, met à jour les marqueurs sur main et pousse une branche
# de revue veille/incoming-<date> quand du contenu publié est proposé.
#
# Déclenchement : Planificateur de tâches Windows, toutes les 6 h, avec rattrapage
# des exécutions manquées (cf. scripts/hermes-local-task.ps1). La station n'a pas
# besoin d'être allumée en continu : integrate-proposals.mjs traite TOUS les
# fichiers non encore vus, donc un seul passage après réactivation rattrape le
# retard accumulé.
#
# Idempotent et sûr à relancer. Code de sortie 0 en cas de pause (kill switch).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="${REPO_DIR:-$(dirname "$SCRIPT_DIR")}"
LOG_FILE="${REPO_DIR}/scripts/hermes-local.log"
STATE_FILE="${REPO_DIR}/scripts/.hermes-local-state"

# Accès push : clé SSH dédiée (sans passphrase) → push non-interactif depuis WSL.
export GIT_SSH_COMMAND="${GIT_SSH_COMMAND:-ssh -i $HOME/.ssh/id_ed25519 -o StrictHostKeyChecking=accept-new}"

log() { echo "[hermes-local] $(date -Iseconds) $*" | tee -a "$LOG_FILE"; }

cd "$REPO_DIR"

# Variables d'environnement (.env), pour cohérence avec le reste de la veille.
if [ -f "$REPO_DIR/.env" ]; then
  set -a; source "$REPO_DIR/.env"; set +a
fi

log "Démarrage."

# Rattrapage : signaler combien de fenêtres de 6 h ont été manquées depuis le
# dernier passage local. L'intégration elle-même rattrape tout d'un seul coup.
if [ -f "$STATE_FILE" ]; then
  LAST="$(cat "$STATE_FILE" 2>/dev/null || echo 0)"
  NOW="$(date +%s)"
  DELTA_H=$(( (NOW - LAST) / 3600 ))
  if [ "$DELTA_H" -ge 6 ]; then
    MISSED=$(( DELTA_H / 6 ))
    log "Dernier passage il y a ${DELTA_H} h (~${MISSED} session(s) manquée(s)) — rattrapage."
  fi
fi

# Se positionner sur main et récupérer les propositions de l'agent distant.
git checkout main --quiet 2>&1 | tee -a "$LOG_FILE" || true
git pull --rebase --quiet 2>&1 | tee -a "$LOG_FILE"

# Kill switch : data-incoming/PAUSE suspend toute la veille.
if [ -f "data-incoming/PAUSE" ]; then
  log "data-incoming/PAUSE présent — intégration suspendue (kill switch actif)."
  exit 0
fi

# Intégration des propositions structurées (validation + dédoublonnage).
log "Running integrate-proposals..."
node scripts/integrate-proposals.mjs 2>&1 | tee -a "$LOG_FILE"

# Marqueurs d'intégration (manifeste, archive, rapport) → main.
if ! git diff --quiet data-incoming/ || [ -n "$(git ls-files --others --exclude-standard data-incoming/)" ]; then
  git add data-incoming/
  git commit -m "chore(veille): integration markers $(date +%Y-%m-%d_%H:%M) [hermes-local]

Co-Authored-By: Hermes <noreply@hermes>" 2>&1 | tee -a "$LOG_FILE"
  git push 2>&1 | tee -a "$LOG_FILE"
  log "Marqueurs d'intégration poussés sur main."
fi

# Contenu publié proposé → branche de revue (jamais de merge direct sur main).
if ! git diff --quiet lib/data/; then
  BRANCH="veille/incoming-$(date +%Y%m%d-%H%M)"
  log "Nouveau contenu proposé → branche $BRANCH (revue requise)."
  git checkout -b "$BRANCH" 2>&1 | tee -a "$LOG_FILE"
  git add lib/data/
  git commit -m "veille: propositions de contenu $(date +%Y-%m-%d_%H:%M) — revue requise [hermes-local]

Co-Authored-By: Hermes <noreply@hermes>" 2>&1 | tee -a "$LOG_FILE"
  git push -u origin "$BRANCH" 2>&1 | tee -a "$LOG_FILE"
  git checkout main --quiet 2>&1 | tee -a "$LOG_FILE"
  log "Branche $BRANCH poussée. Ouvrez une PR pour valider."
fi

date +%s > "$STATE_FILE"
log "Terminé."
