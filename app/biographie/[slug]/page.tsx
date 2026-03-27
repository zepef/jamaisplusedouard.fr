import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

export default async function BiographieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/biographie"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        ← Retour a la biographie
      </Link>

      <article className="mt-8">
        <span className="tag tag-biographie">Biographie</span>
        <h1 className="mt-3 text-3xl font-bold text-foreground">{slug}</h1>

        <GlassCard className="mt-8">
          <p className="text-muted">
            Detail de la periode — sera charge depuis la base de donnees
            PostgreSQL.
          </p>
        </GlassCard>
      </article>
    </div>
  );
}
