import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { chainesConflits, type ChaineConflit } from "@/lib/conflits-data";
import { getTranslations } from "next-intl/server";
import { getLocalizedConflits } from "@/lib/get-localized-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.conflits" });
  return { title: t("title"), description: t("description") };
}

const graviteColors = {
  critique: "text-neon-red border-neon-red/30 bg-neon-red/8",
  haute: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  moyenne: "text-muted border-glass-border bg-glass",
};

export default async function ConflitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("conflits");
  const tc = await getTranslations("common");
  const graviteLabels: Record<string, string> = {
    critique: tc("critique"),
    haute: tc("haute"),
    moyenne: tc("moyenne"),
  };
  const consequence = t("consequence");
  const localizedConflits = getLocalizedConflits(locale);

  const critiques = localizedConflits.filter((c) => c.gravite === "critique");
  const autres = localizedConflits.filter((c) => c.gravite !== "critique");

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-neon-red glow-red">{t("titre")}</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {chainesConflits.length} {t("sousTitre")}
      </p>

      {/* Legende */}
      <GlassCard glow="red" className="mb-8">
        <p className="text-sm text-muted">
          {t("legende")}
        </p>
      </GlassCard>

      {/* Chaines critiques */}
      <h2 className="text-lg font-bold text-neon-red mb-4">
        {t("critiques")} ({critiques.length})
      </h2>
      <div className="space-y-6 mb-12">
        {critiques.map((chaine) => (
          <ChaineCard key={chaine.id} chaine={chaine} graviteLabels={graviteLabels} consequence={consequence} />
        ))}
      </div>

      {/* Autres chaines */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        {t("autres")} ({autres.length})
      </h2>
      <div className="space-y-6">
        {autres.map((chaine) => (
          <ChaineCard key={chaine.id} chaine={chaine} graviteLabels={graviteLabels} consequence={consequence} />
        ))}
      </div>
    </div>
  );
}

function ChaineCard({
  chaine,
  graviteLabels,
  consequence,
}: {
  chaine: ChaineConflit;
  graviteLabels: Record<string, string>;
  consequence: string;
}) {
  return (
    <GlassCard
      glow={chaine.gravite === "critique" ? "red" : "none"}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`tag ${
                graviteColors[chaine.gravite as keyof typeof graviteColors]
              }`}
            >
              {graviteLabels[chaine.gravite] ?? chaine.gravite}
            </span>
            <span className="tag text-muted border-glass-border bg-glass">
              {chaine.domaine}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {chaine.titre}
          </h3>
          <p className="text-sm text-muted mt-1">{chaine.resume}</p>
        </div>
      </div>

      {/* Maillons (chain visualization) */}
      <div className="relative pl-6 border-l-2 border-neon-red/20 space-y-4 mb-4">
        {chaine.maillons.map((maillon, i) => (
          <div key={i} className="relative">
            {/* Dot on the line */}
            <div
              className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 ${
                i === 0
                  ? "border-cyan bg-cyan/30"
                  : i === chaine.maillons.length - 1
                    ? "border-neon-red bg-neon-red/30"
                    : "border-magenta bg-magenta/30"
              }`}
            />

            <div className="glass rounded-md p-3">
              <div className="flex items-center gap-2 mb-1">
                <Link
                  href={`/reseau/${maillon.slug}`}
                  className="text-sm font-semibold text-foreground hover:text-cyan transition-colors"
                >
                  {maillon.nom}
                </Link>
                <span className="text-[10px] font-mono text-muted/50">
                  {maillon.role}
                </span>
              </div>
              {maillon.lienSuivant && (
                <p className="text-xs text-magenta/80 mt-1">
                  → {maillon.lienSuivant}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Consequence */}
      <div className="glass rounded-md p-3 border border-neon-red/10 mb-3">
        <h4 className="text-xs font-mono font-bold text-neon-red mb-1">
          {consequence}
        </h4>
        <p className="text-xs text-muted leading-relaxed">
          {chaine.consequence}
        </p>
      </div>

      {/* Sources */}
      <div className="flex flex-wrap gap-2">
        {chaine.sources.map((src, i) => (
          <a
            key={i}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-neon-green hover:text-neon-green/80 transition-colors"
          >
            [{src.titre}]
          </a>
        ))}
      </div>
    </GlassCard>
  );
}
