import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY non configuree");
  return new Resend(apiKey);
}

const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@jamaisplusedouard.fr";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jamaisplusedouard.fr";

export async function sendConfirmationEmail(email: string, token: string) {
  const confirmUrl = `${SITE_URL}/newsletter/confirmer?token=${token}`;

  await getResend().emails.send({
    from: `Jamais Plus Edouard <${FROM_EMAIL}>`,
    to: email,
    subject: "Confirmez votre inscription — jamaisplusedouard.fr",
    html: `
      <div style="font-family: monospace; background: #0a0a0f; color: #e0e0e0; padding: 40px 20px; max-width: 500px; margin: 0 auto;">
        <h1 style="color: #00f0ff; font-size: 24px; margin-bottom: 8px;">JAMAIS+EDOUARD</h1>
        <p style="color: #888899; font-size: 12px; margin-bottom: 24px;">Veille citoyenne</p>

        <p style="font-size: 14px; line-height: 1.6;">
          Confirmez votre inscription pour recevoir les alertes :
          nouvelles controverses, connexions decouvertes, mises a jour.
        </p>

        <a href="${confirmUrl}"
           style="display: inline-block; margin: 24px 0; padding: 12px 24px; background: rgba(0,240,255,0.1); border: 1px solid rgba(0,240,255,0.3); color: #00f0ff; text-decoration: none; font-size: 14px; border-radius: 4px;">
          Confirmer mon inscription
        </a>

        <p style="color: #888899; font-size: 11px; margin-top: 24px;">
          Si vous n'avez pas demande cette inscription, ignorez cet email.
        </p>

        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />

        <p style="color: #555; font-size: 10px;">
          jamaisplusedouard.fr — Liberte d'expression (Art. 11 DDHC)
        </p>
      </div>
    `,
  });
}

export async function sendAlertEmail(
  emails: string[],
  subject: string,
  articleTitle: string,
  articleSlug: string,
  categorie: string
) {
  const articleUrl = `${SITE_URL}/${categorie === "controverse" ? "controverses" : "actualites"}/${articleSlug}`;
  const accentColor = categorie === "controverse" ? "#ff3333" : "#00f0ff";

  for (const email of emails) {
    await getResend().emails.send({
      from: `Jamais Plus Edouard <${FROM_EMAIL}>`,
      to: email,
      subject: `[ALERTE] ${subject}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #e0e0e0; padding: 40px 20px; max-width: 500px; margin: 0 auto;">
          <h1 style="color: #00f0ff; font-size: 24px; margin-bottom: 8px;">JAMAIS+EDOUARD</h1>
          <p style="color: ${accentColor}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;">Nouvelle ${categorie}</p>

          <h2 style="font-size: 18px; color: #e0e0e0; margin-bottom: 12px;">${articleTitle}</h2>

          <a href="${articleUrl}"
             style="display: inline-block; margin: 16px 0; padding: 12px 24px; background: rgba(${categorie === "controverse" ? "255,51,51" : "0,240,255"},0.1); border: 1px solid rgba(${categorie === "controverse" ? "255,51,51" : "0,240,255"},0.3); color: ${accentColor}; text-decoration: none; font-size: 14px; border-radius: 4px;">
            Lire l'article →
          </a>

          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
          <p style="color: #555; font-size: 10px;">jamaisplusedouard.fr</p>
        </div>
      `,
    });
  }
}
