import { eq, desc, and, ilike, sql, inArray } from "drizzle-orm";
import { db } from "./client";
import {
  articles,
  sources,
  personnes,
  liensReseau,
  tags,
  articlesTags,
  abonnesNewsletter,
} from "./schema";
import type { ArticleAvecSources, GraphData } from "../types";

// ─── Articles ────────────────────────────────────────────────

export async function getArticles({
  categorie,
  limit = 20,
  offset = 0,
  tag,
}: {
  categorie?: "actualite" | "controverse" | "biographie";
  limit?: number;
  offset?: number;
  tag?: string;
} = {}) {
  const conditions = [eq(articles.published, true)];
  if (categorie) conditions.push(eq(articles.categorie, categorie));

  let articleIds: number[] | undefined;
  if (tag) {
    const tagRow = await db
      .select({ id: tags.id })
      .from(tags)
      .where(eq(tags.slug, tag))
      .limit(1);
    if (tagRow.length > 0) {
      const linked = await db
        .select({ articleId: articlesTags.articleId })
        .from(articlesTags)
        .where(eq(articlesTags.tagId, tagRow[0].id));
      articleIds = linked.map((r) => r.articleId);
      if (articleIds.length === 0) return [];
    }
  }

  const where =
    articleIds && articleIds.length > 0
      ? and(...conditions, inArray(articles.id, articleIds))
      : and(...conditions);

  return db
    .select()
    .from(articles)
    .where(where)
    .orderBy(desc(articles.datePublication))
    .limit(limit)
    .offset(offset);
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleAvecSources | null> {
  const [article] = await db
    .select()
    .from(articles)
    .where(and(eq(articles.slug, slug), eq(articles.published, true)))
    .limit(1);

  if (!article) return null;

  const articleSources = await db
    .select()
    .from(sources)
    .where(eq(sources.articleId, article.id));

  const articleTagRows = await db
    .select({ nom: tags.nom, slug: tags.slug, id: tags.id })
    .from(articlesTags)
    .innerJoin(tags, eq(articlesTags.tagId, tags.id))
    .where(eq(articlesTags.articleId, article.id));

  return {
    ...article,
    sources: articleSources,
    tags: articleTagRows,
  };
}

export async function getArticleCount(
  categorie?: "actualite" | "controverse" | "biographie"
) {
  const conditions = [eq(articles.published, true)];
  if (categorie) conditions.push(eq(articles.categorie, categorie));

  const [result] = await db
    .select({ count: sql<number>`count(*)` })
    .from(articles)
    .where(and(...conditions));

  return result.count;
}

// ─── Sources ─────────────────────────────────────────────────

export async function getSourcesByArticle(articleId: number) {
  return db
    .select()
    .from(sources)
    .where(eq(sources.articleId, articleId));
}

export async function getSourceCount() {
  const [result] = await db
    .select({ count: sql<number>`count(*)` })
    .from(sources);
  return result.count;
}

// ─── Reseau ──────────────────────────────────────────────────

export async function getPersonnes() {
  return db.select().from(personnes);
}

export async function getPersonneBySlug(slug: string) {
  const [personne] = await db
    .select()
    .from(personnes)
    .where(eq(personnes.slug, slug))
    .limit(1);

  if (!personne) return null;

  const liens = await db
    .select()
    .from(liensReseau)
    .where(
      sql`${liensReseau.personneSourceId} = ${personne.id} OR ${liensReseau.personneCibleId} = ${personne.id}`
    );

  return { personne, liens };
}

export async function getGraphData(): Promise<GraphData> {
  const allPersonnes = await db.select().from(personnes);
  const allLiens = await db.select().from(liensReseau);

  return {
    nodes: allPersonnes.map((p) => ({
      id: p.id,
      nom: p.nom,
      slug: p.slug,
      role: p.role,
      partiPolitique: p.partiPolitique,
      group: p.partiPolitique || "autre",
    })),
    links: allLiens.map((l) => ({
      source: l.personneSourceId,
      target: l.personneCibleId,
      typeLien: l.typeLien,
      description: l.description,
      force: l.force,
    })),
  };
}

export async function getPersonneCount() {
  const [result] = await db
    .select({ count: sql<number>`count(*)` })
    .from(personnes);
  return result.count;
}

// ─── Tags ────────────────────────────────────────────────────

export async function getAllTags() {
  return db.select().from(tags);
}

export async function getTagsByCategorie(
  categorie: "actualite" | "controverse" | "biographie"
) {
  const result = await db
    .selectDistinct({ nom: tags.nom, slug: tags.slug })
    .from(tags)
    .innerJoin(articlesTags, eq(tags.id, articlesTags.tagId))
    .innerJoin(articles, eq(articlesTags.articleId, articles.id))
    .where(eq(articles.categorie, categorie));
  return result;
}

// ─── Recherche ───────────────────────────────────────────────

export async function searchArticles(query: string, limit = 20) {
  return db
    .select()
    .from(articles)
    .where(
      and(
        eq(articles.published, true),
        sql`(
          ${articles.titre} ILIKE ${"%" + query + "%"} OR
          ${articles.contenu} ILIKE ${"%" + query + "%"} OR
          ${articles.resume} ILIKE ${"%" + query + "%"}
        )`
      )
    )
    .orderBy(desc(articles.datePublication))
    .limit(limit);
}

// ─── Newsletter ──────────────────────────────────────────────

export async function subscribeNewsletter(email: string, token: string) {
  return db
    .insert(abonnesNewsletter)
    .values({ email, token, confirmed: false })
    .onConflictDoNothing();
}

export async function confirmNewsletter(token: string) {
  return db
    .update(abonnesNewsletter)
    .set({ confirmed: true })
    .where(eq(abonnesNewsletter.token, token));
}

export async function getConfirmedSubscribers() {
  return db
    .select({ email: abonnesNewsletter.email })
    .from(abonnesNewsletter)
    .where(eq(abonnesNewsletter.confirmed, true));
}

// ─── Stats (page d'accueil) ──────────────────────────────────

export async function getStats() {
  const [controverseCount] = await db
    .select({ count: sql<number>`count(*)` })
    .from(articles)
    .where(
      and(eq(articles.published, true), eq(articles.categorie, "controverse"))
    );

  const [articleCount] = await db
    .select({ count: sql<number>`count(*)` })
    .from(articles)
    .where(eq(articles.published, true));

  const [connexionCount] = await db
    .select({ count: sql<number>`count(*)` })
    .from(liensReseau);

  const [sourceCount] = await db
    .select({ count: sql<number>`count(*)` })
    .from(sources);

  return {
    controverses: controverseCount.count,
    articles: articleCount.count,
    connexions: connexionCount.count,
    sources: sourceCount.count,
  };
}
