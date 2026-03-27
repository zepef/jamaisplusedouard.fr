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

    if (process.env.DATABASE_URL || process.env.POSTGRES_URL) {
      try {
        const { db } = await import("@/lib/db/client");
        const { sql } = await import("drizzle-orm");
        const colMap: Record<string, string> = {
          insulte: "sig_insulte",
          desinformation: "sig_desinfo",
          spam: "sig_spam",
        };
        const col = colMap[motif];
        await db.execute(
          sql.raw(
            `UPDATE commentaires SET ${col} = ${col} + 1 WHERE id = '${commentId}'`
          )
        );
        return jsonResponse({ ok: true, motif });
      } catch {
        // fallback
      }
    }

    return jsonResponse({ ok: true, motif, note: "in-memory mode" });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
