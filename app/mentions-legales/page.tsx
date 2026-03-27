import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        Mentions légales
      </h1>

      <div className="space-y-6">
        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Éditeur du site
          </h2>
          <p className="text-sm text-muted">
            jamaisplusedouard.fr est un site de veille citoyenne et
            d&apos;opposition politique, publié dans le cadre de la liberté
            d&apos;expression garantie par l&apos;article 11 de la Déclaration
            des Droits de l&apos;Homme et du Citoyen de 1789 et l&apos;article
            10 de la Convention européenne des droits de l&apos;homme.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Hébergement
          </h2>
          <p className="text-sm text-muted">
            Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Droits et responsabilité
          </h2>
          <div className="text-sm text-muted space-y-3">
            <p>
              Ce site publie des informations factuelles et sourcées sur la
              carrière politique d&apos;Édouard Philippe. Chaque article est
              accompagné de ses sources.
            </p>
            <p>
              Conformément à la loi du 29 juillet 1881 sur la liberté de la
              presse, toute personne nommée sur ce site dispose d&apos;un droit
              de réponse. Les demandes peuvent être adressées par courrier
              électronique.
            </p>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Données personnelles
          </h2>
          <p className="text-sm text-muted">
            Seule l&apos;adresse email est collectée lors de l&apos;inscription
            à la newsletter. Elle n&apos;est partagée avec aucun tiers et peut
            être supprimée sur simple demande. Aucun cookie de traçage n&apos;est
            utilisé.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
