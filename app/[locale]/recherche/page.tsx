import SearchResults from "@/components/ui/SearchResults";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.recherche" });
  return { title: t("title"), description: t("description") };
}

export default async function RecherchePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const t = await getTranslations("recherche");

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="text-cyan glow-cyan">{t("titre")}</span>
      </h1>
      <SearchResults initialQuery={q} />
    </div>
  );
}
