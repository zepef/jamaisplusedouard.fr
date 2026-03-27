import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import { controverses } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Sources",
  description: "Toutes les sources utilisees sur jamaisplusedouard.fr.",
};

// Collect all unique sources
const allSources = controverses.flatMap((c) =>
  c.sources.map((s) => ({ ...s, controverse: c.titre }))
);

const sourcesByType = allSources.reduce(
  (acc, s) => {
    if (!acc[s.type]) acc[s.type] = [];
    acc[s.type].push(s);
    return acc;
  },
  {} as Record<string, typeof allSources>
);

const typeLabels: Record<string, string> = {
  officiel: "Sources officielles",
  presse: "Presse",
  social: "Reseaux sociaux",
  registre: "Registres publics",
};

const typeStyles: Record<string, string> = {
  officiel: "text-neon-green",
  presse: "text-cyan",
  social: "text-magenta",
  registre: "text-yellow-400",
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Sources</h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {allSources.length} sources verifiees — chaque fait est documente
      </p>

      <GlassCard glow="cyan" className="mb-8">
        <p className="text-sm text-muted">
          jamaisplusedouard.fr applique une politique de sourcing obligatoire :
          aucun article n&apos;est publie sans au moins une source verifiable.
          Les agents de veille IA sont programmes pour rejeter toute information
          non sourcee.
        </p>
      </GlassCard>

      {Object.entries(sourcesByType).map(([type, sources]) => (
        <section key={type} className="mb-8">
          <h2
            className={`text-lg font-bold mb-4 ${typeStyles[type] || "text-foreground"}`}
          >
            {typeLabels[type] || type} ({sources.length})
          </h2>
          <div className="space-y-2">
            {sources.map((s, i) => (
              <GlassCard key={i} className="!p-3">
                <div className="flex items-start gap-3 text-xs">
                  <div className="flex-1 min-w-0">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-cyan transition-colors font-medium"
                    >
                      {s.titre}
                    </a>
                    <p className="text-muted/50 mt-0.5">
                      Utilise dans : {s.controverse}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      ))}

      <GlassCard className="mt-8">
        <h2 className="text-sm font-mono font-bold text-cyan mb-3">
          Methode de veille
        </h2>
        <div className="text-sm text-muted space-y-2">
          <p>
            Les sources sont collectees automatiquement par 4 agents de veille
            OpenClaw :
          </p>
          <ul className="list-disc list-inside text-xs space-y-1 text-muted/70">
            <li>Presse francaise (toutes les 2h)</li>
            <li>Journal Officiel et Legifrance (quotidien)</li>
            <li>Reseaux sociaux (toutes les 4h)</li>
            <li>Registres publics — HATVP, Societe.com (hebdomadaire)</li>
          </ul>
        </div>
      </GlassCard>
    </div>
  );
}
