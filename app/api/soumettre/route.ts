import type { NextRequest } from "next/server";
import { randomUUID } from "crypto";
import { jsonResponse, errorResponse } from "@/lib/api-utils";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  if (!rateLimit(`soumettre:${getClientIp(request)}`, 5, 60_000)) {
    return errorResponse("Trop de soumissions. Réessayez dans une minute.", 429);
  }

  try {
    const body = await request.json();
    const { categorie, contenu, sources, contact, anonyme } = body;

    if (!contenu || contenu.trim().length < 20) {
      return errorResponse(
        "L'information doit contenir au moins 20 caracteres."
      );
    }

    const validCategories = [
      "conflits-interets",
      "reseau",
      "gestion-locale",
      "matraquage",
      "autre",
    ];
    if (!validCategories.includes(categorie)) {
      return errorResponse("Categorie invalide.");
    }

    if (process.env.SUPABASE_URL) {
      const { supabase } = await import("@/lib/db/supabase");
      const { error } = await supabase.from("soumissions").insert({
        id: randomUUID(),
        categorie,
        contenu: contenu.trim(),
        sources: sources?.trim() || null,
        contact: anonyme ? null : contact?.trim() || null,
        anonyme: Boolean(anonyme),
      });

      if (error) {
        console.error("Submission DB error:", error.message);
        return errorResponse("Erreur lors de la soumission.", 500);
      }
    }

    return jsonResponse({
      message:
        "Information recue. Elle sera verifiee et croisee avant toute publication.",
    });
  } catch (error) {
    console.error("Submission error:", error);
    return errorResponse("Erreur lors de la soumission.", 500);
  }
}
