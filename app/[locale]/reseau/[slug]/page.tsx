import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import { reseau } from "@/lib/seed-data";

const typeColors: Record<string, string> = {
  politique: "text-cyan border-cyan/30 bg-cyan/8",
  financier: "text-neon-red border-neon-red/30 bg-neon-red/8",
  professionnel: "text-magenta border-magenta/30 bg-magenta/8",
  mediatique: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

export function generateStaticParams() {
  return reseau.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const personne = reseau.find((p) => p.slug === slug);
  return {
    title: personne?.nom || "Reseau",
    description: personne?.description,
  };
}

export default async function PersonneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const personne = reseau.find((p) => p.slug === slug);

  if (!personne) notFound();

  // Find related connections
  const related = reseau.filter(
    (p) => p.slug !== slug && p.typeLien === personne.typeLien
  );

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/reseau"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        ← Retour au reseau
      </Link>

      <article className="mt-8">
        <span className={`tag ${typeColors[personne.typeLien] || "tag-biographie"}`}>
          {personne.typeLien}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          {personne.nom}
        </h1>
        <p className="mt-1 text-sm text-muted/70">{personne.role}</p>
        {personne.partiPolitique && (
          <p className="mt-1 text-xs font-mono text-cyan">
            {personne.partiPolitique}
          </p>
        )}

        <GlassCard glow="magenta" className="mt-8">
          <p className="text-sm text-foreground/90 leading-relaxed">
            {personne.description}
          </p>
        </GlassCard>

        {/* Lien avec Philippe */}
        <div className="mt-8">
          <h2 className="text-sm font-mono font-semibold text-magenta mb-3">
            Lien avec Edouard Philippe
          </h2>
          <GlassCard className="!p-4">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-xs font-mono text-cyan">E. Philippe</div>
              </div>
              <div className="flex-1 border-t border-dashed border-magenta/30" />
              <span className={`tag ${typeColors[personne.typeLien] || ""} bg-glass`}>
                {personne.typeLien}
              </span>
              <div className="flex-1 border-t border-dashed border-magenta/30" />
              <div className="text-center">
                <div className="text-xs font-mono text-magenta">
                  {personne.nom}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Related connections */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-mono font-semibold text-muted mb-3">
              Connexions du meme type
            </h2>
            <div className="space-y-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/reseau/${p.slug}`}>
                  <GlassCard className="!p-3 group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-foreground group-hover:text-magenta transition-colors">
                        {p.nom}
                      </span>
                      <span className="text-xs text-muted/50">{p.role}</span>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
