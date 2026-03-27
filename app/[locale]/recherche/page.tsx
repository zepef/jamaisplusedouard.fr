import type { Metadata } from "next";
import SearchResults from "@/components/ui/SearchResults";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Rechercher dans l'ensemble du contenu de jamaisplusedouard.fr.",
};

export default async function RecherchePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="text-cyan glow-cyan">Recherche</span>
      </h1>
      <SearchResults initialQuery={q} />
    </div>
  );
}
