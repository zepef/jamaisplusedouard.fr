import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

// In-memory store (sera remplace par Supabase quand DATABASE_URL est configure)
// Format: Map<articleSlug, Commentaire[]>
const store = new Map<string, any[]>();

function getComments(slug: string) {
  return store.get(slug) || [];
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return errorResponse("slug requis");

  if (process.env.DATABASE_URL || process.env.POSTGRES_URL) {
    try {
      const { db } = await import("@/lib/db/client");
      const { sql } = await import("drizzle-orm");
      const result = await db.execute(
        sql`SELECT * FROM commentaires WHERE article_slug = ${slug} ORDER BY created_at DESC`
      );
      return jsonResponse({
        commentaires: result.rows.map((r: any) => ({
          id: r.id,
          pseudo: r.pseudo,
          contenu: r.contenu,
          date: r.created_at,
          notes: { utile: r.votes_utile || 0, inutile: r.votes_inutile || 0 },
          signalements: {
            insulte: r.sig_insulte || 0,
            desinformation: r.sig_desinfo || 0,
            spam: r.sig_spam || 0,
          },
        })),
      });
    } catch {
      // Fallback to in-memory
    }
  }

  return jsonResponse({ commentaires: getComments(slug) });
}

export async function POST(request: NextRequest) {
  try {
    const { articleSlug, pseudo, contenu } = await request.json();

    if (!articleSlug || !contenu) {
      return errorResponse("articleSlug et contenu requis");
    }

    if (contenu.trim().length < 5) {
      return errorResponse("Le commentaire doit contenir au moins 5 caracteres");
    }

    if (contenu.trim().length > 2000) {
      return errorResponse("Le commentaire ne doit pas depasser 2000 caracteres");
    }

    const comment = {
      id: crypto.randomUUID(),
      pseudo: (pseudo || "Anonyme").slice(0, 50),
      contenu: contenu.trim().slice(0, 2000),
      date: new Date().toISOString(),
      notes: { utile: 0, inutile: 0 },
      signalements: { insulte: 0, desinformation: 0, spam: 0 },
    };

    if (process.env.DATABASE_URL || process.env.POSTGRES_URL) {
      try {
        const { db } = await import("@/lib/db/client");
        const { sql } = await import("drizzle-orm");
        await db.execute(
          sql`INSERT INTO commentaires (id, article_slug, pseudo, contenu, created_at, votes_utile, votes_inutile, sig_insulte, sig_desinfo, sig_spam)
              VALUES (${comment.id}, ${articleSlug}, ${comment.pseudo}, ${comment.contenu}, NOW(), 0, 0, 0, 0, 0)`
        );
        return jsonResponse(comment, 201);
      } catch (err) {
        console.error("DB insert comment error:", err);
        // Fallback
      }
    }

    // In-memory fallback
    const existing = store.get(articleSlug) || [];
    existing.unshift(comment);
    store.set(articleSlug, existing);

    return jsonResponse(comment, 201);
  } catch {
    return errorResponse("Erreur lors de la publication", 500);
  }
}
