import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { controverses, reseau, timeline, stats } from "@/lib/seed-data";

export default function Home() {
  const topControverses = controverses.filter((c) => c.gravite === "haute").slice(0, 4);
  const recentTimeline = timeline.slice(-5).reverse();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-cyan glow-cyan">JAMAIS</span>
          <span className="text-magenta glow-magenta">+</span>
          <span className="text-foreground">EDOUARD</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto font-mono">
          Veille citoyenne sur Edouard Philippe — l&apos;IA au service du
          Citoyen.
          <br />
          <span className="text-xs text-muted/50">
            Suivi automatise 24/7 par agents IA
          </span>
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted/70">
          <span className="inline-block h-2 w-2 rounded-full bg-neon-green pulse-neon" />
          <span className="font-mono">AGENTS EN LIGNE</span>
        </div>
      </section>

      {/* Stats banner */}
      <section className="mb-12">
        <GlassCard className="flex flex-wrap items-center justify-around gap-6 py-4">
          <Stat
            label="Controverses"
            value={String(stats.controverses)}
            color="text-neon-red"
          />
          <Stat
            label="Evenements documentes"
            value={String(stats.articles)}
            color="text-cyan"
          />
          <Stat
            label="Connexions reseau"
            value={String(stats.connexions)}
            color="text-magenta"
          />
          <Stat
            label="Sources verifiees"
            value={String(stats.sources)}
            color="text-neon-green"
          />
        </GlassCard>
      </section>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controverses */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-neon-red glow-red">
              Controverses majeures
            </h2>
            <Link
              href="/controverses"
              className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
            >
              Voir tout →
            </Link>
          </div>
          <div className="space-y-4">
            {topControverses.map((item) => (
              <Link key={item.slug} href={`/controverses/${item.slug}`}>
                <GlassCard glow="red" className="group cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="tag tag-controverse">Controverse</span>
                        <span className="tag text-neon-red border-neon-red/30 bg-neon-red/8">
                          {item.gravite}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-semibold text-foreground group-hover:text-neon-red transition-colors">
                        {item.titre}
                      </h3>
                      <p className="mt-1 text-xs text-muted line-clamp-2">
                        {item.resume}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] font-mono text-neon-green">
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
        </section>

        {/* Right column */}
        <section>
          {/* Recent timeline */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-cyan glow-cyan">
                Chronologie recente
              </h2>
              <Link
                href="/biographie"
                className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
              >
                Voir tout →
              </Link>
            </div>
            <div className="space-y-3">
              {recentTimeline.map((item, i) => (
                <GlassCard key={i} className="!p-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-xs font-mono font-bold shrink-0 w-24 ${
                        item.categorie === "controverse"
                          ? "text-neon-red"
                          : "text-cyan"
                      }`}
                    >
                      {item.annee}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.titre}
                      </h3>
                      <p className="text-xs text-muted mt-0.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Reseau teaser */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-magenta glow-magenta">
                Reseau
              </h2>
              <Link
                href="/reseau"
                className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
              >
                Explorer →
              </Link>
            </div>
            <Link href="/reseau">
              <GlassCard glow="magenta" className="cursor-pointer group">
                <div className="text-center py-6">
                  <div className="text-4xl font-bold text-magenta mb-2">
                    {reseau.length}
                  </div>
                  <p className="text-sm text-muted">
                    connexions cartographiees
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    {reseau.slice(0, 5).map((p) => (
                      <span
                        key={p.slug}
                        className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded"
                      >
                        {p.nom}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono text-magenta">
                      +{reseau.length - 5}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">
              Newsletter
            </h2>
            <p className="text-xs text-muted mb-3">
              Recevez les nouvelles publications par email.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold font-mono ${color}`}>{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
