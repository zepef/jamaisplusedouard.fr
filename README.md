# jamaisplusedouard.fr

Site de veille citoyenne (biographie, controverses, réseau d'influence, conflits d'intérêts). Application Next.js (App Router) multilingue, à rendu statique, avec quelques routes API dynamiques pour les commentaires, la newsletter et les soumissions.

## Stack

- Next.js 16 (App Router, React 19)
- next-intl (8 langues : fr, en, de, es, ru, ja, it, zh)
- Tailwind CSS v4
- Supabase (PostgreSQL) via `@supabase/supabase-js` pour les données dynamiques
- Resend pour l'envoi d'emails
- D3 / Recharts pour les visualisations

## Architecture des données

- **Contenu éditorial** (biographie, controverses, réseau, conflits, timeline, dashboard PM) : statique, dans `lib/seed-data.ts`, `lib/conflits-data.ts`, `lib/blog-data.ts`, `lib/media-data.ts`. Traductions par locale dans `lib/translations/` (fallback français).
- **Données dynamiques** (commentaires, abonnés newsletter, soumissions citoyennes) : tables Supabase, accédées via `lib/db/supabase.ts`. Le schéma est documenté dans `lib/db/schema.ts` (drizzle-kit).

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Variables d'environnement

Voir `.env.example`. Principales :

- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — accès base (commentaires, newsletter, soumissions)
- `RESEND_API_KEY`, `FROM_EMAIL` — emails de confirmation / newsletter
- `NEXT_PUBLIC_SITE_URL` — URL publique du site

## Base de données

Les tables dynamiques et les fonctions RPC atomiques (votes/signalements dédupliqués) sont définies dans `scripts/sql/0001_security.sql`, à exécuter dans l'éditeur SQL Supabase.

## Scripts (cron Elestio)

- `scripts/inbox-watcher.mjs` — scanne `public/inbox/*.docx`, extrait entités/connexions/pistes vers `public/bot-exchange/*.json`.
- `scripts/daily-newsletter.mjs` — détecte les changements des dernières 24 h (git log), génère et envoie la newsletter via Resend.
- `scripts/elestio-cron.sh` — orchestrateur (pull, watcher, commit/push, newsletter).
