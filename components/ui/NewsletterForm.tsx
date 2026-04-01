"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage(t("succes"));
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || t("erreur"));
      }
    } catch {
      setStatus("error");
      setMessage(t("erreur"));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-lg p-4">
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("placeholder")}
          required
          className="flex-1 bg-transparent text-foreground placeholder-muted/50 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="tag tag-actualite cursor-pointer hover:bg-cyan/20 transition-colors px-4 py-2 disabled:opacity-50"
        >
          {status === "loading" ? "..." : t("bouton")}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-xs font-mono ${
            status === "success" ? "text-neon-green" : "text-neon-red"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
