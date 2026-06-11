import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { commentId, motif, voterId } = await request.json();

    if (
      !commentId ||
      !["insulte", "desinformation", "spam"].includes(motif)
    ) {
      return errorResponse(
        "commentId et motif (insulte/desinformation/spam) requis"
      );
    }
    if (!voterId || typeof voterId !== "string") {
      return errorResponse("voterId requis");
    }

    if (process.env.SUPABASE_URL) {
      try {
        const { supabase } = await import("@/lib/db/supabase");
        const { error } = await supabase.rpc("report_comment", {
          p_comment_id: commentId,
          p_motif: motif,
          p_voter_id: voterId.slice(0, 64),
        });
        if (error) console.error("Report RPC error:", error.message);
      } catch (err) {
        console.error("Report error:", err);
      }
    }

    return jsonResponse({ ok: true, motif });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
