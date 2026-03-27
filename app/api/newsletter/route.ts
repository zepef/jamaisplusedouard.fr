import type { NextRequest } from "next/server";
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

    // Utiliser le client Supabase JS (pas de problème de pooler)
    if (process.env.SUPABASE_URL) {
      const { supabase } = await import("@/lib/db/supabase");

      const { error } = await supabase
        .from("abonnes_newsletter")
        .upsert(
          { email: normalizedEmail, token, confirmed: false },
          { onConflict: "email", ignoreDuplicates: true }
        );

      if (error) {
        console.error("Supabase newsletter error:", error.message);
        return errorResponse(`Erreur BDD: ${error.message}`, 500);
      }

      // Envoyer l'email de confirmation si Resend est configuré
      if (process.env.RESEND_API_KEY) {
        try {
          const { sendConfirmationEmail } = await import("@/lib/email");
          await sendConfirmationEmail(normalizedEmail, token);
        } catch (emailError) {
          console.error("Erreur envoi email:", emailError);
        }
      }

      return jsonResponse({
        message: "Inscription enregistrée. Vérifiez votre boîte mail.",
      });
    }

    // Fallback sans BDD
    console.log(`[newsletter] Inscription sans BDD: ${normalizedEmail}`);
    return jsonResponse({
      message: "Inscription enregistrée. Vous serez notifié dès le lancement.",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Newsletter error:", msg);
    return errorResponse(`Erreur: ${msg}`, 500);
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return errorResponse("Token manquant");
  }

  if (!process.env.SUPABASE_URL) {
    return errorResponse("Base de données non configurée", 503);
  }

  try {
    const { supabase } = await import("@/lib/db/supabase");

    const { error } = await supabase
      .from("abonnes_newsletter")
      .update({ confirmed: true })
      .eq("token", token);

    if (error) {
      return errorResponse(`Erreur: ${error.message}`, 500);
    }

    return jsonResponse({ message: "Abonnement confirmé." });
  } catch (error) {
    return errorResponse("Erreur lors de la confirmation", 500);
  }
}
