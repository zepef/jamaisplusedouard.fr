import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import CommentSection from "@/components/blog/CommentSection";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post?.titre || "Blog",
    description: post?.resume,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        ← Retour au blog
      </Link>

      <article className="mt-8">
        <h1 className="text-3xl font-bold text-foreground">{post.titre}</h1>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm font-mono text-muted/70">{post.auteur}</span>
          <span className="text-xs text-muted/30">·</span>
          <time className="text-sm font-mono text-muted/50">{post.date}</time>
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded border border-glass-border"
            >
              #{tag}
            </span>
          ))}
        </div>

        <GlassCard className="mt-8">
          <div className="text-sm text-foreground/90 leading-relaxed space-y-4">
            {post.contenu.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>

        {/* Sources */}
        <div className="mt-8">
          <h2 className="text-sm font-mono font-semibold text-neon-green mb-3">
            Sources ({post.sources.length})
          </h2>
          <div className="space-y-2">
            {post.sources.map((source, i) => (
              <div
                key={i}
                className="glass rounded-md p-3 flex items-start gap-3 text-xs"
              >
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan transition-colors font-medium"
                >
                  {source.titre}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Commentaires */}
        <CommentSection articleSlug={post.slug} />
      </article>
    </div>
  );
}
