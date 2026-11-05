# RULES — jamaisplusedouard.fr

Une règle en langage naturel a 30 jours pour devenir un contrôle bloquant (CI, linter, type, compilation). Bascule au plus tard le 04/12/2026. Deux violations malgré le prompt → tâche « enforcer la règle dans la CI » en priorité haute.

| # | Énoncé | Mécanisme d'application | Date de bascule CI |
|---|---|---|---|
| R0 | Toute PR contient une section Preuve (commande, sortie, test) | check CI sur la description de PR (action qui cherche « ## Preuve ») | 20/11/2026 |
| R1 | Toute PR touchant une fonctionnalité met à jour FEATURE_MAP.md | check CI : diff de code applicatif sans FEATURE_MAP.md → échec (label `pas-de-fonctionnalite` pour exception) | 27/11/2026 |
| R2 | Toute chaîne visible passe par messages/<locale>.json (8 langues complètes) | script CI de comparaison des clés i18n | 27/11/2026 |
| R3 | Pas de clé service Supabase côté client | règle ESLint no-restricted-imports sur lib/db dans les composants client | 20/11/2026 |
| R4 | Votes et signalements passent par les RPC dédupliquées (scripts/sql/0001_security.sql) | test d'intégration sur les RPC | 04/12/2026 |
| R5 | Lint et build verts | workflow CI npm run lint && npm run build | 20/11/2026 |

Préalable : ce dépôt n'a pas de CI GitHub Actions. Créer `.github/workflows/ci.yml` (au moins : npm run lint, npm run build) avant le 20/11/2026.
