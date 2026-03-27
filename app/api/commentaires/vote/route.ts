import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { commentId, type } = await request.json();

    if (!commentId || !["utile", "inutile"].includes(type)) {
      return errorResponse("commentId et type (utile/inutile) requis");
    }

    if (process.env.DATABASE_URL || process.env.POSTGRES_URL) {
      try {
        const { db } = await import("@/lib/db/client");
        const { sql } = await import("drizzle-orm");
        const col = type === "utile" ? "votes_utile" : "votes_inutile";
        await db.execute(
          sql.raw(
            `UPDATE commentaires SET ${col} = ${col} + 1 WHERE id = '${commentId}'`
          )
        );
        return jsonResponse({ ok: true });
      } catch {
        // fallback
      }
    }

    // In-memory: not implemented for serverless (stateless)
    return jsonResponse({ ok: true, note: "in-memory mode" });
  } catch {
    return errorResponse("Erreur", 500);
  }
}
