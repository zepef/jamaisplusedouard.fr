"use client";

import { useState } from "react";
import NetworkGraph from "./NetworkGraph";
import Legend from "./Legend";
import NodeCard from "./NodeCard";
import type { PersonneReseau, SousReseau } from "@/lib/seed-data";

type Props = {
  personnes: PersonneReseau[];
};

const ALL_TYPES = ["politique", "financier", "professionnel", "mediatique"];

const SOUS_RESEAUX: {
  id: SousReseau;
  label: string;
  color: string;
  description: string;
}[] = [
  {
    id: "young-leaders",
    label: "Young Leaders (FAF)",
    color: "text-cyan",
    description:
      "Reseau transatlantique de la French-American Foundation. Philippe (2011), Macron (2012), Juppe (1982).",
  },
  {
    id: "sino-francais",
    label: "Reseau sino-francais",
    color: "text-neon-red",
    description:
      "France China Foundation, Belt and Road, CMA CGM Asie, Comite France-Chine.",
  },
  {
    id: "matignon",
    label: "Cabinet Matignon",
    color: "text-magenta",
    description:
      "L'equipe rapprochee de Philippe a Matignon (2017-2020).",
  },
  {
    id: "le-havre",
    label: "Reseau havrais",
    color: "text-neon-green",
    description:
      "Le Havre, port HAROPA, CMA CGM, mentors locaux.",
  },
  {
    id: "entreprises",
    label: "Entreprises & lobbying",
    color: "text-yellow-400",
    description:
      "Areva, Atos, Debevoise, CMA CGM — les employeurs et mandats de Philippe.",
  },
  {
    id: "horizons",
    label: "Parti Horizons",
    color: "text-magenta",
    description:
      "Vehicule presidentiel 2027 fonde en 2021.",
  },
];

export default function ReseauView({ personnes }: Props) {
  const [activeTypes, setActiveTypes] = useState<string[]>(ALL_TYPES);
  const [activeSousReseau, setActiveSousReseau] = useState<SousReseau | "all">(
    "all"
  );

  const typeCounts = ALL_TYPES.map((type) => ({
    type,
    count: personnes.filter((p) => p.typeLien === type).length,
  }));

  const toggleType = (type: string) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filtered = personnes.filter((p) => {
    const typeMatch = activeTypes.includes(p.typeLien);
    const sousReseauMatch =
      activeSousReseau === "all" ||
      (p.sousReseaux && p.sousReseaux.includes(activeSousReseau));
    return typeMatch && sousReseauMatch;
  });

  return (
    <div>
      {/* Sous-reseau tabs */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSousReseau("all")}
            className={`tag cursor-pointer transition-colors ${
              activeSousReseau === "all"
                ? "tag-actualite"
                : "text-muted border-glass-border bg-glass hover:border-cyan/30"
            }`}
          >
            Tous ({personnes.length})
          </button>
          {SOUS_RESEAUX.map((sr) => {
            const count = personnes.filter(
              (p) => p.sousReseaux && p.sousReseaux.includes(sr.id)
            ).length;
            return (
              <button
                key={sr.id}
                onClick={() =>
                  setActiveSousReseau(
                    activeSousReseau === sr.id ? "all" : sr.id
                  )
                }
                className={`tag cursor-pointer transition-colors ${
                  activeSousReseau === sr.id
                    ? "tag-actualite"
                    : "text-muted border-glass-border bg-glass hover:border-cyan/30"
                }`}
              >
                {sr.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Sous-reseau description */}
      {activeSousReseau !== "all" && (
        <div className="glass rounded-lg p-4 mb-4 border border-cyan/20">
          <p className="text-xs text-muted">
            {
              SOUS_RESEAUX.find((sr) => sr.id === activeSousReseau)
                ?.description
            }
          </p>
        </div>
      )}

      {/* Type legend */}
      <div className="mb-4">
        <Legend
          types={typeCounts}
          activeTypes={activeTypes}
          onToggle={toggleType}
        />
      </div>

      {/* Graph */}
      <div className="glass rounded-lg p-2 mb-8 border-glow-cyan">
        <NetworkGraph personnes={filtered} activeTypes={activeTypes} />
        <p className="text-[10px] text-muted/30 text-center mt-2 font-mono">
          Cliquer sur un noeud pour voir sa fiche · Glisser pour deplacer ·
          Molette pour zoomer
        </p>
      </div>

      {/* List grouped by sous-reseau */}
      {activeSousReseau === "all" ? (
        // Show by sous-reseau sections
        <>
          {SOUS_RESEAUX.map((sr) => {
            const members = filtered.filter(
              (p) => p.sousReseaux && p.sousReseaux.includes(sr.id)
            );
            if (members.length === 0) return null;
            return (
              <section key={sr.id} className="mb-8">
                <h2
                  className={`text-lg font-bold mb-1 ${sr.color}`}
                >
                  {sr.label} ({members.length})
                </h2>
                <p className="text-xs text-muted mb-3">{sr.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {members.map((p) => (
                    <NodeCard key={p.slug} personne={p} />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        // Show flat list for filtered sous-reseau
        <>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {filtered.length} connexion{filtered.length > 1 ? "s" : ""}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((p) => (
              <NodeCard key={p.slug} personne={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
