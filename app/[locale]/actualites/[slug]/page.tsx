import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Sera remplace par une requete BDD
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/actualites"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        ← Retour aux actualites
      </Link>

      <article className="mt-8">
        <span className="tag tag-actualite">Actualite</span>
        <h1 className="mt-3 text-3xl font-bold text-foreground">{slug}</h1>
        <time className="block mt-2 text-xs font-mono text-muted/50">
          2026-03-26
        </time>

        <GlassCard className="mt-8">
          <p className="text-muted">
            Contenu de l&apos;article — sera charge depuis la base de donnees
            PostgreSQL.
          </p>
        </GlassCard>

        {/* Sources */}
        <div className="mt-8">
          <h2 className="text-sm font-mono font-semibold text-neon-green mb-3">
            Sources
          </h2>
          <div className="space-y-2">
            <GlassCard className="!p-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="tag tag-actualite">presse</span>
                <span className="text-muted">Source a venir — </span>
                <span className="text-muted/50 font-mono">url</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </article>
    </div>
  );
}
