import type { Metadata } from "next";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { controverses } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Controverses",
  description:
    "Les faux pas, contradictions et scandales d'Edouard Philippe documentes et sources.",
};

const graviteColors = {
  haute: "text-neon-red border-neon-red/30 bg-neon-red/8",
  moyenne: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  basse: "text-muted border-glass-border bg-glass",
};

// Extract unique themes
const allThemes = [
  ...new Set(controverses.flatMap((c) => c.themes)),
].sort();

export default function ControversesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-neon-red glow-red">Controverses</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {controverses.length} dossiers documentes — faux pas, contradictions et
        scandales
      </p>

      {/* Theme filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allThemes.slice(0, 10).map((theme) => (
          <span
            key={theme}
            className="tag text-muted border-glass-border bg-glass cursor-pointer hover:border-neon-red/30 transition-colors"
          >
            #{theme}
          </span>
        ))}
      </div>

      {/* Controverses list */}
      <div className="space-y-4">
        {controverses.map((item) => (
          <Link key={item.slug} href={`/controverses/${item.slug}`}>
            <GlassCard glow="red" className="group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="tag tag-controverse">Controverse</span>
                    <span className={`tag ${graviteColors[item.gravite]}`}>
                      {item.gravite}
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-neon-red transition-colors">
                    {item.titre}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{item.resume}</p>
                  <div className="mt-3 flex items-center gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {item.themes.map((theme) => (
                        <span
                          key={theme}
                          className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded"
                        >
                          #{theme}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-neon-green shrink-0">
                      {item.sources.length} source
                      {item.sources.length > 1 ? "s" : ""}
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
