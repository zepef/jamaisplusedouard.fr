import type { Metadata } from "next";
import ReseauView from "@/components/reseau/ReseauView";
import { reseau } from "@/lib/seed-data";

export const metadata: Metadata = {
  title: "Reseau",
  description:
    "Cartographie interactive du reseau d'Edouard Philippe — connexions politiques, financieres et mediatiques.",
};

export default function ReseauPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-magenta glow-magenta">Reseau</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {reseau.length} connexions cartographiees — Edouard Philippe au centre
      </p>

      <ReseauView personnes={reseau} />
    </div>
  );
}
