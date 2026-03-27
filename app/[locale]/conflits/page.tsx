import type { Metadata } from "next";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { chainesConflits } from "@/lib/conflits-data";

export const metadata: Metadata = {
  title: "Conflits d'intérêts",
  description:
    "Chaînes de conflits d'intérêts documentés autour d'Édouard Philippe — de Matignon au Havre.",
};

export default function ConflitsPage() {
  const critiques = chainesConflits.filter((c) => c.gravite === "critique");
  const autres = chainesConflits.filter((c) => c.gravite !== "critique");

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-neon-red glow-red">Conflits d&apos;intérêts</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {chainesConflits.length} chaînes de conflits d&apos;intérêts documentées
        — suivez les liens
      </p>

      {/* Legende */}
      <GlassCard glow="red" className="mb-8">
        <p className="text-sm text-muted">
          Chaque chaîne retrace un parcours multi-nœud reliant Édouard Philippe
          à un intérêt privé. Les maillons montrent les intermédiaires et les
          mécanismes de transmission. Les conséquences sont documentées et sourcées.
        </p>
      </GlassCard>

      {/* Chaines critiques */}
      <h2 className="text-lg font-bold text-neon-red mb-4">
        Chaines critiques ({critiques.length})
      </h2>
      <div className="space-y-6 mb-12">
        {critiques.map((chaine) => (
          <ChaineCard key={chaine.id} chaine={chaine} />
        ))}
      </div>

      {/* Autres chaines */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        Autres chaines ({autres.length})
      </h2>
      <div className="space-y-6">
        {autres.map((chaine) => (
          <ChaineCard key={chaine.id} chaine={chaine} />
        ))}
      </div>
    </div>
  );
}

function ChaineCard({ chaine }: { chaine: (typeof chainesConflits)[0] }) {
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
                graviteColors[chaine.gravite]
              }`}
            >
              {chaine.gravite}
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
          Consequence
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

const graviteColors = {
  critique: "text-neon-red border-neon-red/30 bg-neon-red/8",
  haute: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  moyenne: "text-muted border-glass-border bg-glass",
};
