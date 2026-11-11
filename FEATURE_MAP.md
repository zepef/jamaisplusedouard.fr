# FEATURE_MAP — jamaisplusedouard.fr

Site de veille citoyenne multilingue (8 langues : fr, en, de, es, ru, ja, it, zh — `i18n/routing.ts`), commentaires et newsletter.

Stack : Next.js 16, next-intl, Supabase, Resend, D3. CI : `.github/workflows/ci.yml` (jobs `lint`, `test`, `preuve`) ; cron Elestio (`scripts/elestio-cron.sh`).

| Fonctionnalité | Point d'entrée | Chemin de navigation / déclenchement | État attendu | Commande ou test |
|---|---|---|---|---|
| Accueil | `app/[locale]/page.tsx` | /fr | page rendue en statique | `npm run build` |
| Biographie | `app/[locale]/biographie/page.tsx` | /fr/biographie | fiche et timeline de `lib/seed-data.ts` (via `lib/get-localized-data.ts`) | `npm run build` |
| Controverses | `app/[locale]/controverses/page.tsx` | /fr/controverses | contenu de `lib/seed-data.ts` | `npm run build` |
| Conflits | `app/[locale]/conflits/page.tsx` | /fr/conflits | contenu de `lib/conflits-data.ts` | `npm run build` |
| Réseau d'influence | `app/[locale]/reseau/page.tsx` | /fr/reseau | graphe D3 (`components/reseau/NetworkGraph.tsx`), données `lib/seed-data.ts` | navigation |
| Dashboard | `app/[locale]/dashboard/page.tsx` | /fr/dashboard | graphiques Recharts (`components/ui/DashboardPM.tsx`) | navigation |
| Blog | `app/[locale]/blog/page.tsx` | /fr/blog | articles de `lib/blog-data.ts` | `npm run build` |
| Actualités | `app/[locale]/actualites/page.tsx` | /fr/actualites | événements de `lib/seed-data.ts` | `npm run build` |
| Investigations | `app/[locale]/investigations/page.tsx` | /fr/investigations | contenu de `lib/seed-data.ts` | `npm run build` |
| Matraquage | `app/[locale]/matraquage/page.tsx` | /fr/matraquage | contenu de `lib/media-data.ts` | `npm run build` |
| Recherche | `app/[locale]/recherche/page.tsx` | /fr/recherche?q= | résultats (`searchParams.q`) | navigation |
| Soumettre une info | `app/[locale]/soumettre/page.tsx`, `app/api/soumettre/route.ts` | formulaire → POST /api/soumettre | ligne `soumissions` créée si `SUPABASE_URL` est défini | appel API + vérif table |
| Newsletter | `components/ui/NewsletterForm.tsx`, `app/api/newsletter/route.ts`, `app/[locale]/newsletter/confirmer/page.tsx`, `scripts/daily-newsletter.mjs` | formulaire sur /fr et /fr/actualites → POST /api/newsletter ; confirmation /fr/newsletter/confirmer | abonné dans `abonnes_newsletter` ; l'envoi Resend est fait par le script | `node --check scripts/daily-newsletter.mjs` (aucun mode dry-run : `node scripts/daily-newsletter.mjs` envoie) |
| Inbox watcher | `scripts/inbox-watcher.mjs` | `npm run inbox-watch` | JSON dans `public/bot-exchange` | `npm run inbox-watch` |
| Sources | `app/[locale]/sources/page.tsx` | /fr/sources | page présente | `npm run build` |
| Mentions légales | `app/[locale]/mentions-legales/page.tsx` | /fr/mentions-legales | page présente | `npm run build` |
| Vérification locale | `skills/verify/run-local/SKILL.md`, `.github/workflows/ci.yml` | PR : jobs `lint`, `test`, `preuve` | `npm run lint` et `npm test` verts ; description avec `## Preuve` | `npm test` |
| Déploiement Cloudflare (pilote) | `wrangler.jsonc`, `open-next.config.ts` | `npm run cf:deploy` → https://jamaisplusedouard.tckc.workers.dev | mêmes pages que jamaisplusedouard.fr (8 langues) ; aucun secret posé : pas d'écriture Supabase ni d'envoi Resend ; aucun domaine (la production reste sur Vercel) | `npm run cf:build` puis comparaison des URL avec la production |

Mise à jour obligatoire dans le même commit que toute modification d'une fonctionnalité.
