<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — jamaisplusedouard.fr

Site de veille citoyenne multilingue (8 langues), commentaires et newsletter.

Ces règles s'appliquent à tout agent de codage (Cursor, Claude Code, Grok Build, Codex…).

## 1. Aucune PR sans preuve d'exécution
- Ne jamais écrire « ça marche ». Prouver.
- Chaque PR contient une section **Preuve** avec :
  - la ou les commandes exécutées, parmi : `npm run lint`, `npm run build`, `navigation sur /fr et une autre locale avec capture` ;
  - la sortie capturée (extrait utile, code de sortie) ;
  - le test ajouté ou rejoué ;
  - pour l'UI : capture ou trace de navigation (URL, étapes).
- Une PR sans section Preuve est renvoyée.
- Procédure : `skills/verify/run-local/SKILL.md`.

## 2. Reproduction avant toute correction de bug
- Avant de corriger : reproduire, et joindre la repro (commande, test qui échoue, ou étapes).
- Le correctif ajoute un test qui échouait avant et passe après.
- Pas de repro = ticket renvoyé, pas de correctif « à l'aveugle ».

## 3. Feature map à jour
- Toute PR qui ajoute ou modifie une fonctionnalité met à jour `FEATURE_MAP.md` dans le même commit.
- Si une repro tourne en rond, partir de l'entrée de la feature map concernée.

## 4. Règles et confiance
- Les règles dures sont dans `RULES.md` ; leur contournement fait redescendre l'agent (voir `TRUST.md`).
- Niveau actuel de chaque agent : `TRUST.md`.

## 5. Garde-fous PEF
- Rien en production, aucune migration de base, aucun envoi ni publication sans l'accord de PEF.
- Aucun secret dans le code, les PR ou les logs.
