import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { stats } from "@/lib/seed-data";
import { getTranslations } from "next-intl/server";

const sections = [
  { href: "/biographie", key: "biographie", color: "text-cyan", glow: "cyan" as const, icon: "01" },
  { href: "/actualites", key: "actualites", color: "text-neon-green", glow: "cyan" as const, icon: "02" },
  { href: "/controverses", key: "controverses", color: "text-neon-red", glow: "red" as const, icon: "03" },
  { href: "/investigations", key: "investigations", color: "text-neon-red", glow: "red" as const, icon: "04" },
  { href: "/conflits", key: "conflits", color: "text-neon-red", glow: "red" as const, icon: "05" },
  { href: "/reseau", key: "reseau", color: "text-magenta", glow: "magenta" as const, icon: "06" },
  { href: "/matraquage", key: "matraquage", color: "text-neon-red", glow: "red" as const, icon: "07" },
  { href: "/dashboard", key: "dashboard", color: "text-cyan", glow: "cyan" as const, icon: "08" },
  { href: "/blog", key: "blog", color: "text-cyan", glow: "cyan" as const, icon: "09" },
  { href: "/soumettre", key: "soumettre", color: "text-neon-green", glow: "cyan" as const, icon: "10" },
];

export default async function Home() {
  const tHero = await getTranslations("hero");
  const tNav = await getTranslations("nav");
  const tSections = await getTranslations("sections");
  const tNewsletter = await getTranslations("newsletter");
  const tStats = await getTranslations("stats");

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-cyan glow-cyan">JAMAIS</span>
          <span className="text-magenta glow-magenta">+</span>
          <span className="text-foreground">EDOUARD</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto font-mono">
          {tHero("tagline")}
        </p>
        <p className="text-sm text-muted/60 max-w-2xl mx-auto font-mono mt-2">
          {tHero("subtitle")}
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted/70">
          <span className="inline-block h-2 w-2 rounded-full bg-neon-green pulse-neon" />
          <span className="font-mono">{tHero("agentsOnline")}</span>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <GlassCard className="flex flex-wrap items-center justify-around gap-6 py-4">
          <Stat label={tStats("controverses")} value={String(stats.controverses)} color="text-neon-red" />
          <Stat label={tStats("evenements")} value={String(stats.articles)} color="text-cyan" />
          <Stat label={tStats("connexions")} value={String(stats.connexions)} color="text-magenta" />
          <Stat label={tStats("sources")} value={String(stats.sources)} color="text-neon-green" />
        </GlassCard>
      </section>

      {/* Sections grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((s) => (
            <Link key={s.key} href={s.href}>
              <GlassCard glow={s.glow} className="group cursor-pointer h-full">
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-bold font-mono ${s.color} opacity-30`}>
                    {s.icon}
                  </span>
                  <div>
                    <h2 className={`text-lg font-bold ${s.color} group-hover:brightness-125 transition`}>
                      {tNav(s.key)}
                    </h2>
                    {s.key === "dashboard" && (
                      <p className="text-xs text-muted mt-0.5">{tNav("dashboardDesc")}</p>
                    )}
                  </div>
                  <svg
                    className="ml-auto text-muted/30 group-hover:text-foreground transition-colors shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-md mx-auto text-center">
        <h2 className="text-lg font-bold text-foreground mb-2">
          {tSections("newsletter")}
        </h2>
        <p className="text-xs text-muted mb-4">
          {tNewsletter("description")}
        </p>
        <NewsletterForm />
      </section>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="text-center">
      <div className={`text-2xl font-bold font-mono ${color}`}>{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
