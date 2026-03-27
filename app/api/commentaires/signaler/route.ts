import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { commentId, motif } = await request.json();

    if (
      !commentId ||
      !["insulte", "desinformation", "spam"].includes(motif)
    ) {
      return errorResponse(
        "commentId et motif (insulte/desinformation/spam) requis"
      );
    }

    if (process.env.SUPABASE_URL) {
      try {
        const { supabase } = await import("@/lib/db/supabase");
        const colMap: Record<string, string> = {
          insulte: "sig_insulte",
          desinformation: "sig_desinfo",
          spam: "sig_spam",
        };
        const col = colMap[motif];

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

        return jsonResponse({ ok: true, motif });
      } catch {
        // fallback
      }
    }

    return jsonResponse({ ok: true, motif });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
