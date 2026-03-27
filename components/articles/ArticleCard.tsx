import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

type ArticleCardProps = {
  slug: string;
  titre: string;
  resume: string | null;
  date: string;
  categorie: "actualite" | "controverse" | "biographie";
  tags?: string[];
  nbSources?: number;
  gravite?: "haute" | "moyenne" | "basse";
};

const categorieConfig = {
  actualite: {
    label: "Actualite",
    tagClass: "tag-actualite",
    hoverColor: "group-hover:text-cyan",
    glow: "none" as const,
    basePath: "/actualites",
  },
  controverse: {
    label: "Controverse",
    tagClass: "tag-controverse",
    hoverColor: "group-hover:text-neon-red",
    glow: "red" as const,
    basePath: "/controverses",
  },
  biographie: {
    label: "Biographie",
    tagClass: "tag-biographie",
    hoverColor: "group-hover:text-magenta",
    glow: "none" as const,
    basePath: "/biographie",
  },
};

const graviteStyles = {
  haute: "text-neon-red border-neon-red/30 bg-neon-red/8",
  moyenne: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
  basse: "text-muted border-glass-border bg-glass",
};

export default function ArticleCard({
  slug,
  titre,
  resume,
  date,
  categorie,
  tags,
  nbSources,
  gravite,
}: ArticleCardProps) {
  const config = categorieConfig[categorie];

  return (
    <Link href={`${config.basePath}/${slug}`}>
      <GlassCard glow={config.glow} className="group cursor-pointer">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`tag ${config.tagClass}`}>{config.label}</span>
              {gravite && (
                <span className={`tag ${graviteStyles[gravite]}`}>
                  {gravite}
                </span>
              )}
            </div>
            <h2
              className={`mt-2 text-lg font-semibold text-foreground ${config.hoverColor} transition-colors`}
            >
              {titre}
            </h2>
            {resume && (
              <p className="mt-1 text-sm text-muted line-clamp-2">{resume}</p>
            )}
            {(tags || nbSources) && (
              <div className="mt-3 flex items-center gap-4">
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {nbSources !== undefined && nbSources > 0 && (
                  <span className="text-[10px] font-mono text-neon-green shrink-0">
                    {nbSources} source{nbSources > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            )}
          </div>
          <time className="text-xs font-mono text-muted/50 shrink-0">
            {date}
          </time>
        </div>
      </GlassCard>
    </Link>
  );
}
