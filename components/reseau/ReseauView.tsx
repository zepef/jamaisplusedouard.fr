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

// Descriptions restent en français (contenu éditorial)
const SOUS_RESEAU_DESCRIPTIONS: Record<SousReseau, string> = {
  chiraquien:
    "Le terreau commun : Chirac → Juppé → Philippe / Villepin / Raffarin. Tradition gaulliste de politique asiatique de la France.",
  villepin:
    "Réseau privé et opaque : Villepin International, sociétés à Hong Kong, Djouhri, Veolia/Proglio, conférences en Chine.",
  "young-leaders":
    "Réseau transatlantique de la French-American Foundation. Philippe (2011), Macron (2012), Juppé (1982).",
  "sino-francais":
    "France China Foundation, Belt and Road, CMA CGM Asie, Comité France-Chine. Le réseau qui relie Philippe et Villepin via Raffarin.",
  matignon: "L'équipe rapprochée de Philippe à Matignon (2017-2020).",
  "le-havre": "Le Havre, port HAROPA, CMA CGM, mentors locaux.",
  entreprises:
    "Areva, Atos, Debevoise, CMA CGM, Veolia — les employeurs et mandats.",
  horizons: "Véhicule présidentiel 2027 fondé en 2021.",
  facilitateurs:
    "Agents facilitateurs transpartisans : Attali, Minc, Commission Attali. Connectent les centroïdes entre eux sans être eux-mêmes des centroïdes.",
  portuaire:
    "Triangle portuaire Le Havre : Kohler (MSC/Élysée), CMA CGM (Saadé/BFM), GPMH. Convergence du pouvoir politique, financier, médiatique et géostratégique.",
  bilderberg:
    "Le 7ème cercle : groupe Bilderberg (120-140 dirigeants, Chatham House). De Castries préside et sélectionne. Philippe (4 éditions), Attal (2), Macron (1). Promotions post-Bilderberg récurrentes.",
  "coalition-2027":
    "Tribune « Pour la France, construisons l'union ! » (29 mars 2026) — 90 signataires de 4 familles politiques convergent vers la candidature Philippe. Le 8ème cercle.",
};

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
            {SOUS_RESEAU_DESCRIPTIONS[activeSousReseau]}
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
                  {SOUS_RESEAU_DESCRIPTIONS[id]}
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
