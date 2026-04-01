import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import { controverses } from "@/lib/seed-data";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const graviteColors = {
  haute: "text-neon-red border-neon-red/30 bg-neon-red/8",
  moyenne: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  basse: "text-muted border-glass-border bg-glass",
};

const sourceTypeStyles: Record<string, string> = {
  presse: "tag-actualite",
  officiel: "text-neon-green border-neon-green/30 bg-neon-green/8",
  social: "text-magenta border-magenta/30 bg-magenta/8",
  registre: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

export function generateStaticParams() {
  return controverses.flatMap((c) =>
    routing.locales.map((locale) => ({
      locale,
      slug: c.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = controverses.find((c) => c.slug === slug);
  return {
    title: item?.titre || "Controverse",
    description: item?.resume,
  };
}

export default async function ControverseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = controverses.find((c) => c.slug === slug);
  const tc = await getTranslations("common");

  if (!item) notFound();

  const graviteLabels: Record<string, string> = {
    haute: tc("haute"),
    moyenne: tc("moyenne"),
    basse: tc("basse"),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/controverses"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        {tc("retour")}
      </Link>

      <article className="mt-8">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag tag-controverse">{tc("controverse")}</span>
          <span className={`tag ${graviteColors[item.gravite as keyof typeof graviteColors]}`}>
            {graviteLabels[item.gravite] ?? item.gravite}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          {item.titre}
        </h1>
        <time className="block mt-2 text-xs font-mono text-muted/50">
          {item.date}
        </time>
        <p className="mt-4 text-sm text-muted italic">{item.resume}</p>

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

        {/* Content */}
        <GlassCard glow="red" className="mt-8">
          <div className="prose-invert text-sm text-foreground/90 leading-relaxed space-y-4">
            {item.contenu.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>

        {/* Sources */}
        <div className="mt-8">
          <h2 className="text-sm font-mono font-semibold text-neon-green mb-3">
            {tc("sourcesVerifiees")} ({item.sources.length})
          </h2>
          <div className="space-y-2">
            {item.sources.map((source, i) => (
              <div key={i} className="glass rounded-md p-3 flex items-start gap-3 text-xs">
                <span
                  className={`tag shrink-0 ${sourceTypeStyles[source.type] || "tag-actualite"}`}
                >
                  {source.type}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-cyan transition-colors font-medium"
                  >
                    {source.titre}
                  </a>
                  {source.auteur && (
                    <p className="text-muted/50 font-mono mt-0.5">
                      {source.auteur}
                    </p>
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
