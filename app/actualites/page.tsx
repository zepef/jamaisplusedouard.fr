import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { timeline } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Suivi quotidien des activités politiques d'Édouard Philippe.",
};

// Show the latest events from the timeline as a preview
const recentEvents = [...timeline].reverse().slice(0, 10);

export default function ActualitesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-cyan glow-cyan">Actualites</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        Suivi quotidien — alimente par agents OpenClaw 24/7
      </p>

      {/* Status */}
      <GlassCard glow="cyan" className="mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-neon-green pulse-neon" />
          <div>
            <p className="text-sm text-foreground font-medium">
              Agents de veille actifs
            </p>
            <p className="text-xs text-muted mt-0.5">
              Presse française · Journal Officiel · Réseaux sociaux · Registres
              publics (HATVP)
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Recent events from biography */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Derniers événements documentés
      </h2>
      <div className="space-y-3 mb-12">
        {recentEvents.map((event, i) => (
          <GlassCard
            key={i}
            glow={event.categorie === "controverse" ? "red" : "none"}
            className="!p-4"
          >
            <div className="flex items-start gap-4">
              <span
                className={`text-xs font-mono font-bold shrink-0 w-28 ${
                  event.categorie === "controverse"
                    ? "text-neon-red"
                    : event.categorie === "carrière"
                      ? "text-yellow-400"
                      : "text-cyan"
                }`}
              >
                {event.annee}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`tag ${
                      event.categorie === "controverse"
                        ? "tag-controverse"
                        : event.categorie === "carrière"
                          ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/8"
                          : "tag-actualite"
                    }`}
                  >
                    {event.categorie}
                  </span>
                  {event.section && (
                    <span className="text-[10px] font-mono text-muted/50">
                      {event.section}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {event.titre}
                </h3>
                <p className="text-xs text-muted mt-1">{event.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Newsletter */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Recevoir les alertes
        </h2>
        <p className="text-xs text-muted mb-3">
          Nouvelle controverse, nouvelle connexion découverte — soyez
          informé en temps réel.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}
