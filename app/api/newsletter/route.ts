import type { NextRequest } from "next/server";
import { subscribeNewsletter, confirmNewsletter } from "@/lib/db/queries";
import { sendConfirmationEmail } from "@/lib/email";
import { jsonResponse, errorResponse } from "@/lib/api-utils";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return errorResponse("Email invalide");
    }

    const normalizedEmail = email.toLowerCase().trim();
    const token = randomUUID();

    await subscribeNewsletter(normalizedEmail, token);

    // Send confirmation email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await sendConfirmationEmail(normalizedEmail, token);
      } catch (emailError) {
        console.error("Erreur envoi email:", emailError);
        // Don't fail the subscription if email sending fails
      }
    }

    return jsonResponse({
      message: "Inscription enregistree. Verifiez votre boite mail.",
    });
  } catch (error) {
    return errorResponse("Erreur lors de l'inscription", 500);
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return errorResponse("Token manquant");
  }

  try {
    await confirmNewsletter(token);
    return jsonResponse({ message: "Abonnement confirme." });
  } catch (error) {
    return errorResponse("Erreur lors de la confirmation", 500);
  }
}
