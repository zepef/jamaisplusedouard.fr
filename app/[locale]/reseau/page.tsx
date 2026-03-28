import type { Metadata } from "next";
import ReseauView from "@/components/reseau/ReseauView";
import GlassCard from "@/components/ui/GlassCard";
import { reseau } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Réseau — Cartographie des 4 centroïdes",
  description:
    "Cartographie interactive des réseaux croisés Juppé–Philippe–Raffarin–Villepin. 4 centroïdes, connexions politiques, chinoises, financières et médiatiques.",
};

export default function ReseauPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-magenta glow-magenta">Réseau</span>{" "}
        <span className="text-foreground/40 text-xl">�� 4 centroïdes</span>
      </h1>
      <p className="text-sm text-muted mb-4 font-mono">
        {reseau.length} connexions cartographiées — le losange
        Juppé–Philippe–Raffarin–Villepin
      </p>

      {/* Analyse structurelle */}
      <GlassCard className="mb-8 !p-5">
        <h2 className="text-xs font-mono font-semibold text-cyan mb-3 uppercase tracking-wider">
          Analyse structurelle — pourquoi 4 centroïdes convergent
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          Ces quatre figures ne partagent pas les mêmes objectifs — Villepin et
          Philippe sont des concurrents directs pour 2027. Ce qu&apos;ils
          partagent, ce sont des{" "}
          <span className="text-cyan">conditions structurelles</span> qui
          produisent des comportements convergents : même moule institutionnel
          (Sciences Po → ENA → Conseil d&apos;État / Quai d&apos;Orsay), même
          matrice chiraquienne, même logique de pantouflage, mêmes programmes de
          sélection des élites (FAF, FCF).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
          <div className="glass rounded-md p-3 border border-white/10">
            <span className="font-bold text-white">AJ</span>
            <span className="text-muted/60"> — Alain Juppé</span>
            <p className="text-muted/70 mt-1">
              Parrain neutralisé au CC. La « Juppéie » forme l&apos;épine
              dorsale d&apos;Horizons. Pouvoir résiduel : institutionnel,
              symbolique, réticulaire.
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-cyan/20">
            <span className="font-bold text-cyan">EP</span>
            <span className="text-muted/60"> — Édouard Philippe</span>
            <p className="text-muted/70 mt-1">
              Héritier opérationnel. R��seau chinois institutionnel (FCF, FAF).
              Candidat déclaré 2027. Maire du Havre, président d&apos;Horizons.
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-purple-400/20">
            <span className="font-bold text-purple-400">DDV</span>
            <span className="text-muted/60"> — Dominique de Villepin</span>
            <p className="text-muted/70 mt-1">
              Réseau privé multipolaire et opaque (Chine, Qatar, Russie).
              Concurrent direct de Philippe.{" "}
              <span className="text-neon-red">
                Aucun lien direct avec Philippe.
              </span>
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-orange-400/20">
            <span className="font-bold text-orange-400">JPR</span>
            <span className="text-muted/60"> — Jean-Pierre Raffarin</span>
            <p className="text-muted/70 mt-1">
              Plaque tournante sino-française. Membre Horizons ET représentant
              officiel pour la Chine. Alerté par la DGSI. Médaille de
              l&apos;Amitié de Xi Jinping.
            </p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-md border border-neon-red/20 bg-neon-red/5">
          <p className="text-[11px] text-foreground/70">
            <span className="text-neon-red font-semibold">Question centrale :</span>{" "}
            le système produit-il de la diplomatie d&apos;influence (intérêt
            national) ou de la diplomatie d&apos;allégeance (intérêts privés) ?
            La réponse systémique : les deux coexistent. Les frontières sont
            structurellement floues dans un régime de pantouflage. C&apos;est
            cette ambigüité qui rend le système stable.
          </p>
        </div>
        <p className="text-[9px] text-muted/30 mt-3 font-mono">
          Source : rapport d&apos;analyse structurelle des centroïdes, 28 mars
          2026 — 61 connexions, 8 catégories, 42 événements documentés
        </p>
      </GlassCard>

      <ReseauView personnes={reseau} />
    </div>
  );
}
