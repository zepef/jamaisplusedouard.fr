import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { investigations } from "@/lib/seed-data";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.investigations" });
  return { title: t("title"), description: t("description") };
}

// Extract unique themes
const allThemes = [
  ...new Set(investigations.flatMap((inv) => inv.themes)),
].sort();

export default async function InvestigationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("pages.investigations");

  const plural = (n: number) => (n > 1 ? "s" : "");

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-yellow-400 glow-yellow">{t("title")}</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {t("subtitle", {
          count: investigations.length,
          plural: plural(investigations.length),
        })}
      </p>

      {/* Theme filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allThemes.slice(0, 12).map((theme) => (
          <span
            key={theme}
            className="tag text-muted border-glass-border bg-glass cursor-pointer hover:border-yellow-400/30 transition-colors"
          >
            #{theme}
          </span>
        ))}
      </div>

      {/* Investigations list */}
      <div className="space-y-4">
        {investigations.map((item) => (
          <Link key={item.slug} href={`/investigations/${item.slug}`}>
            <GlassCard className="group cursor-pointer border border-yellow-400/10 hover:border-yellow-400/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="tag text-yellow-400 border-yellow-400/30 bg-yellow-400/8">
                      {t("labels.investigation")}
                    </span>
                    <span className="tag text-muted border-glass-border bg-glass">
                      {item.parties.length}{" "}
                      {t("labels.parties", { plural: plural(item.parties.length) })}
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-yellow-400 transition-colors">
                    {item.titre}
                  </h2>
                  <p className="text-xs font-mono text-muted/60 mt-0.5">
                    {item.sousTitre}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.resume}</p>
                  <div className="mt-3 flex items-center gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {item.themes.slice(0, 5).map((theme) => (
                        <span
                          key={theme}
                          className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded"
                        >
                          #{theme}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-neon-green shrink-0">
                      {item.sources.length}{" "}
                      {t("labels.sources", { plural: plural(item.sources.length) })}
                    </span>
                    <span className="text-[10px] font-mono text-cyan shrink-0">
                      {item.noeudsLies.length}{" "}
                      {t("labels.noeudsLies", { plural: plural(item.noeudsLies.length) })}
                    </span>
                  </div>
                </div>
                <time className="text-xs font-mono text-muted/50 shrink-0">
                  {item.date}
                </time>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
