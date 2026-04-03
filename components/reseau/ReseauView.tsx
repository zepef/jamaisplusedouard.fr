"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NetworkGraph from "./NetworkGraph";
import Legend from "./Legend";
import NodeCard from "./NodeCard";
import type { PersonneReseau, SousReseau } from "@/lib/seed-data";

type Props = {
  personnes: PersonneReseau[];
};

const ALL_TYPES = ["politique", "financier", "professionnel", "mediatique"];


const SOUS_RESEAU_COLORS: Record<SousReseau, string> = {
  chiraquien: "text-foreground",
  villepin: "text-purple-400",
  "young-leaders": "text-cyan",
  "sino-francais": "text-neon-red",
  matignon: "text-magenta",
  "le-havre": "text-neon-green",
  entreprises: "text-yellow-400",
  horizons: "text-magenta",
  facilitateurs: "text-yellow-400",
  portuaire: "text-neon-green",
  bilderberg: "text-foreground",
  "coalition-2027": "text-cyan",
  "cyber-influence": "text-neon-red",
};

const SOUS_RESEAU_ORDER: SousReseau[] = [
  "chiraquien",
  "villepin",
  "young-leaders",
  "sino-francais",
  "matignon",
  "le-havre",
  "entreprises",
  "horizons",
  "facilitateurs",
  "portuaire",
  "bilderberg",
  "coalition-2027",
  "cyber-influence",
];

export default function ReseauView({ personnes }: Props) {
  const tReseau = useTranslations("reseauPage");
  const [activeTypes, setActiveTypes] = useState<string[]>(ALL_TYPES);
  const [activeSousReseau, setActiveSousReseau] = useState<SousReseau | "all">(
    "all"
  );

  // Labels traduits pour les sous-réseaux
  const sousReseauLabels: Record<SousReseau, string> = {
    chiraquien: tReseau("chiraquien"),
    villepin: tReseau("villepin"),
    "young-leaders": tReseau("youngLeaders"),
    "sino-francais": tReseau("sinoFrancais"),
    matignon: tReseau("matignon"),
    "le-havre": tReseau("leHavre"),
    entreprises: tReseau("entreprises"),
    horizons: tReseau("horizons"),
    facilitateurs: tReseau("facilitateurs"),
    portuaire: tReseau("portuaire"),
    bilderberg: tReseau("bilderberg"),
    "coalition-2027": tReseau("coalition2027"),
    "cyber-influence": tReseau("cyberInfluence"),
  };

  // Descriptions traduites pour les sous-réseaux
  const sousReseauDescriptions: Record<SousReseau, string> = {
    chiraquien: tReseau("desc.chiraquien"),
    villepin: tReseau("desc.villepin"),
    "young-leaders": tReseau("desc.youngLeaders"),
    "sino-francais": tReseau("desc.sinoFrancais"),
    matignon: tReseau("desc.matignon"),
    "le-havre": tReseau("desc.leHavre"),
    entreprises: tReseau("desc.entreprises"),
    horizons: tReseau("desc.horizons"),
    facilitateurs: tReseau("desc.facilitateurs"),
    portuaire: tReseau("desc.portuaire"),
    bilderberg: tReseau("desc.bilderberg"),
    "coalition-2027": tReseau("desc.coalition2027"),
    "cyber-influence": tReseau("desc.cyberInfluence"),
  };

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
            {tReseau("tous")} ({personnes.length})
          </button>
          {SOUS_RESEAU_ORDER.map((id) => {
            const count = personnes.filter(
              (p) => p.sousReseaux && p.sousReseaux.includes(id)
            ).length;
            return (
              <button
                key={id}
                onClick={() =>
                  setActiveSousReseau(activeSousReseau === id ? "all" : id)
                }
                className={`tag cursor-pointer transition-colors ${
                  activeSousReseau === id
                    ? "tag-actualite"
                    : "text-muted border-glass-border bg-glass hover:border-cyan/30"
                }`}
              >
                {sousReseauLabels[id]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Sous-reseau description */}
      {activeSousReseau !== "all" && (
        <div className="glass rounded-lg p-4 mb-4 border border-cyan/20">
          <p className="text-xs text-muted">
            {sousReseauDescriptions[activeSousReseau]}
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
          {tReseau("grapheAide")}
        </p>
      </div>

      {/* List grouped by sous-reseau */}
      {activeSousReseau === "all" ? (
        // Show by sous-réseau sections
        <>
          {SOUS_RESEAU_ORDER.map((id) => {
            const members = filtered.filter(
              (p) => p.sousReseaux && p.sousReseaux.includes(id)
            );
            if (members.length === 0) return null;
            return (
              <section key={id} className="mb-8">
                <h2
                  className={`text-lg font-bold mb-1 ${SOUS_RESEAU_COLORS[id]}`}
                >
                  {sousReseauLabels[id]} ({members.length})
                </h2>
                <p className="text-xs text-muted mb-3">
                  {sousReseauDescriptions[id]}
                </p>
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
        // Show flat list for filtered sous-réseau
        <>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {filtered.length}{" "}
            {tReseau("connexions")}
            {filtered.length > 1 ? "s" : ""}
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
