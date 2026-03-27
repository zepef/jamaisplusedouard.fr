"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/biographie", label: "Biographie" },
  { href: "/actualites", label: "Actualites" },
  { href: "/controverses", label: "Controverses" },
  { href: "/conflits", label: "Conflits" },
  { href: "/reseau", label: "Reseau" },
  { href: "/matraquage", label: "Matraquage" },
  { href: "/soumettre", label: "Soumettre" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass border-b border-glass-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-tight text-cyan glow-cyan">
              #JamaisPlusEdouard
            </span>
            <span className="text-xs font-mono text-magenta hidden sm:block">
              #JPE
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`neon-underline px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan glow-cyan"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/recherche"
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-md text-muted hover:text-cyan transition-colors"
              aria-label="Rechercher"
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
          </nav>
        </div>
      </div>
    </header>
  );
}
