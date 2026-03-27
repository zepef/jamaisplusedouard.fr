import type { Source } from "@/lib/types";

const typeLabels: Record<string, string> = {
  presse: "Presse",
  officiel: "Officiel",
  social: "Social",
  registre: "Registre",
};

const typeStyles: Record<string, string> = {
  presse: "tag-actualite",
  officiel: "text-neon-green border-neon-green/30 bg-neon-green/8",
  social: "text-magenta border-magenta/30 bg-magenta/8",
  registre: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

export default function SourceCitation({ source }: { source: Source }) {
  return (
    <div className="glass rounded-md p-3 flex items-start gap-3 text-xs">
      <span className={`tag shrink-0 ${typeStyles[source.type] || "tag-actualite"}`}>
        {typeLabels[source.type] || source.type}
      </span>
      <div className="flex-1 min-w-0">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-cyan transition-colors font-medium truncate block"
        >
          {source.titre || source.url}
        </a>
        <div className="flex items-center gap-2 mt-1 text-muted/50 font-mono">
          {source.auteur && <span>{source.auteur}</span>}
          {source.auteur && source.dateSource && <span>·</span>}
          {source.dateSource && (
            <time>
              {new Date(source.dateSource).toLocaleDateString("fr-FR")}
            </time>
          )}
        </div>
      </div>
      {source.archiveUrl && (
        <a
          href={source.archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted/30 hover:text-neon-green transition-colors shrink-0"
          title="Version archivee"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21 8-2-2H5L3 8" />
            <rect width="18" height="12" x="3" y="8" rx="1" />
            <path d="M10 12h4" />
          </svg>
        </a>
      )}
    </div>
  );
}
