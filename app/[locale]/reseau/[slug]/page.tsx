import Link from "next/link";
import { notFound } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import { reseau } from "@/lib/seed-data";
import type { Centroide } from "@/lib/seed-data";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { getLocalizedPersonne, getLocalizedReseau } from "@/lib/get-localized-data";

const typeColors: Record<string, string> = {
  politique: "text-cyan border-cyan/30 bg-cyan/8",
  financier: "text-neon-red border-neon-red/30 bg-neon-red/8",
  professionnel: "text-magenta border-magenta/30 bg-magenta/8",
  mediatique: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",
};

const centroideInfo: Record<
  Centroide,
  { label: string; color: string; nom: string }
> = {
  juppe: { label: "AJ", color: "#ffffff", nom: "Alain Juppé" },
  philippe: { label: "EP", color: "#00f0ff", nom: "Édouard Philippe" },
  raffarin: { label: "JPR", color: "#ff8800", nom: "Jean-Pierre Raffarin" },
  villepin: { label: "DDV", color: "#cc44ff", nom: "Dominique de Villepin" },
};


export function generateStaticParams() {
  return reseau.flatMap((p) =>
    routing.locales.map((locale) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const personne = getLocalizedPersonne(locale, slug);
  return {
    title: personne
      ? `${personne.nom} — Réseau | jamaisplusedouard.fr`
      : "Réseau",
    description: personne?.role,
  };
}

export default async function PersonneDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const personne = getLocalizedPersonne(locale, slug);
  const tReseau = await getTranslations("reseauPage");
  const tc = await getTranslations("common");

  // Build translated sous-réseau labels from existing keys
  const sousReseauLabels: Record<string, string> = {
    "young-leaders": tReseau("youngLeaders"),
    "sino-francais": tReseau("sinoFrancais"),
    matignon: tReseau("matignon"),
    "le-havre": tReseau("leHavre"),
    entreprises: tReseau("entreprises"),
    horizons: tReseau("horizons"),
    villepin: tReseau("villepin"),
    chiraquien: tReseau("chiraquien"),
  };

  if (!personne) notFound();

  const rattachements: Centroide[] = personne.rattachement
    ? Array.isArray(personne.rattachement)
      ? personne.rattachement
      : [personne.rattachement]
    : [];

  const localizedReseau = getLocalizedReseau(locale);

  // Find related by shared sous-réseaux (more useful than same type)
  const relatedBySousReseau = localizedReseau.filter(
    (p) =>
      p.slug !== slug &&
      p.sousReseaux &&
      personne.sousReseaux &&
      p.sousReseaux.some((sr) => personne.sousReseaux!.includes(sr))
  );

  // Also find same-type connections
  const relatedByType = localizedReseau.filter(
    (p) =>
      p.slug !== slug &&
      p.typeLien === personne.typeLien &&
      !relatedBySousReseau.some((r) => r.slug === p.slug)
  );

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/reseau"
        className="text-xs font-mono text-muted hover:text-cyan transition-colors neon-underline"
      >
        {tc("retour")}
      </Link>

      <article className="mt-8">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={`tag ${typeColors[personne.typeLien] || "tag-biographie"}`}
          >
            {personne.typeLien}
          </span>
          {personne.partiPolitique && (
            <span className="tag text-cyan/70 border-cyan/20 bg-cyan/5">
              {personne.partiPolitique}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold text-foreground">{personne.nom}</h1>
        <p className="mt-1 text-sm text-muted/70">{personne.role}</p>

        {/* Sous-réseaux */}
        {personne.sousReseaux && personne.sousReseaux.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {personne.sousReseaux.map((sr) => (
              <span
                key={sr}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-glass-border bg-glass text-muted/80"
              >
                {sousReseauLabels[sr] || sr}
              </span>
            ))}
          </div>
        )}

        {/* Rattachement centroïdes */}
        {rattachements.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-mono text-muted/50 mb-2 uppercase tracking-wider">
              {tReseau("rattachementReseau")}
            </p>
            <div className="flex flex-wrap gap-2">
              {rattachements.map((c) => {
                const info = centroideInfo[c];
                return (
                  <div
                    key={c}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border"
                    style={{
                      borderColor: `${info.color}30`,
                      backgroundColor: `${info.color}08`,
                    }}
                  >
                    <span
                      className="inline-block h-3 w-3 rounded-full border-2 text-[8px] font-bold flex items-center justify-center"
                      style={{
                        borderColor: info.color,
                        color: info.color,
                      }}
                    />
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: info.color }}
                    >
                      {info.label}
                    </span>
                    <span className="text-xs text-muted/70">{info.nom}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Description détaillée */}
        <GlassCard glow="magenta" className="mt-8">
          <h2 className="text-xs font-mono font-semibold text-magenta mb-3 uppercase tracking-wider">
            {tReseau("ficheDetaillee")}
          </h2>
          <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
            {personne.description}
          </p>
        </GlassCard>

        {/* Liens avec les centroïdes */}
        {rattachements.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-mono font-semibold text-muted/60 mb-3 uppercase tracking-wider">
              {tReseau("positionLosange")}
            </h2>
            <GlassCard className="!p-4">
              <div className="space-y-3">
                {rattachements.map((c) => {
                  const info = centroideInfo[c];
                  return (
                    <div key={c} className="flex items-center gap-3">
                      <div className="text-center min-w-[60px]">
                        <div
                          className="text-xs font-mono font-bold"
                          style={{ color: info.color }}
                        >
                          {info.nom.split(" ").pop()}
                        </div>
                      </div>
                      <div
                        className="flex-1 border-t border-dashed"
                        style={{ borderColor: `${info.color}40` }}
                      />
                      <span
                        className={`tag ${typeColors[personne.typeLien] || ""} bg-glass`}
                      >
                        {personne.typeLien}
                      </span>
                      <div
                        className="flex-1 border-t border-dashed"
                        style={{ borderColor: `${info.color}40` }}
                      />
                      <div className="text-center min-w-[60px]">
                        <div className="text-xs font-mono text-foreground/80">
                          {personne.nom.length > 20
                            ? personne.nom.slice(0, 18) + "..."
                            : personne.nom}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Connexions par sous-réseau */}
        {relatedBySousReseau.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-mono font-semibold text-muted/60 mb-3 uppercase tracking-wider">
              {tReseau("memeSousReseau")} ({relatedBySousReseau.length})
            </h2>
            <div className="space-y-2">
              {relatedBySousReseau.slice(0, 12).map((p) => (
                <Link key={p.slug} href={`/reseau/${p.slug}`}>
                  <GlassCard className="!p-3 group cursor-pointer hover:border-magenta/20 transition-all">
                    <div className="flex items-center gap-3">
                      <span
                        className={`tag ${typeColors[p.typeLien] || "tag-biographie"} text-[9px]`}
                      >
                        {p.typeLien}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-magenta transition-colors">
                        {p.nom}
                      </span>
                      <span className="text-[10px] text-muted/40 truncate flex-1">
                        {p.role}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              ))}
              {relatedBySousReseau.length > 12 && (
                <p className="text-[10px] text-muted/40 font-mono">
                  {tReseau("plusConnexions", { count: relatedBySousReseau.length - 12 })}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Connexions par type */}
        {relatedByType.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-mono font-semibold text-muted/60 mb-3 uppercase tracking-wider">
              {tReseau("autresConnexions")} {personne.typeLien}s ({relatedByType.length})
            </h2>
            <div className="space-y-2">
              {relatedByType.slice(0, 8).map((p) => (
                <Link key={p.slug} href={`/reseau/${p.slug}`}>
                  <GlassCard className="!p-3 group cursor-pointer hover:border-magenta/20 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-foreground group-hover:text-magenta transition-colors">
                        {p.nom}
                      </span>
                      <span className="text-[10px] text-muted/40 truncate flex-1">
                        {p.role}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
