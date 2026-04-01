import ReseauView from "@/components/reseau/ReseauView";
import GlassCard from "@/components/ui/GlassCard";
import { reseau } from "@/lib/seed-data";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.reseau" });
  return { title: t("title"), description: t("description") };
}

export default async function ReseauPage() {
  const t = await getTranslations("pages.reseau");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-magenta glow-magenta">{t("heading")}</span>{" "}
        <span className="text-foreground/40 text-xl">◈ {t("subheading")}</span>
      </h1>
      <p className="text-sm text-muted mb-4 font-mono">
        {t("subtitle", { count: reseau.length })}
      </p>

      {/* Analyse structurelle */}
      <GlassCard className="mb-8 !p-5">
        <h2 className="text-xs font-mono font-semibold text-cyan mb-3 uppercase tracking-wider">
          {t("analyseStructurelle")}
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          {t("analyseText")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
          <div className="glass rounded-md p-3 border border-white/10">
            <span className="font-bold text-white">{t("centroïdes.juppé.initiales")}</span>
            <span className="text-muted/60"> — {t("centroïdes.juppé.nom")}</span>
            <p className="text-muted/70 mt-1">
              {t("centroïdes.juppé.description")}
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-cyan/20">
            <span className="font-bold text-cyan">{t("centroïdes.philippe.initiales")}</span>
            <span className="text-muted/60"> — {t("centroïdes.philippe.nom")}</span>
            <p className="text-muted/70 mt-1">
              {t("centroïdes.philippe.description")}
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-purple-400/20">
            <span className="font-bold text-purple-400">{t("centroïdes.villepin.initiales")}</span>
            <span className="text-muted/60"> — {t("centroïdes.villepin.nom")}</span>
            <p className="text-muted/70 mt-1">
              {t("centroïdes.villepin.description")}{" "}
              <span className="text-neon-red">
                {t("centroïdes.villepin.warning")}
              </span>
            </p>
          </div>
          <div className="glass rounded-md p-3 border border-orange-400/20">
            <span className="font-bold text-orange-400">{t("centroïdes.raffarin.initiales")}</span>
            <span className="text-muted/60"> — {t("centroïdes.raffarin.nom")}</span>
            <p className="text-muted/70 mt-1">
              {t("centroïdes.raffarin.description")}
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
