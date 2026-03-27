import type { NextRequest } from "next/server";
import { db } from "@/lib/db/client";
import { articles, sources, articlesTags, tags } from "@/lib/db/schema";
import { getArticles } from "@/lib/db/queries";
import { jsonResponse, errorResponse, validateApiKey, slugify } from "@/lib/api-utils";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const categorie = searchParams.get("categorie") as
    | "actualite"
    | "controverse"
    | "biographie"
    | null;
  const limit = parseInt(searchParams.get("limit") || "20");
  const offset = parseInt(searchParams.get("offset") || "0");
  const tag = searchParams.get("tag") || undefined;

  try {
    const result = await getArticles({
      categorie: categorie || undefined,
      limit,
      offset,
      tag,
    });
    return jsonResponse(result);
  } catch (error) {
    return errorResponse("Erreur lors de la recuperation des articles", 500);
  }
}

export async function POST(request: NextRequest) {
  if (!validateApiKey(request)) {
    return errorResponse("Non autorise", 401);
  }

  try {
    const body = await request.json();
    const {
      titre,
      contenu,
      resume,
      categorie,
      dateEvenement,
      imageUrl,
      published,
      articleSources,
      articleTags,
    } = body;

    if (!titre || !contenu || !categorie) {
      return errorResponse("titre, contenu et categorie sont requis");
    }

    const slug = slugify(titre);

    const [article] = await db
      .insert(articles)
      .values({
        titre,
        slug,
        contenu,
        resume: resume || null,
        categorie,
        dateEvenement: dateEvenement ? new Date(dateEvenement) : null,
        imageUrl: imageUrl || null,
        published: published ?? false,
      })
      .returning();

    // Insert sources
    if (articleSources && Array.isArray(articleSources)) {
      for (const src of articleSources) {
        await db.insert(sources).values({
          articleId: article.id,
          url: src.url,
          titre: src.titre || null,
          auteur: src.auteur || null,
          dateSource: src.dateSource ? new Date(src.dateSource) : null,
          type: src.type || "presse",
          archiveUrl: src.archiveUrl || null,
        });
      }
    }

    // Insert tags
    if (articleTags && Array.isArray(articleTags)) {
      for (const tagName of articleTags) {
        const tagSlug = slugify(tagName);
        let [existingTag] = await db
          .select()
          .from(tags)
          .where(eq(tags.slug, tagSlug))
          .limit(1);

        if (!existingTag) {
          [existingTag] = await db
            .insert(tags)
            .values({ nom: tagName, slug: tagSlug })
            .returning();
        }

        await db
          .insert(articlesTags)
          .values({ articleId: article.id, tagId: existingTag.id })
          .onConflictDoNothing();
      }
    }

    return jsonResponse(article, 201);
  } catch (error) {
    return errorResponse("Erreur lors de la creation de l'article", 500);
  }
}
