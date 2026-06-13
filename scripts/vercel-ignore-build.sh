#!/usr/bin/env bash
# Vercel — « Ignored Build Step ».
#
# Évite les rebuilds inutiles : l'agent Hermès local pousse régulièrement sur main
# des commits qui ne touchent que data-incoming/ (marqueurs d'intégration) ou
# public/bot-exchange/ (messages inter-bots). Ces fichiers ne font pas partie du
# site publié, donc un déploiement n'apporterait rien.
#
# Convention Vercel (cf. Settings → Git → Ignored Build Step) :
#   exit 0 → build ANNULÉ (skip)   |   exit 1 → build LANCÉ
#
# À renseigner dans Vercel → Settings → Git → Ignored Build Step :
#   bash scripts/vercel-ignore-build.sh
#
# En cas de doute (clone superficiel, premier commit), on build par sécurité :
# mieux vaut un build de trop qu'un déploiement manqué.

set -uo pipefail

# Comparaison impossible (HEAD^ absent) → on build.
if ! git rev-parse --verify --quiet "HEAD^" >/dev/null; then
  echo "[vercel-ignore] HEAD^ introuvable (clone superficiel ?) — build par défaut."
  exit 1
fi

# Diff du dernier commit en excluant les dossiers de veille.
if git diff --quiet "HEAD^" "HEAD" -- . ':(exclude)data-incoming' ':(exclude)public/bot-exchange'; then
  echo "[vercel-ignore] Seuls data-incoming/ et/ou public/bot-exchange/ ont changé — build sauté."
  exit 0
fi

echo "[vercel-ignore] Changements de contenu/code détectés — build lancé."
exit 1
