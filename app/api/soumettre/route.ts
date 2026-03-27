import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
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

    // Log the submission (sera stocke en BDD quand PostgreSQL sera connecte)
    const submission = {
      categorie,
      contenu: contenu.trim(),
      sources: sources || null,
      contact: anonyme ? null : contact || null,
      anonyme: Boolean(anonyme),
      date: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };

    console.log("[soumission]", JSON.stringify(submission));

    if (process.env.DATABASE_URL) {
      // TODO: stocker en BDD quand elle sera connectee
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
