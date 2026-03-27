import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Mentions legales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        Mentions legales
      </h1>

      <div className="space-y-6">
        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Editeur du site
          </h2>
          <p className="text-sm text-muted">
            jamaisplusedouard.fr est un site de veille citoyenne et
            d&apos;opposition politique, publie dans le cadre de la liberte
            d&apos;expression garantie par l&apos;article 11 de la Declaration
            des Droits de l&apos;Homme et du Citoyen de 1789 et l&apos;article
            10 de la Convention europeenne des droits de l&apos;homme.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Hebergement
          </h2>
          <p className="text-sm text-muted">
            Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Droits et responsabilite
          </h2>
          <div className="text-sm text-muted space-y-3">
            <p>
              Ce site publie des informations factuelles et sourcees sur la
              carriere politique d&apos;Edouard Philippe. Chaque article est
              accompagne de ses sources.
            </p>
            <p>
              Conformement a la loi du 29 juillet 1881 sur la liberte de la
              presse, toute personne nommee sur ce site dispose d&apos;un droit
              de reponse. Les demandes peuvent etre adressees par courrier
              electronique.
            </p>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-sm font-mono font-bold text-cyan mb-3">
            Donnees personnelles
          </h2>
          <p className="text-sm text-muted">
            Seule l&apos;adresse email est collectee lors de l&apos;inscription
            a la newsletter. Elle n&apos;est partagee avec aucun tiers et peut
            etre supprimee sur simple demande. Aucun cookie de tracage n&apos;est
            utilise.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
