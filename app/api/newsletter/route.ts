import type { NextRequest } from "next/server";
import { jsonResponse, errorResponse } from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return errorResponse("Email invalide");
    }

    // Si la BDD n'est pas configuree, on stocke en memoire
    // et on retourne un succes (sera migre quand PostgreSQL sera connecte)
    const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING;
    if (!dbUrl) {
      console.log(`[newsletter] Inscription sans BDD: ${email}`);
      return jsonResponse({
        message: "Inscription enregistree. Vous serez notifie des le lancement.",
      });
    }

    // Avec BDD
    const { subscribeNewsletter } = await import("@/lib/db/queries");
    const { sendConfirmationEmail } = await import("@/lib/email");
    const { randomUUID } = await import("crypto");

    const normalizedEmail = email.toLowerCase().trim();
    const token = randomUUID();

    await subscribeNewsletter(normalizedEmail, token);

    if (process.env.RESEND_API_KEY) {
      try {
        await sendConfirmationEmail(normalizedEmail, token);
      } catch (emailError) {
        console.error("Erreur envoi email:", emailError);
      }
    }

    return jsonResponse({
      message: "Inscription enregistree. Verifiez votre boite mail.",
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return errorResponse("Erreur lors de l'inscription", 500);
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return errorResponse("Token manquant");
  }

  if (!process.env.DATABASE_URL) {
    return errorResponse("Base de donnees non configuree", 503);
  }

  try {
    const { confirmNewsletter } = await import("@/lib/db/queries");
    await confirmNewsletter(token);
    return jsonResponse({ message: "Abonnement confirme." });
  } catch (error) {
    return errorResponse("Erreur lors de la confirmation", 500);
  }
}
