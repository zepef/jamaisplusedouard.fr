import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { getTranslations } from "next-intl/server";
import { getLocalizedBlogPosts } from "@/lib/get-localized-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.blog" });
  return { title: t("title"), description: t("description") };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const localizedBlogPosts = getLocalizedBlogPosts(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-cyan glow-cyan">{t("titre")}</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {t("sousTitre")}
      </p>

      <div className="space-y-6">
        {localizedBlogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <GlassCard className="group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-foreground group-hover:text-cyan transition-colors">
                    {post.titre}
                  </h2>
                  <p className="text-sm text-muted mt-2">{post.resume}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs font-mono text-muted/50">
                      {post.auteur}
                    </span>
                    <span className="text-xs text-muted/30">·</span>
                    <time className="text-xs font-mono text-muted/50">
                      {post.date}
                    </time>
                    <span className="text-xs text-muted/30">·</span>
                    <span className="text-[10px] font-mono text-neon-green">
                      {post.sources.length} source
                      {post.sources.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-muted/50 bg-glass px-1.5 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
