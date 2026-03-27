import type { Metadata } from "next";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import {
  chainesMedia,
  apparitions,
  getStatsMedia,
  type MediaCategorie,
} from "@/lib/media-data";

export const metadata: Metadata = {
  title: "Matraquage mediatique",
  description:
    "Suivi du temps d'antenne accorde a Edouard Philippe sur les medias publics et les medias infeodes a la Macronie.",
};

const categorieLabels: Record<MediaCategorie, string> = {
  public: "Medias publics",
  macroniste: "Medias pro-Macron",
  independant: "Medias independants",
  opposition: "Medias d'opposition",
};

const categorieColors: Record<MediaCategorie, string> = {
  public: "text-cyan",
  macroniste: "text-neon-red",
  independant: "text-neon-green",
  opposition: "text-magenta",
};

const categorieBgColors: Record<MediaCategorie, string> = {
  public: "bg-cyan/10 border-cyan/30",
  macroniste: "bg-neon-red/10 border-neon-red/30",
  independant: "bg-neon-green/10 border-neon-green/30",
  opposition: "bg-magenta/10 border-magenta/30",
};

const tonaliteColors: Record<string, string> = {
  favorable: "text-neon-red border-neon-red/30 bg-neon-red/8",
  neutre: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  critique: "text-neon-green border-neon-green/30 bg-neon-green/8",
};

