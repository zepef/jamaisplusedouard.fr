import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { commentId, type } = await request.json();

    if (!commentId || !["utile", "inutile"].includes(type)) {
      return errorResponse("commentId et type (utile/inutile) requis");
    }

    if (process.env.SUPABASE_URL) {
      try {
        const { supabase } = await import("@/lib/db/supabase");
        const col = type === "utile" ? "votes_utile" : "votes_inutile";

        // Lire la valeur actuelle puis incrémenter
        const { data } = await supabase
          .from("commentaires")
          .select(col)
          .eq("id", commentId)
          .single();

        if (data) {
          const current = (data as unknown as Record<string, number>)[col] || 0;
          await supabase
            .from("commentaires")
            .update({ [col]: current + 1 })
            .eq("id", commentId);
        }

        return jsonResponse({ ok: true });
      } catch {
        // fallback
      }
    }

    return jsonResponse({ ok: true });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
