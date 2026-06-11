import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { commentId, type, voterId } = await request.json();

    if (!commentId || !["utile", "inutile"].includes(type)) {
      return errorResponse("commentId et type (utile/inutile) requis");
    }
    if (!voterId || typeof voterId !== "string") {
      return errorResponse("voterId requis");
    }

    if (process.env.SUPABASE_URL) {
      try {
        const { supabase } = await import("@/lib/db/supabase");
        const { error } = await supabase.rpc("vote_comment", {
          p_comment_id: commentId,
          p_type: type,
          p_voter_id: voterId.slice(0, 64),
        });
        if (error) console.error("Vote RPC error:", error.message);
      } catch (err) {
        console.error("Vote error:", err);
      }
    }

    return jsonResponse({ ok: true });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
