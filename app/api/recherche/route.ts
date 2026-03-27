import type { NextRequest } from "next/server";
import { searchArticles } from "@/lib/db/queries";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");
  const limit = parseInt(request.nextUrl.searchParams.get("limit") || "20");

  if (!query || query.trim().length < 2) {
    return errorResponse("Le parametre q doit contenir au moins 2 caracteres");
  }

  try {
    const results = await searchArticles(query.trim(), limit);
    return jsonResponse({ query: query.trim(), results, count: results.length });
  } catch (error) {
    return errorResponse("Erreur lors de la recherche", 500);
  }
}
