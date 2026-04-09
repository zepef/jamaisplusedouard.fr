"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "/biographie", key: "biographie" },
  { href: "/actualites", key: "actualites" },
];

const enquetesLinks = [
  { href: "/controverses", key: "controverses" },
  { href: "/investigations", key: "investigations" },
  { href: "/conflits", key: "conflits" },
];

const navLinksAfter = [
  { href: "/reseau", key: "reseau" },
  { href: "/matraquage", key: "matraquage" },
  { href: "/blog", key: "blog" },
  { href: "/soumettre", key: "soumettre" },
];

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  const prefix = `/${locale}`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isEnquetesActive = enquetesLinks.some((l) =>
    pathname.startsWith(`${prefix}${l.href}`)
  );

  const linkClass = (href: string) => {
    const active = pathname.startsWith(`${prefix}${href}`);
    return `neon-underline px-3 py-2 text-sm font-medium transition-colors ${
      active ? "text-cyan glow-cyan" : "text-muted hover:text-foreground"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-glass-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`${prefix}`} className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-tight text-cyan glow-cyan">
              #JamaisPlusEdouard
            </span>
            <span className="text-xs font-mono text-magenta hidden sm:block">
              #JPE
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.key} href={`${prefix}${link.href}`} className={linkClass(link.href)}>
                {t(link.key)}
              </Link>
            ))}

            {/* Dropdown Enquêtes */}
            <div ref={ref} className="relative">
              <button
                onClick={() => setOpen(!open)}
                className={`neon-underline px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  isEnquetesActive
                    ? "text-cyan glow-cyan"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t("enquetes")}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                  <path d="M2 4l3 3 3-3" />
                </svg>
              </button>
              {open && (
                <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-surface border border-glass-border rounded-md shadow-lg py-1 z-50">
                  {enquetesLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={`${prefix}${link.href}`}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname.startsWith(`${prefix}${link.href}`)
                          ? "text-cyan bg-cyan/5"
                          : "text-muted hover:text-foreground hover:bg-glass"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinksAfter.map((link) => (
              <Link key={link.key} href={`${prefix}${link.href}`} className={linkClass(link.href)}>
                {t(link.key)}
              </Link>
            ))}

            <Link
              href={`${prefix}/recherche`}
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-md text-muted hover:text-cyan transition-colors"
              aria-label={t("recherche")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
