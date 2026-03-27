"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import {
  timeline,
  controverses,
  reseau,
  type TimelineEvent,
  type Controverse,
  type PersonneReseau,
} from "@/lib/seed-data";

type ResultType = "controverse" | "chronologie" | "reseau";

function highlight(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-cyan/20 text-cyan rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SearchResults({ initialQuery }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery || "");
  const [activeTab, setActiveTab] = useState<ResultType | "all">("all");

  const results = useMemo(() => {
    if (!query || query.trim().length < 2) {
      return { controverses: [], timeline: [], reseau: [] };
    }
    const q = query.toLowerCase().trim();

    const controverseResults = controverses.filter(
      (c) =>
        c.titre.toLowerCase().includes(q) ||
        c.resume.toLowerCase().includes(q) ||
        c.contenu.toLowerCase().includes(q) ||
        c.themes.some((t) => t.includes(q))
    );

    const timelineResults = timeline.filter(
      (e) =>
        e.titre.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.section && e.section.toLowerCase().includes(q))
    );

    const reseauResults = reseau.filter(
      (p) =>
        p.nom.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q)
    );

    return {
      controverses: controverseResults,
      timeline: timelineResults,
      reseau: reseauResults,
    };
  }, [query]);

  const total =
    results.controverses.length +
    results.timeline.length +
    results.reseau.length;

  const tabs: { key: ResultType | "all"; label: string; count: number; color: string }[] = [
    { key: "all", label: "Tous", count: total, color: "tag-actualite" },
    {
      key: "controverse",
      label: "Controverses",
      count: results.controverses.length,
      color: "tag-controverse",
    },
    {
      key: "chronologie",
      label: "Chronologie",
      count: results.timeline.length,
      color: "tag-actualite",
    },
    {
      key: "reseau",
      label: "Réseau",
      count: results.reseau.length,
      color: "tag-biographie",
    },
  ];

  const showControverses = activeTab === "all" || activeTab === "controverse";
  const showTimeline = activeTab === "all" || activeTab === "chronologie";
  const showReseau = activeTab === "all" || activeTab === "reseau";

  return (
    <div>
      {/* Search input */}
      <div className="glass rounded-lg p-4 mb-6">
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
            placeholder="Rechercher un événement, une controverse, une personne..."
            className="w-full bg-transparent text-foreground placeholder-muted/50 outline-none font-mono text-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted hover:text-foreground transition-colors shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {query.trim().length >= 2 && (
        <>
          {/* Stats + tabs */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="text-sm text-muted font-mono">
              {total} résultat{total !== 1 ? "s" : ""}
            </p>
            <div className="flex gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`tag cursor-pointer transition-colors ${
                    activeTab === tab.key
                      ? tab.color
                      : "text-muted border-glass-border bg-glass"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Controverses */}
          {showControverses && results.controverses.length > 0 && (
            <section className="mb-6">
              {activeTab === "all" && (
                <h2 className="text-sm font-mono font-bold text-neon-red mb-3">
                  Controverses
                </h2>
              )}
              <div className="space-y-2">
                {results.controverses.map((c) => (
                  <Link key={c.slug} href={`/controverses/${c.slug}`}>
                    <GlassCard
                      glow="red"
                      className="!p-4 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="tag tag-controverse">Controverse</span>
                        <span className="text-[10px] font-mono text-neon-green">
                          {c.sources.length} source{c.sources.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-neon-red transition-colors">
                        {highlight(c.titre, query)}
                      </h3>
                      <p className="text-xs text-muted mt-1 line-clamp-2">
                        {highlight(c.resume, query)}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {c.themes.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-muted/50 bg-glass px-1 py-0.5 rounded"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Timeline */}
          {showTimeline && results.timeline.length > 0 && (
            <section className="mb-6">
              {activeTab === "all" && (
                <h2 className="text-sm font-mono font-bold text-cyan mb-3">
                  Chronologie
                </h2>
              )}
              <div className="space-y-2">
                {results.timeline.map((e, i) => (
                  <GlassCard
                    key={i}
                    glow={e.categorie === "controverse" ? "red" : "none"}
                    className="!p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`text-xs font-mono font-bold shrink-0 w-24 ${
                          e.categorie === "controverse"
                            ? "text-neon-red"
                            : "text-cyan"
                        }`}
                      >
                        {e.annee}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-foreground">
                          {highlight(e.titre, query)}
                        </h3>
                        <p className="text-xs text-muted mt-0.5">
                          {highlight(e.description, query)}
                        </p>
                        {e.section && (
                          <span className="text-[10px] font-mono text-muted/30 mt-1 inline-block">
                            {e.section}
                          </span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </section>
          )}

          {/* Reseau */}
          {showReseau && results.reseau.length > 0 && (
            <section className="mb-6">
              {activeTab === "all" && (
                <h2 className="text-sm font-mono font-bold text-magenta mb-3">
                  Reseau
                </h2>
              )}
              <div className="space-y-2">
                {results.reseau.map((p) => (
                  <Link key={p.slug} href={`/reseau/${p.slug}`}>
                    <GlassCard className="!p-4 group cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="tag text-magenta border-magenta/30 bg-magenta/8">
                          {p.typeLien}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-magenta transition-colors">
                        {highlight(p.nom, query)}
                      </h3>
                      <p className="text-xs text-muted/70">
                        {highlight(p.role, query)}
                      </p>
                      <p className="text-xs text-muted mt-1 line-clamp-2">
                        {highlight(p.description, query)}
                      </p>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {total === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-muted font-mono">
                Aucun résultat pour &quot;{query}&quot;
              </p>
              <p className="text-xs text-muted/50 mt-2">
                Essayez : CMA CGM, Rivotril, Gilets jaunes, Matignon, Young
                Leaders...
              </p>
            </div>
          )}
        </>
      )}

      {query.trim().length < 2 && (
        <div className="text-center py-12">
          <p className="text-sm text-muted font-mono mb-4">
            Tapez au moins 2 caractères pour lancer la recherche
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "CMA CGM",
              "Rivotril",
              "Gilets jaunes",
              "Young Leaders",
              "Le Havre",
              "Atos",
              "Ribadeau-Dumas",
              "FCF",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="tag text-muted border-glass-border bg-glass cursor-pointer hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
