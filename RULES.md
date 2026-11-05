# RULES — jamaisplusedouard.fr

Une règle en langage naturel a 30 jours pour devenir un contrôle bloquant (CI, linter, type, compilation). Bascule au plus tard le 04/12/2026. Deux violations malgré le prompt → tâche « enforcer la règle dans la CI » en priorité haute.

| # | Énoncé | Mécanisme d'application | Date de bascule CI |
|---|---|---|---|
| R0 | Toute PR contient une section Preuve (commande, sortie, test) | job `preuve` de `.github/workflows/ci.yml` (cherche « ## Preuve ») | 05/11/2026 |
| R1 | Toute PR touchant une fonctionnalité met à jour FEATURE_MAP.md | check CI : diff de code applicatif sans FEATURE_MAP.md → échec (label `pas-de-fonctionnalite` pour exception) | 27/11/2026 |
| R2 | Toute chaîne visible passe par messages/<locale>.json (8 langues complètes) | `npm test` — `tests/i18n-messages.test.mjs` | 05/11/2026 |
| R3 | Pas de clé service Supabase côté client | règle ESLint no-restricted-imports sur lib/db dans les composants client | 20/11/2026 |
| R4 | Votes et signalements passent par les RPC dédupliquées (scripts/sql/0001_security.sql) | test d'intégration sur les RPC | 04/12/2026 |
| R5 | Lint et build verts | workflow CI npm run lint && npm run build | 20/11/2026 |

Préalable : `.github/workflows/ci.yml` lance `npm run lint`, `npm test` et le job `preuve` sur chaque PR. `npm run build` (R5) reste à brancher dans ce workflow avant le 20/11/2026. Installation : `npm ci --legacy-peer-deps` (le lock omet un peer optionnel de `@swc/core`).
