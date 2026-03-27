"use client";

import { useState } from "react";
import NetworkGraph from "./NetworkGraph";
import Legend from "./Legend";
import NodeCard from "./NodeCard";
import type { PersonneReseau } from "@/lib/seed-data";

type Props = {
  personnes: PersonneReseau[];
};

const ALL_TYPES = ["politique", "financier", "professionnel", "mediatique"];

export default function ReseauView({ personnes }: Props) {
  const [activeTypes, setActiveTypes] = useState<string[]>(ALL_TYPES);

  const typeCounts = ALL_TYPES.map((type) => ({
    type,
    count: personnes.filter((p) => p.typeLien === type).length,
  }));

  const toggleType = (type: string) => {
    setActiveTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filtered = personnes.filter((p) => activeTypes.includes(p.typeLien));

  return (
    <div>
      {/* Legend / filters */}
      <div className="mb-4">
        <Legend
          types={typeCounts}
          activeTypes={activeTypes}
          onToggle={toggleType}
        />
      </div>

      {/* Graph */}
      <div className="glass rounded-lg p-2 mb-8 border-glow-cyan">
        <NetworkGraph personnes={personnes} activeTypes={activeTypes} />
        <p className="text-[10px] text-muted/30 text-center mt-2 font-mono">
          Cliquer sur un noeud pour voir sa fiche · Glisser pour deplacer ·
          Molette pour zoomer
        </p>
      </div>

      {/* List by type */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        {filtered.length} connexion{filtered.length > 1 ? "s" : ""} affichee
        {filtered.length > 1 ? "s" : ""}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((p) => (
          <NodeCard key={p.slug} personne={p} />
        ))}
      </div>
    </div>
  );
}
