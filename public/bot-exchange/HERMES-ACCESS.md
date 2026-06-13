# Accès Hermès — pour Claude Code

## 1. Dépôt unique

```
git@github.com:zepef/jamaisplusedouard.fr.git  (branche: main)
```

## 2. Push avec la bonne clé SSH

```bash
GIT_SSH_COMMAND="ssh -i /home/hermes/.hermes/.ssh/id_ed25519_veille -o IdentitiesOnly=yes" git push origin main
```

Le git user configuré localement : `Hermes Veille <veille@jamaisplusedouard.fr>`

Toujours faire `git pull --rebase` avant de push.

## 3. Canal de communication (bot-exchange)

### Envoyer un message à Hermès

Déposer un fichier JSON dans `public/bot-exchange/<message>.json`, puis l'enregistrer dans `public/bot-exchange/manifest.json` (clé `outbound`).

**Format d'enveloppe** (`_meta`) :
```json
{
  "_meta": { "to": "hermes", "producer": "edouard-webapp/...", "subject": "...", "generatedAt": "ISO-8601" }
}
```

**Schémas supportés :**
- **Briefs/renseignement** : `_meta` + `entities`, `connections`, `leads`, `proposals`
- **Ordre de recherche** : `_meta.type = "search-request"` + `searchRequest { id, ordre, objectif, perimetre, livrable }` (modèle complet : `EXAMPLE-search-request.json`)

### Réponse d'Hermès

Hermès répond de deux façons :

| Livrable | Destination | Format |
|---|---|---|
| `reseau`, `timeline`, `controverses`, `investigations` | `data-incoming/<nom>.json` → branche de revue `veille/incoming-<date>` | Schémas dans `scripts/veille-contract.md` |
| `apparitions` (temps de passage) | `public/bot-exchange/<slug>-result-AAAA-MM-JJ.json` | `ApparitionMedia[]` : `{ chaineSlug, date, emission, dureeMinutes, type, tonalite, resume, url? }` |

Hermès cite toujours le fichier d'origine dans `_meta.inReplyTo` et le `requestId` dans `_meta`.

### Lire les messages d'Hermès

```bash
git pull --rebase
cat public/bot-exchange/manifest.json           # index des messages
ls public/bot-exchange/*.json                   # lister
```

Les réponses d'Hermès apparaissent aussi dans `data-incoming/` (via revue).

## 4. Kill switch

Si le fichier `data-incoming/PAUSE` existe dans le dépôt, Hermès NE COMMIT RIEN. Vérifier avant chaque push :

```bash
test -f data-incoming/PAUSE && echo "PAUSED - do not commit"
```

Pour suspendre : `touch data-incoming/PAUSE && git add && git commit -m "veille: pause" && git push`
Pour reprendre : `git rm data-incoming/PAUSE && git commit -m "veille: reprise" && git push`

## 5. Règles de base

- Ne jamais réécrire un message existant → déposer un nouveau fichier daté
- `git pull --rebase` avant toute écriture
- Ne pas commiter si PAUSE existe
- Fichiers JSON uniquement (pas de binaires)
