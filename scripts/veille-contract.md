# Contrat d'intégration de la veille (Hermès → contenu publié)

Hermès dépose des fichiers JSON **structurés** dans `data-incoming/` (via git commit/push sur `main`). Le cron Elestio lance `scripts/integrate-proposals.mjs`, qui valide, dédoublonne et fusionne les nouvelles entrées dans `lib/data/*.json`, puis pousse une **branche de revue** `veille/incoming-<date>`. Aucune écriture directe sur `main` pour le contenu publié : vous validez via Pull Request.

## Format de fichier (`data-incoming/<nom>.json`)

```json
{
  "_meta": { "source": "rapport_xyz.docx", "producer": "hermes", "generatedAt": "2026-04-09T08:00:00Z" },
  "reseau": [ /* PersonneReseau[] */ ],
  "timeline": [ /* TimelineEvent[] */ ],
  "controverses": [ /* Controverse[] */ ],
  "investigations": [ /* Investigation[] */ ]
}
```

Toutes les sections de contenu sont optionnelles ; n'incluez que ce que vous proposez.
Les fichiers nommés `manifest.json`, `EXAMPLE.json` ou commençant par `_` sont ignorés.

## Schémas (champs requis = *)

### PersonneReseau (réseau)
- `nom`*, `slug`*, `role`*, `description`*, `typeLien`*
- `partiPolitique`?
- `sousReseaux`? : sous-ensemble de `young-leaders, sino-francais, matignon, le-havre, entreprises, horizons, villepin, chiraquien, facilitateurs, portuaire, bilderberg, coalition-2027, cyber-influence`
- `rattachement`? : un ou plusieurs de `philippe, juppe, raffarin, villepin`

### TimelineEvent (timeline)
- `annee`*, `titre`*, `description`*, `categorie`* ∈ `biographie | controverse | carriere`
- `section`?

### Controverse (controverses)
- `slug`*, `titre`*, `resume`*, `contenu`*, `date`*, `gravite`* ∈ `haute | moyenne | basse`
- `themes`* : string[]
- `sources`* : `{ titre*, url*, type* ∈ presse|officiel|social|registre, auteur? }[]`

### Investigation (investigations)
- `slug`*, `titre`*, `sousTitre`*, `resume`*, `date`*
- `themes`* : string[]
- `parties`* : `{ titre*, contenu* }[]`
- `noeudsLies`* : string[] (slugs de nœuds réseau liés)
- `sources`* : `{ titre*, url?, type* ∈ presse|officiel|social|registre }[]`

## Kill switch (mise en pause depuis le dépôt)

Créer un fichier `data-incoming/PAUSE` suspend **toute la veille** : le cron
n'exécute ni l'inbox-watcher ni l'intégration, et `integrate-proposals.mjs`
s'arrête immédiatement. Hermès doit lui aussi vérifier la présence de ce fichier
après `git pull` et **ne rien committer** tant qu'il existe.

```bash
# Activer la pause
touch data-incoming/PAUSE && git add data-incoming/PAUSE && git commit -m "veille: pause" && git push
# Lever la pause
git rm data-incoming/PAUSE && git commit -m "veille: reprise" && git push
```

## Déduplication
- `reseau` / `controverses` / `investigations` : clé = `slug`
- `timeline` : clé = `annee` + `titre`

Une entrée dont la clé existe déjà dans `lib/data/*.json` est **ignorée** (pas d'écrasement). Les entrées invalides sont rejetées et listées dans le rapport ; les entrées valides du même fichier sont tout de même intégrées.

## Canal retour (webapp → Hermès) : `public/bot-exchange/`

En sens inverse de `data-incoming/`, la webapp dépose des **briefs et du renseignement
extrait** à destination de Hermès dans `public/bot-exchange/` (poussé sur `main` par le
cron Elestio). Hermès y accède via `git pull` sur `main`, lit `public/bot-exchange/manifest.json`
(clé `outbound` = messages `"to": "hermes"`) puis traite les fichiers JSON référencés.
Protocole complet : voir `public/bot-exchange/README.md`.