export default function MatraquagePage() {
  const stats = getStatsMedia();

  // Sort apparitions by date desc
  const recentApparitions = [...apparitions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Top chaines by minutes
  const topChaines = Object.entries(stats.parChaine)
    .map(([slug, minutes]) => ({
      chaine: chainesMedia.find((c) => c.slug === slug)!,
      minutes,
    }))
    .filter((c) => c.chaine)
    .sort((a, b) => b.minutes - a.minutes);

  // Ratio favorable vs critique
  const favorable = stats.parTonalite["favorable"] || 0;
  const critique = stats.parTonalite["critique"] || 0;
  const neutre = stats.parTonalite["neutre"] || 0;
  const ratioFavorable = Math.round(
    (favorable / stats.totalApparitions) * 100
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-neon-red glow-red">Matraquage mediatique</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        Suivi du temps d&apos;antenne et de la couverture mediatique d&apos;Edouard
        Philippe — medias publics et medias infeodes
      </p>

      {/* Stats globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <GlassCard className="text-center !p-4">
          <div className="text-3xl font-bold font-mono text-neon-red">
            {stats.totalMinutes}
          </div>
          <div className="text-xs text-muted mt-1">
            minutes d&apos;antenne
          </div>
        </GlassCard>
        <GlassCard className="text-center !p-4">
          <div className="text-3xl font-bold font-mono text-cyan">
            {stats.totalApparitions}
          </div>
          <div className="text-xs text-muted mt-1">apparitions</div>
        </GlassCard>
        <GlassCard className="text-center !p-4">
          <div className="text-3xl font-bold font-mono text-neon-red">
            {ratioFavorable}%
          </div>
          <div className="text-xs text-muted mt-1">
            couverture favorable
          </div>
        </GlassCard>
        <GlassCard className="text-center !p-4">
          <div className="text-3xl font-bold font-mono text-neon-green">
            {critique}
          </div>
          <div className="text-xs text-muted mt-1">
            enquetes critiques
          </div>
        </GlassCard>
      </div>

      {/* Barre de repartition tonalite */}
      <GlassCard glow="red" className="mb-8">
        <h2 className="text-sm font-mono font-bold text-foreground mb-3">
          Tonalite de la couverture
        </h2>
        <div className="flex rounded-full overflow-hidden h-6 mb-3">
          {favorable > 0 && (
            <div
              className="bg-neon-red/40 flex items-center justify-center text-[10px] font-mono text-white"
              style={{
                width: `${(favorable / stats.totalApparitions) * 100}%`,
              }}
            >
              {favorable} favorables
            </div>
          )}
          {neutre > 0 && (
            <div
              className="bg-yellow-400/30 flex items-center justify-center text-[10px] font-mono text-white"
              style={{
                width: `${(neutre / stats.totalApparitions) * 100}%`,
              }}
            >
              {neutre} neutres
            </div>
          )}
          {critique > 0 && (
            <div
              className="bg-neon-green/40 flex items-center justify-center text-[10px] font-mono text-white"
              style={{
                width: `${(critique / stats.totalApparitions) * 100}%`,
              }}
            >
              {critique} critiques
            </div>
          )}
        </div>
        <p className="text-xs text-muted">
          {ratioFavorable}% de la couverture mediatique est favorable a Philippe.
          Seuls les medias independants (Mediapart, Blast) produisent des
          enquetes critiques.
        </p>
      </GlassCard>

      {/* Repartition par categorie de media */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {(
          ["public", "macroniste", "independant", "opposition"] as MediaCategorie[]
        ).map((cat) => {
          const count = stats.parCategorie[cat] || 0;
          const minutes = stats.minutesParCategorie[cat] || 0;
          const chaines = chainesMedia.filter((c) => c.categorie === cat);
          return (
            <GlassCard key={cat} className={`!p-4 border ${categorieBgColors[cat]}`}>
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`text-sm font-bold ${categorieColors[cat]}`}
                >
                  {categorieLabels[cat]}
                </h3>
                <span className="text-xs font-mono text-muted">
                  {count} apparitions · {minutes} min
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chaines.map((c) => (
                  <span
                    key={c.slug}
                    className="text-[10px] font-mono text-muted/70 bg-glass px-1.5 py-0.5 rounded"
                  >
                    {c.nom}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Classement des chaines */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        Classement par temps d&apos;antenne
      </h2>
      <div className="space-y-2 mb-8">
        {topChaines.map(({ chaine, minutes }, i) => {
          const maxMinutes = topChaines[0]?.minutes || 1;
          const pct = Math.round((minutes / maxMinutes) * 100);
          return (
            <GlassCard key={chaine.slug} className="!p-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted/50 w-6">
                  #{i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">
                      {chaine.nom}
                    </span>
                    <span
                      className={`tag ${categorieBgColors[chaine.categorie]} ${categorieColors[chaine.categorie]}`}
                    >
                      {chaine.categorie}
                    </span>
                  </div>
                  <div className="w-full bg-glass rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        chaine.categorie === "independant"
                          ? "bg-neon-green/50"
                          : chaine.categorie === "macroniste"
                            ? "bg-neon-red/50"
                            : "bg-cyan/50"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-mono font-bold text-foreground shrink-0">
                  {minutes} min
                </span>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Timeline des apparitions */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        Apparitions recentes
      </h2>
      <div className="space-y-3 mb-8">
        {recentApparitions.map((a, i) => {
          const chaine = chainesMedia.find((c) => c.slug === a.chaineSlug);
          if (!chaine) return null;
          return (
            <GlassCard
              key={i}
              glow={a.tonalite === "critique" ? "cyan" : a.tonalite === "favorable" ? "red" : "none"}
              className="!p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className={`tag ${categorieBgColors[chaine.categorie]} ${categorieColors[chaine.categorie]}`}
                    >
                      {chaine.nom}
                    </span>
                    <span className={`tag ${tonaliteColors[a.tonalite]}`}>
                      {a.tonalite}
                    </span>
                    <span className="tag text-muted border-glass-border bg-glass">
                      {a.type}
                    </span>
                    {a.dureeMinutes > 0 && (
                      <span className="text-[10px] font-mono text-muted">
                        {a.dureeMinutes} min
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {a.emission}
                  </h3>
                  <p className="text-xs text-muted mt-1">{a.resume}</p>
                </div>
                <time className="text-xs font-mono text-muted/50 shrink-0">
                  {a.date}
                </time>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Qui possede quoi */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        Qui possede quoi — cartographie des proprietaires
      </h2>
      <div className="space-y-3">
        {chainesMedia.map((c) => (
          <GlassCard key={c.slug} className="!p-4">
            <div className="flex items-start gap-3">
              <span
                className={`tag shrink-0 ${categorieBgColors[c.categorie]} ${categorieColors[c.categorie]}`}
              >
                {c.categorie}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {c.nom}
                </h3>
                <p className="text-xs text-muted/70 mt-0.5">
                  Proprietaire : {c.proprietaire}
                </p>
                <p className="text-xs text-muted mt-1">{c.description}</p>
                <p className="text-xs text-neon-red/70 mt-1 italic">
                  {c.lienMacronisme}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
