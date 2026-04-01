import GlassCard from "@/components/ui/GlassCard";
import SubmitForm from "./SubmitForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "soumettre" });
  return { title: t("titre"), description: t("sousTitre") };
}

export default async function SoumettrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("soumettre");
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-cyan glow-cyan">{t("titre")}</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {t("sousTitre")}
      </p>

      {/* Securite */}
      <GlassCard glow="cyan" className="mb-8">
        <h2 className="text-sm font-mono font-bold text-cyan mb-3">
          {t("protection")}
        </h2>
        <div className="text-sm text-muted space-y-2">
          <p>
            La protection des lanceurs d&apos;alerte est garantie par la loi
            Sapin II (2016) et la loi du 21 mars 2022 visant à améliorer la
            protection des lanceurs d&apos;alerte. La liberté d&apos;expression
            est un droit fondamental protégé par l&apos;article 11 de la
            Déclaration des Droits de l&apos;Homme et du Citoyen.
          </p>
          <p>
            Nous ne collectons aucune donnée d&apos;identification au-delà de ce
            que vous choisissez de communiquer. L&apos;anonymat est possible et
            respecté.
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
                {t("categories.conflitsInterets")}
              </h3>
              <p className="text-xs text-muted mt-1">
                Liens financiers, mandats non déclarés, relations entre
                fonctions publiques et intérêts privés (Atos, Areva, CMA
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
                {t("categories.reseau")}
              </h3>
              <p className="text-xs text-muted mt-1">
                Young Leaders, France China Foundation, nominations,
                pantouflage, relations non documentées entre acteurs du réseau.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">🏛️</span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {t("categories.gestionLocale")}
              </h3>
              <p className="text-xs text-muted mt-1">
                Mairie du Havre, communauté urbaine, port, marchés publics,
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
                {t("categories.matraquage")}
              </h3>
              <p className="text-xs text-muted mt-1">
                Connivence avec des journalistes, pressions éditoriales,
                couverture orientée, questions interdites lors d&apos;interviews.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Formulaire */}
      <GlassCard className="mb-8">
        <h2 className="text-sm font-mono font-bold text-foreground mb-4">
          {t("formulaire")}
        </h2>
        <SubmitForm />
      </GlassCard>

      {/* Canaux alternatifs */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        {t("canaux")}
      </h2>
      <div className="space-y-3">
        <GlassCard className="!p-4">
          <div className="flex items-start gap-3">
            <span className="text-sm font-mono text-cyan shrink-0 w-20">
              Signal
            </span>
            <div>
              <p className="text-sm text-foreground">
                Application de messagerie chiffrée de bout en bout. Aucune
                métadonnée conservée.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Numéro communiqué sur demande via le formulaire ci-dessus.
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
                Email chiffré, basé en Suisse, hors juridiction française.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Adresse communiquée sur demande via le formulaire ci-dessus.
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
                canal le plus difficile à surveiller.
              </p>
              <p className="text-xs text-muted/50 mt-1">
                Adresse postale communiquée sur demande via le formulaire.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Engagement */}
      <GlassCard glow="magenta" className="mt-8">
        <h2 className="text-sm font-mono font-bold text-magenta mb-3">
          {t("engagement")}
        </h2>
        <ul className="text-sm text-muted space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Toute information reçue est vérifiée et croisée avant publication.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Aucune information n&apos;est publiée sans source vérifiable.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              L&apos;identité des sources n&apos;est jamais révélée, même sur
              demande judiciaire (protection des sources journalistiques, loi du
              4 janvier 2010).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Les documents sensibles sont stockés sur des serveurs chiffrés
              hors juridiction française.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">✓</span>
            <span>
              Droit de réponse garanti conformément à la loi du 29 juillet 1881.
            </span>
          </li>
        </ul>
      </GlassCard>
    </div>
  );
}
