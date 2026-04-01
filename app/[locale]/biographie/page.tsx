import GlassCard from "@/components/ui/GlassCard";
import { timeline, ficheSynthetique } from "@/lib/seed-data";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.biographie" });
  return { title: t("title"), description: t("description") };
}

// Group by section
const sections = timeline.reduce(
  (acc, event) => {
    const section = event.section || "Autre";
    if (!acc[section]) acc[section] = [];
    acc[section].push(event);
    return acc;
  },
  {} as Record<string, typeof timeline>
);

const sectionOrder = [
  "Origines",
  "Formation",
  "Carrière",
  "Le Havre",
  "Politique nationale",
  "Matignon",
  "Covid",
  "Horizons",
  "Présidentielle 2027",
  "Judiciaire",
  "Réseau",
];

export default async function BiographiePage() {
  const t = await getTranslations("pages.biographie");

  // Map French section names (used as data keys) to translated display labels
  const sectionDisplayNames: Record<string, string> = {
    "Origines": t("sections.origines"),
    "Formation": t("sections.formation"),
    "Carrière": t("sections.carriere"),
    "Le Havre": t("sections.leHavre"),
    "Politique nationale": t("sections.politiqueNationale"),
    "Matignon": t("sections.matignon"),
    "Covid": t("sections.covid"),
    "Horizons": t("sections.horizons"),
    "Présidentielle 2027": t("sections.presidentielle2027"),
    "Judiciaire": t("sections.judiciaire"),
    "Réseau": t("sections.reseau"),
  };

  const ficheEntries: [string, string][] = [
    [t("labels.nomComplet"), ficheSynthetique.nomComplet],
    [t("labels.naissance"), `${ficheSynthetique.dateNaissance} (${ficheSynthetique.age} ans) — ${ficheSynthetique.lieuNaissance}`],
    [t("labels.parti"), ficheSynthetique.parti],
    [t("labels.fonctionActuelle"), ficheSynthetique.fonctionActuelle],
    [t("labels.premierMinistre"), ficheSynthetique.premierMinistre],
    [t("labels.formation"), ficheSynthetique.formation],
    [t("labels.famille"), `${ficheSynthetique.conjoint} · ${ficheSynthetique.enfants}`],
    [t("labels.candidature2027"), ficheSynthetique.candidature2027],
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-magenta glow-magenta">{t("title")}</span>
      </h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {t("subtitle")}
      </p>

      {/* Fiche synthétique */}
      <GlassCard glow="cyan" className="mb-12">
        <h2 className="text-sm font-mono font-bold text-cyan mb-4">
          {t("ficheSynthetique")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {ficheEntries.map(([key, value]) => (
            <div key={key}>
              <span className="text-xs font-mono text-muted/50 uppercase">
                {key}
              </span>
              <p className="text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Timeline by section */}
      {sectionOrder.map((sectionName) => {
        const events = sections[sectionName];
        if (!events) return null;

        return (
          <section key={sectionName} className="mb-10">
            <h2 className="text-lg font-bold text-foreground mb-4 border-b border-glass-border pb-2">
              {sectionDisplayNames[sectionName] ?? sectionName}
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[47px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan/30 via-magenta/30 to-neon-red/30" />

              <div className="space-y-4">
                {events.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-24 text-right pr-3">
                      <span
                        className={`text-xs font-mono font-bold ${
                          event.categorie === "controverse"
                            ? "text-neon-red"
                            : event.categorie === "carriere"
                              ? "text-yellow-400"
                              : "text-cyan"
                        }`}
                      >
                        {event.annee}
                      </span>
                    </div>
                    <GlassCard
                      glow={
                        event.categorie === "controverse" ? "red" : "none"
                      }
                      className="flex-1 !p-4"
                    >
                      <span
                        className={`tag ${
                          event.categorie === "controverse"
                            ? "tag-controverse"
                            : event.categorie === "carriere"
                              ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/8"
                              : "tag-biographie"
                        }`}
                      >
                        {event.categorie}
                      </span>
                      <h3 className="mt-1.5 text-sm font-semibold text-foreground">
                        {event.titre}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {event.description}
                      </p>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
