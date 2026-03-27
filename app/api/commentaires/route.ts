import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return errorResponse("slug requis");

  if (process.env.SUPABASE_URL) {
    try {
      const { supabase } = await import("@/lib/db/supabase");
      const { data, error } = await supabase
        .from("commentaires")
        .select("*")
        .eq("article_slug", slug)
        .order("created_at", { ascending: false });

      if (error) throw error;

      return jsonResponse({
        commentaires: (data || []).map((r: any) => ({
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
      // Fallback
    }
  }

  return jsonResponse({ commentaires: [] });
}

export async function POST(request: NextRequest) {
  try {
    const { articleSlug, pseudo, contenu } = await request.json();

    if (!articleSlug || !contenu) {
      return errorResponse("articleSlug et contenu requis");
    }

    if (contenu.trim().length < 5) {
      return errorResponse("Le commentaire doit contenir au moins 5 caractères");
    }

    if (contenu.trim().length > 2000) {
      return errorResponse("Le commentaire ne doit pas dépasser 2000 caractères");
    }

    const comment = {
      id: crypto.randomUUID(),
      pseudo: (pseudo || "Anonyme").slice(0, 50),
      contenu: contenu.trim().slice(0, 2000),
      date: new Date().toISOString(),
      notes: { utile: 0, inutile: 0 },
      signalements: { insulte: 0, desinformation: 0, spam: 0 },
    };

    if (process.env.SUPABASE_URL) {
      try {
        const { supabase } = await import("@/lib/db/supabase");
        const { error } = await supabase.from("commentaires").insert({
          id: comment.id,
          article_slug: articleSlug,
          pseudo: comment.pseudo,
          contenu: comment.contenu,
          votes_utile: 0,
          votes_inutile: 0,
          sig_insulte: 0,
          sig_desinfo: 0,
          sig_spam: 0,
        });

        if (error) {
          console.error("Supabase comment error:", error.message);
        }

        return jsonResponse(comment, 201);
      } catch (err) {
        console.error("DB insert comment error:", err);
      }
    }

    return jsonResponse(comment, 201);
  } catch {
    return errorResponse("Erreur lors de la publication", 500);
  }
}
