"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "ja", label: "JA", flag: "🇯🇵" },
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "zh", label: "ZH", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  function switchLocale(newLocale: string) {
    // Replace /currentLocale/... with /newLocale/...
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-xs font-mono text-muted hover:text-cyan transition-colors cursor-pointer rounded border border-glass-border hover:border-cyan/30"
      >
        <span>{currentLocale.flag}</span>
        <span>{currentLocale.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 z-50 glass rounded-lg border border-glass-border p-1 min-w-[120px]">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs font-mono rounded transition-colors cursor-pointer ${
                  l.code === locale
                    ? "text-cyan bg-cyan/10"
                    : "text-muted hover:text-foreground hover:bg-glass"
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
