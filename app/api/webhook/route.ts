import type { NextRequest } from "next/server";
import { db } from "@/lib/db/client";
import { articles, sources, articlesTags, tags } from "@/lib/db/schema";
import { getConfirmedSubscribers } from "@/lib/db/queries";
import { sendAlertEmail } from "@/lib/email";
import {
  jsonResponse,
  errorResponse,
  validateApiKey,
  slugify,
} from "@/lib/api-utils";
import { eq } from "drizzle-orm";

/**
 * Webhook pour OpenClaw — reception des articles generes par les agents.
 *
 * Format attendu :
 * {
 *   action: "publish_article",
 *   article: { titre, contenu, resume, categorie, dateEvenement },
 *   sources: [{ url, titre, auteur, dateSource, type }],  // OBLIGATOIRE, min 1
 *   tags: ["tag1", "tag2"],
 *   notify: true  // optionnel, envoie une alerte aux abonnes
 * }
 */
export async function POST(request: NextRequest) {
  if (!validateApiKey(request)) {
    return errorResponse("Non autorise", 401);
  }

  try {
    const body = await request.json();
    const { action } = body;

    if (action === "publish_article") {
      const {
        article: articleData,
        sources: sourcesData,
        tags: tagsData,
        notify,
      } = body;

      // Validation article
      if (
        !articleData?.titre ||
        !articleData?.contenu ||
        !articleData?.categorie
      ) {
        return errorResponse(
          "Article incomplet : titre, contenu et categorie requis"
        );
      }

      if (
        !["actualite", "controverse", "biographie"].includes(
          articleData.categorie
        )
      ) {
        return errorResponse(
          "Categorie invalide : actualite, controverse ou biographie"
        );
      }

      // Validation sources OBLIGATOIRE
      if (
        !sourcesData ||
        !Array.isArray(sourcesData) ||
        sourcesData.length === 0
      ) {
        return errorResponse(
          "Au moins une source est requise pour publier. Chaque source doit contenir : url, type."
        );
      }

      for (const src of sourcesData) {
        if (!src.url) {
          return errorResponse("Chaque source doit contenir une url");
        }
        if (
          !src.type ||
          !["presse", "officiel", "social", "registre"].includes(src.type)
        ) {
          return errorResponse(
            `Type de source invalide pour "${src.url}". Types acceptes : presse, officiel, social, registre`
          );
        }
      }

      const slug = slugify(articleData.titre);

      // Insert article
      const [article] = await db
        .insert(articles)
        .values({
          titre: articleData.titre,
          slug,
          contenu: articleData.contenu,
          resume: articleData.resume || null,
          categorie: articleData.categorie,
          dateEvenement: articleData.dateEvenement
            ? new Date(articleData.dateEvenement)
            : null,
          published: true,
        })
        .returning();

      // Insert sources
      for (const src of sourcesData) {
        await db.insert(sources).values({
          articleId: article.id,
          url: src.url,
          titre: src.titre || null,
          auteur: src.auteur || null,
          dateSource: src.dateSource ? new Date(src.dateSource) : null,
          type: src.type,
          archiveUrl: src.archiveUrl || null,
        });
      }

      // Insert tags
      if (tagsData && Array.isArray(tagsData)) {
        for (const tagName of tagsData) {
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

      // Notify subscribers
      if (notify && process.env.RESEND_API_KEY) {
        try {
          const subscribers = await getConfirmedSubscribers();
          if (subscribers.length > 0) {
            await sendAlertEmail(
              subscribers.map((s) => s.email),
              articleData.titre,
              articleData.titre,
              slug,
              articleData.categorie
            );
          }
        } catch (emailError) {
          console.error("Erreur envoi alertes:", emailError);
          // Don't fail the webhook if email fails
        }
      }

      return jsonResponse(
        {
          message: "Article publie",
          article: { id: article.id, slug },
          sources: sourcesData.length,
          notified: notify ? true : false,
        },
        201
      );
    }

    return errorResponse(
      "Action non reconnue. Actions disponibles : publish_article"
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return errorResponse("Erreur lors du traitement du webhook", 500);
  }
}
