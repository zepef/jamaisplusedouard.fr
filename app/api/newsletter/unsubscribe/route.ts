import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return new Response("Email manquant", { status: 400 });
  }

  if (!process.env.SUPABASE_URL) {
    return new Response("Service indisponible", { status: 503 });
  }

  try {
    const { supabase } = await import("@/lib/db/supabase");

    const { error } = await supabase
      .from("abonnes_newsletter")
      .delete()
      .eq("email", decodeURIComponent(email).toLowerCase().trim());

    if (error) {
      console.error("Unsubscribe error:", error.message);
      return new Response("Erreur lors du desabonnement", { status: 500 });
    }

    return new Response(
      `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"/><title>Desabonnement</title></head>
<body style="font-family:monospace;background:#0a0a0f;color:#d4d4d8;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;">
  <div style="text-align:center;max-width:400px;padding:40px 20px;">
    <h1 style="color:#00f0ff;font-size:24px;">JAMAIS+EDOUARD</h1>
    <p style="color:#a1a1aa;font-size:14px;margin-top:16px;">Vous avez ete desabonne de la newsletter.</p>
    <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://jamaisplusedouard.fr"}" style="color:#00f0ff;font-size:12px;margin-top:24px;display:inline-block;">Retour au site</a>
  </div>
</body>
</html>`,
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch {
    return new Response("Erreur interne", { status: 500 });
  }
}
