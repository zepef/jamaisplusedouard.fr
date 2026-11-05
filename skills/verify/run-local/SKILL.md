---
name: verify-run-local
description: Exécute la suite locale de jamaisplusedouard.fr et capture la preuve d'exécution pour la PR.
---

# verify/run-local

## Quand
Avant de déclarer une PR prête. Obligatoire pour tout bugfix (repro d'abord) et toute feature.

## Étapes
1. Lire `FEATURE_MAP.md` : repérer la commande ou le test de la fonctionnalité touchée.
2. Installer les dépendances si besoin (`npm ci --legacy-peer-deps`). Le lockfile n'est pas installable avec `npm ci` seul. `npm test` n'a pas besoin de `node_modules`.
3. Lancer la preuve :
   - `npm test`
   - `npm run lint` (après `npm ci`)
   - si une page ou l'UI est touchée : `npm run build`, puis navigation sur `/fr` et une autre locale
   - la commande de la ligne FEATURE_MAP concernée (ex. `node --check scripts/daily-newsletter.mjs`)
4. Capturer : commande exacte, code de sortie, extrait stdout/stderr (≤ 40 lignes utiles).
5. Coller le tout sous `## Preuve` dans la description de PR. Le job `preuve` échoue sans ce titre.
6. Si échec : ne pas corriger à l'aveugle — reproduire, puis corriger, puis rejouer.

## Interdit
- Déclarer « ça marche » sans sortie.
- Désactiver un test pour faire passer la CI.
- Modifier `FEATURE_MAP.md` sans commit lié à la feature.
- Lancer `node scripts/daily-newsletter.mjs` : cet appel envoie des e-mails. Sans accord de PEF, seul `node --check scripts/daily-newsletter.mjs` est permis.
