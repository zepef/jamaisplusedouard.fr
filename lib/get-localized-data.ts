// Locale-aware data accessors
// Each function merges French source data with locale-specific translations
// Falls back to French if no translation available for a given locale

import {
  ficheSynthetique,
  timeline,
  controverses,
  reseau,
  type TimelineEvent,
  type Controverse,
  type PersonneReseau,
} from "@/lib/seed-data";
import { chainesConflits, type ChaineConflit } from "@/lib/conflits-data";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import {
  timelineTranslations,
  ficheTranslations,
} from "@/lib/translations/timeline.translations";
import { controversesTranslations } from "@/lib/translations/controverses.translations";
import { reseauRoleTranslations } from "@/lib/translations/reseau.translations";
import { conflitsTranslations } from "@/lib/translations/conflits.translations";
import { blogTranslations } from "@/lib/translations/blog.translations";

// ─── ficheSynthetique ────────────────────────────────────────────────────────

export function getLocalizedFiche(locale: string) {
  const t = ficheTranslations[locale];
  if (!t) return ficheSynthetique;
  return { ...ficheSynthetique, ...t };
}

// ─── Timeline ────────────────────────────────────────────────────────────────

export function getLocalizedTimeline(locale: string): TimelineEvent[] {
  const translations = timelineTranslations[locale];
  if (!translations) return timeline;
  return timeline.map((event, i) => {
    const t = translations[i];
    if (!t) return event;
    return { ...event, titre: t.titre, description: t.description };
  });
}

// ─── Controverses ────────────────────────────────────────────────────────────

export function getLocalizedControverses(locale: string): Controverse[] {
  const translations = controversesTranslations[locale];
  if (!translations) return controverses;
  return controverses.map((c) => {
    const t = translations[c.slug];
    if (!t) return c;
    return { ...c, titre: t.titre, resume: t.resume };
  });
}

export function getLocalizedControverse(
  locale: string,
  slug: string
): Controverse | undefined {
  const item = controverses.find((c) => c.slug === slug);
  if (!item) return undefined;
  const translations = controversesTranslations[locale];
  const t = translations?.[slug];
  if (!t) return item;
  return { ...item, titre: t.titre, resume: t.resume };
}

// ─── Réseau ──────────────────────────────────────────────────────────────────

export function getLocalizedReseau(locale: string): PersonneReseau[] {
  const roleMap = reseauRoleTranslations[locale];
  if (!roleMap) return reseau;
  return reseau.map((p) => {
    const role = roleMap[p.slug];
    return role ? { ...p, role } : p;
  });
}

export function getLocalizedPersonne(
  locale: string,
  slug: string
): PersonneReseau | undefined {
  const personne = reseau.find((p) => p.slug === slug);
  if (!personne) return undefined;
  const roleMap = reseauRoleTranslations[locale];
  const role = roleMap?.[slug];
  return role ? { ...personne, role } : personne;
}

// ─── Conflits ────────────────────────────────────────────────────────────────

export function getLocalizedConflits(locale: string): ChaineConflit[] {
  const translations = conflitsTranslations[locale];
  if (!translations) return chainesConflits;
  return chainesConflits.map((c) => {
    const t = translations[c.id];
    if (!t) return c;
    return {
      ...c,
      titre: t.titre,
      resume: t.resume,
      domaine: t.domaine,
      consequence: t.consequence,
      maillons: c.maillons.map((m, i) => {
        const tm = t.maillons[i];
        if (!tm) return m;
        return { ...m, role: tm.role, lienSuivant: tm.lienSuivant };
      }),
    };
  });
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export function getLocalizedBlogPosts(locale: string): BlogPost[] {
  const translations = blogTranslations[locale];
  if (!translations) return blogPosts;
  return blogPosts.map((p) => {
    const t = translations[p.slug];
    if (!t) return p;
    return { ...p, titre: t.titre, resume: t.resume };
  });
}

export function getLocalizedBlogPost(
  locale: string,
  slug: string
): BlogPost | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;
  const translations = blogTranslations[locale];
  const t = translations?.[slug];
  if (!t) return post;
  return { ...post, titre: t.titre, resume: t.resume };
}
