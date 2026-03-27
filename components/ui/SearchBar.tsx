"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/recherche?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [router, query]
  );

  return (
    <form onSubmit={handleSubmit} className="glass rounded-lg p-4">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            placeholder ||
            "Rechercher un article, une personne, un événement..."
          }
          className="w-full bg-transparent text-foreground placeholder-muted/50 outline-none font-mono text-sm"
        />
        <button
          type="submit"
          className="tag tag-actualite cursor-pointer hover:bg-cyan/20 transition-colors shrink-0"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
