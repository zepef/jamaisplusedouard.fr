import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/GlassCard";
import { investigations, reseau } from "@/lib/seed-data";
import { getInvestigationTranslation } from "@/lib/investigations-translations";

const sourceTypeStyles: Record<string, string> = {
  presse: "tag-actualite",
  officiel: "text-neon-green border-neon-green/30 bg-neon-green/8",
  social: "text-magenta border-magenta/30 bg-magenta/8",
  registre: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

const LOCALES = ["fr", "en", "de", "es", "ru", "ja", "it", "zh"];

export function generateStaticParams() {
  return investigations.flatMap((inv) =>
    LOCALES.map((locale) => ({
      locale,
      slug: inv.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = investigations.find((inv) => inv.slug === slug);
  const translation = item ? getInvestigationTranslation(slug, locale) : null;

  const title = translation?.titre || item?.titre || "Investigation";
  const description = translation?.resume || item?.resume;

  return {
    title,
    description,
  };
}

export default async function InvestigationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = investigations.find((inv) => inv.slug === slug);
  const translation = item ? getInvestigationTranslation(slug, locale) : null;
  const t = useTranslations("common");

  if (!item) notFound();

  // Use translated content with fallback to original French from seed-data
  const displayItem = {
    ...item,
    titre: translation?.titre || item.titre,
    sousTitre: translation?.sousTitre || item.sousTitre,
    resume: translation?.resume || item.resume,
    parties: translation?.parties || item.parties,
  };

  // Find related network nodes
  const noeudsRelies = item.noeudsLies
    .map((s) => reseau.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/investigations"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        {t("retour")}
      </Link>

      <article className="mt-8">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag text-yellow-400 border-yellow-400/30 bg-yellow-400/8">
            {t("investigation")}
          </span>
          <span className="tag text-muted border-glass-border bg-glass">
            {item.parties.length} partie
            {item.parties.length > 1 ? "s" : ""}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          {displayItem.titre}
        </h1>
        <p className="text-sm font-mono text-muted/60 mt-1">
          {displayItem.sousTitre}
        </p>
        <time className="block mt-2 text-xs font-mono text-muted/50">
          {item.date}
        </time>
        <p className="mt-4 text-sm text-muted italic">{displayItem.resume}</p>

        {/* Themes */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.themes.map((theme) => (
            <span
              key={theme}
              className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded border border-glass-border"
            >
              #{theme}
            </span>
          ))}
        </div>

        {/* Parties */}
        <div className="mt-8 space-y-8">
          {displayItem.parties.map((partie, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-xs font-mono text-muted/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {partie.titre}
              </h2>
              <GlassCard className="border border-yellow-400/10">
                <div className="prose-invert text-sm text-foreground/90 leading-relaxed space-y-4">
                  {partie.contenu.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </GlassCard>
            </section>
          ))}
        </div>

        {/* Related network nodes */}
        {noeudsRelies.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-mono font-semibold text-cyan mb-3">
              Noeuds du réseau liés ({noeudsRelies.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {noeudsRelies.map((node) =>
                node ? (
                  <Link
                    key={node.slug}
                    href={`/reseau/${node.slug}`}
                    className="glass rounded-md p-2 text-xs hover:border-cyan/30 border border-glass-border transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-cyan transition-colors font-medium">
                      {node.nom}
                    </span>
                    <p className="text-[10px] text-muted/50 mt-0.5 line-clamp-1">
                      {node.role}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* Sources */}
        <div className="mt-8">
          <h2 className="text-sm font-mono font-semibold text-neon-green mb-3">
            Sources ({item.sources.length})
          </h2>
          <div className="space-y-2">
            {item.sources.map((source, i) => (
              <div
                key={i}
                className="glass rounded-md p-3 flex items-start gap-3 text-xs"
              >
                <span
                  className={`tag shrink-0 ${sourceTypeStyles[source.type] || "tag-actualite"}`}
                >
                  {source.type}
                </span>
                <div className="flex-1 min-w-0">
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-cyan transition-colors font-medium"
                    >
                      {source.titre}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">
                      {source.titre}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
