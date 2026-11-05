# TRUST — jamaisplusedouard.fr

## Niveaux
- **L0** : chaque diff relu par le manager avant commit.
- **L1** : commit libre, PR relue par le manager.
- **L2** : PR relue par un agent reviewer + CI verte ; le manager ne lit que les écarts.
- **L3** : auto-merge si CI verte, evals passés, feature map à jour, périmètre dans la liste autorisée.

## Agents (au 04/11/2026)
| Agent | Niveau | PR consécutives sans reprise | Dernière révision |
|---|---|---|---|
| Cursor Cloud Agent | L1 | 0 | 04/11/2026 |
| Claude Code (session PEF) | L1 | 0 | 04/11/2026 |
| Grok Build | L1 | 0 | 04/11/2026 |
| Agent reviewer (à créer) | L1 | 0 | 04/11/2026 |

## Montée
- L0 → L1 : 3 PR consécutives sans reprise.
- L1 → L2 : 5 PR consécutives sans reprise, et CI du dépôt en place.
- L2 → L3 : 10 PR consécutives sans reprise, evals des skills de vérification au-dessus du seuil, toutes les règles de RULES.md basculées en CI.
- Périmètre L3 autorisé : à définir par PEF (jamais : migrations de base, paiement, production, secrets).

## Descente
- Immédiate d'un niveau à la première régression en production.
- Immédiate à L0 au premier contournement de règle (CI désactivée, test supprimé, preuve falsifiée).
- Le compteur repart à 0 après toute descente.

## Garde-fou
Quel que soit le niveau, la mise en production et les migrations restent soumises à l'accord de PEF.
