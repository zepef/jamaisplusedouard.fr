import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SubmitForm from "./SubmitForm";

export const metadata: Metadata = {
  title: "Soumettez vos informations",
  description:
    "Vous disposez d'informations sur Edouard Philippe, son reseau ou ses activites ? Transmettez-les de maniere securisee.",
};

export default function SoumettrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-cyan glow-cyan">Soumettez vos informations</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        Vous disposez d&apos;informations sur Edouard Philippe, son reseau ou
        ses activites ? Transmettez-les.
      </p>

      {/* Securite */}
      <GlassCard glow="cyan" className="mb-8">
        <h2 className="text-sm font-mono font-bold text-cyan mb-3">
          Protection des sources
        </h2>
        <div className="text-sm text-muted space-y-2">
          <p>
            La protection des lanceurs d&apos;alerte est garantie par la loi
            Sapin II (2016) et la loi du 21 mars 2022 visant a ameliorer la
            protection des lanceurs d&apos;alerte. La liberte d&apos;expression
            est un droit fondamental protege par l&apos;article 11 de la
            Declaration des Droits de l&apos;Homme et du Citoyen.
          </p>
          <p>
            Nous ne collectons aucune donnee d&apos;identification au-dela de ce
            que vous choisissez de communiquer. L&apos;anonymat est possible et
            respecte.
          </p>
        </div>
      </GlassCard>

      {/* Types d'infos recherchees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">🔍</span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Conflits d&apos;interets
              </h3>
              <p className="text-xs text-muted mt-1">
                Liens financiers, mandats non declares, relations entre
                fonctions publiques et interets prives (Atos, Areva, CMA
                CGM...).
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">🕸️</span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Reseau d&apos;influence
              </h3>
              <p className="text-xs text-muted mt-1">
                Young Leaders, France China Foundation, nominations,
                pantouflage, relations non documentees entre acteurs du reseau.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">🏛️</span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Gestion locale
              </h3>
              <p className="text-xs text-muted mt-1">
                Mairie du Havre, communaute urbaine, port, marches publics,
                urbanisme, favoritisme, gestion des fonds publics.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">📺</span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Matraquage mediatique
              </h3>
              <p className="text-xs text-muted mt-1">
                Connivence avec des journalistes, pressions editoriales,
                couverture orientee, questions interdites lors d&apos;interviews.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Formulaire */}
      <GlassCard className="mb-8">
        <h2 className="text-sm font-mono font-bold text-foreground mb-4">
          Formulaire de soumission
        </h2>
        <SubmitForm />
      </GlassCard>

      {/* Canaux alternatifs */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        Canaux alternatifs securises
      </h2>
      <div className="space-y-3">
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-sm font-mono text-cyan shrink-0 w-20">
              Signal
            </span>
            <div>
              <p className="text-sm text-foreground">
                Application de messagerie chiffree de bout en bout. Aucune
                metadonnee conservee.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Numero communique sur demande via le formulaire ci-dessus.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-sm font-mono text-cyan shrink-0 w-20">
              ProtonMail
            </span>
            <div>
              <p className="text-sm text-foreground">
                Email chiffre, base en Suisse, hors juridiction francaise.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Adresse communiquee sur demande via le formulaire ci-dessus.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-sm font-mono text-cyan shrink-0 w-20">
              Courrier
            </span>
            <div>
              <p className="text-sm text-foreground">
                Documents papier, copies, photos. Le courrier postal reste le
                canal le plus difficile a surveiller.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Adresse postale communiquee sur demande via le formulaire.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Engagement */}
      <GlassCard glow="magenta" className="mt-8">
        <h2 className="text-sm font-mono font-bold text-magenta mb-3">
          Notre engagement
        </h2>
        <ul className="text-sm text-muted space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Toute information recue est verifiee et croisee avant publication.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Aucune information n&apos;est publiee sans source verifiable.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              L&apos;identite des sources n&apos;est jamais revelee, meme sur
              demande judiciaire (protection des sources journalistiques, loi du
              4 janvier 2010).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Les documents sensibles sont stockes sur des serveurs chiffres
              hors juridiction francaise.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Droit de reponse garanti conformement a la loi du 29 juillet 1881.
            </span>
          </li>
        </ul>
      </GlassCard>
    </div>
  );
}
