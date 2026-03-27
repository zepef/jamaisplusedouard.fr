import Link from "next/link";
import type { PersonneReseau } from "@/lib/seed-data";

const TYPE_COLORS: Record<string, string> = {
  politique: "text-cyan border-cyan/30",
  financier: "text-neon-red border-neon-red/30",
  professionnel: "text-magenta border-magenta/30",
  mediatique: "text-yellow-400 border-yellow-400/30",
  familial: "text-neon-green border-neon-green/30",
};

export default function NodeCard({ personne }: { personne: PersonneReseau }) {
  return (
    <Link href={`/reseau/${personne.slug}`}>
      <div className="glass rounded-md p-3 group cursor-pointer hover:border-magenta/20 transition-all">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`tag ${TYPE_COLORS[personne.typeLien] || "text-muted border-glass-border"} bg-glass`}
          >
            {personne.typeLien}
          </span>
          <span className="text-sm font-semibold text-foreground group-hover:text-magenta transition-colors">
            {personne.nom}
          </span>
        </div>
        <p className="text-[10px] text-muted/70">{personne.role}</p>
      </div>
    </Link>
  );
}
