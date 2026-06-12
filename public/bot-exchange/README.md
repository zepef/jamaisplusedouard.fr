# Bot-Exchange — canal d'échange entre bots (→ Hermès)

Ce dossier est le **canal de communication** entre la webapp `edouard` et Hermès.
Il n'y a pas d'API ni de webhook : **tout transite par le dépôt Git**. Le cron
Elestio (`scripts/elestio-cron.sh`) commite et pousse ce dossier sur `main`.
Hermès accède au canal en **clonant / pull-ant le dépôt sur `main`**.

## 1. Accès (côté Hermès)

```bash
git pull --rebase            # récupérer les derniers messages sur main
cat public/bot-exchange/manifest.json   # lire l'index
ls public/bot-exchange/*.json           # lister les messages
```

À chaque pull, Hermès lit `manifest.json` puis traite les messages **non encore vus**
(suivi côté Hermès, par nom de fichier + `publishedAt`).

## 2. Index : `manifest.json`

```json
{
  "processed": { "<doc.docx>": { "outputFile": "...", "entityCount": 0, "...": "" } },
  "outbound":  { "<message>.json": { "to": "hermes", "subject": "...", "publishedAt": "ISO-8601" } },
  "lastRun":   "ISO-8601"
}
```

- `processed` : fichiers `public/inbox/*.docx` analysés par `inbox-watcher.mjs`. Chaque
  entrée pointe vers un `<source>.json` (renseignement brut extrait : entités, connexions,
  pistes). Alimenté automatiquement par le cron.
- `outbound` : **messages adressés à Hermès** (`"to": "hermes"`). C'est ici que Hermès
  doit regarder en priorité. Chaque clé est le nom d'un fichier JSON de ce dossier.
- `lastRun` : dernier passage de l'inbox-watcher.

## 3. Schéma d'un message

Deux familles de fichiers, même enveloppe `_meta` :

**a) Sorties de l'inbox-watcher** (`<source>.json`, générées depuis un `.docx`) :
`{ _meta, entities, connections, leads, proposals, rawTextPreview }`.

**b) Briefs sortants** (ex. `media-ownership-brief-AAAA-MM-JJ.json`) :

```json
{
  "_meta": { "source": "...", "producer": "edouard-webapp/...", "to": "hermes",
             "subject": "...", "generatedAt": "ISO-8601", "version": "1.0.0" },
  "entities": { "persons": [...], "organizations": [...] },
  "connections": [ { "source": "<slug>", "target": "<slug>", "typeLien": "...", "description": "..." } ],
  "leads": [ { "themes": [...], "gravite": "haute|moyenne|basse", "sousReseaux": [...], "centroides": [...], "summary": "..." } ],
  "proposals": { "newNodes": [...], "newConnections": [...], "newControverses": [...], "timelineEvents": [...] }
}
```

`proposals.newNodes` est **déjà au format `PersonneReseau`** du contrat de veille
(`scripts/veille-contract.md`). Hermès peut les reverser tels quels.

### c) Ordres de recherche (`search-request-AAAA-MM-JJ-<slug>.json`)

Pour **lancer une recherche sur un sujet donné**, la webapp dépose un message
`"type": "search-request"`. C'est une **commande adressée à Hermès** : un ordre en
langage naturel (`searchRequest.ordre`) accompagné d'un périmètre et d'un livrable
attendu. Modèle complet : `EXAMPLE-search-request.json`.

```json
{
  "_meta": { "type": "search-request", "to": "hermes", "producer": "edouard-webapp/veille",
             "subject": "...", "generatedAt": "ISO-8601", "version": "1.0.0" },
  "searchRequest": {
    "id": "sr-2026-06-12-temps-de-passage",
    "ordre": "Calcule les temps de passage de reportage sur Édouard Philippe sur tous nos canaux médias.",
    "objectif": "...",
    "perimetre": { "canaux": ["all"], "typesApparition": ["reportage"], "dateDebut": "...", "dateFin": "...", "motsCles": [...] },
    "livrable": { "format": "bot-exchange", "sections": ["apparitions"], "agregations": ["totalMinutes","parChaine","parCategorie"], "nbSourcesMin": 1 },
    "priorite": "moyenne", "echeance": "...", "statut": "open"
  }
}
```

- `canaux` : `["all"]` ou une liste de `slug` de chaînes (cf. `chainesMedia` dans
  `lib/media-data.ts`). `sections`/`champsAttendus` cadrent le livrable.
- Tout ordre déposé doit être **enregistré dans `manifest.json`** (clé `outbound`),
  comme les autres messages sortants.
- **Réponse de Hermès** : voir `scripts/veille-contract.md` § « Ordres de recherche ».
  Hermès répond en citant `inReplyTo` (nom du fichier) et `requestId` dans `_meta`.

## 4. Répondre / accuser réception (Hermès → contenu publié)

Le bot-exchange est principalement **sortant** (webapp → Hermès). Pour donner suite à un
brief, Hermès suit le flux normal du contrat de veille :

1. Construire un fichier `data-incoming/<nom>.json` (schémas `reseau` / `timeline` /
   `controverses` / `investigations` — voir `scripts/veille-contract.md`).
2. Dans `_meta`, citer le brief d'origine, p. ex. :
   `"_meta": { "producer": "hermes", "inReplyTo": "media-ownership-brief-2026-06-11.json", "generatedAt": "..." }`.
3. `git commit && git push` sur `main`. Le cron lance `integrate-proposals.mjs`, qui
   valide, dédoublonne et pousse une **branche de revue** `veille/incoming-<date>`.
   Aucune écriture directe sur le contenu publié.

## 5. Kill switch (à respecter avant tout commit)

Si `data-incoming/PAUSE` existe, **toute la veille est suspendue** : Hermès ne doit rien
committer (ni dans `data-incoming/`, ni en réponse à un brief) tant que le fichier est
présent. Voir `scripts/veille-contract.md` § Kill switch.

## 6. Règles

- Ne jamais réécrire un message existant ; déposer un nouveau fichier daté.
- Toujours `git pull --rebase` avant d'écrire pour éviter les conflits.
- Fichiers volumineux exclus : ne déposer ici que des métadonnées JSON, pas de binaires.
