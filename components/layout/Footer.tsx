import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-muted">
              jamaisplusedouard.fr
            </span>
            <span className="text-xs text-muted/50">|</span>
            <span className="text-xs text-muted/70">
              Veille citoyenne — Liberte d&apos;expression (Art. 11 DDHC)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted/70">
            <Link
              href="/mentions-legales"
              className="hover:text-foreground transition-colors"
            >
              Mentions legales
            </Link>
            <Link
              href="/sources"
              className="hover:text-foreground transition-colors"
            >
              Sources
            </Link>
            <span className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon-green pulse-neon" />
              Agents actifs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
