"use client";

import { useState } from "react";

type Categorie =
  | "conflits-interets"
  | "reseau"
  | "gestion-locale"
  | "matraquage"
  | "autre";

const categorieLabels: Record<Categorie, string> = {
  "conflits-interets": "Conflits d'interets",
  reseau: "Reseau d'influence",
  "gestion-locale": "Gestion locale (Le Havre)",
  matraquage: "Matraquage mediatique",
  autre: "Autre",
};

export default function SubmitForm() {
  const [categorie, setCategorie] = useState<Categorie>("conflits-interets");
  const [contenu, setContenu] = useState("");
  const [sources, setSources] = useState("");
  const [contact, setContact] = useState("");
  const [anonyme, setAnonyme] = useState(true);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contenu.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/soumettre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categorie,
          contenu: contenu.trim(),
          sources: sources.trim() || null,
          contact: anonyme ? null : contact.trim() || null,
          anonyme,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage(
          "Information recue. Elle sera verifiee et croisee avant toute publication."
        );
        setContenu("");
        setSources("");
        setContact("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion. Reessayez.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Categorie */}
      <div>
        <label className="text-xs font-mono text-muted/70 block mb-1.5">
          Type d&apos;information
        </label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(categorieLabels) as Categorie[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategorie(cat)}
              className={`tag cursor-pointer transition-colors ${
                categorie === cat
                  ? "tag-actualite"
                  : "text-muted border-glass-border bg-glass hover:border-cyan/30"
              }`}
            >
              {categorieLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div>
        <label
          htmlFor="contenu"
          className="text-xs font-mono text-muted/70 block mb-1.5"
        >
          Votre information *
        </label>
        <textarea
          id="contenu"
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          required
          rows={6}
          placeholder="Decrivez l'information dont vous disposez. Soyez aussi precis que possible : dates, noms, lieux, contexte..."
          className="w-full bg-glass text-foreground placeholder-muted/30 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors resize-y"
        />
      </div>

      {/* Sources / preuves */}
      <div>
        <label
          htmlFor="sources"
          className="text-xs font-mono text-muted/70 block mb-1.5"
        >
          Sources / preuves (URLs, references de documents, dates)
        </label>
        <textarea
          id="sources"
          value={sources}
          onChange={(e) => setSources(e.target.value)}
          rows={3}
          placeholder="URLs d'articles, references de documents officiels, numeros de decrets, dates de publication..."
          className="w-full bg-glass text-foreground placeholder-muted/30 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors resize-y"
        />
      </div>

      {/* Anonymat */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setAnonyme(!anonyme)}
          className={`w-10 h-5 rounded-full transition-colors relative ${
            anonyme ? "bg-neon-green/30" : "bg-glass"
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${
              anonyme
                ? "left-5 bg-neon-green"
                : "left-0.5 bg-muted"
            }`}
          />
        </button>
        <span className="text-sm text-muted">
          {anonyme
            ? "Soumission anonyme"
            : "Je souhaite etre recontacte"}
        </span>
      </div>

      {/* Contact (si non anonyme) */}
      {!anonyme && (
        <div>
          <label
            htmlFor="contact"
            className="text-xs font-mono text-muted/70 block mb-1.5"
          >
            Comment vous recontacter (email, Signal, autre)
          </label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="email@protonmail.com ou numero Signal"
            className="w-full bg-glass text-foreground placeholder-muted/30 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors"
          />
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || !contenu.trim()}
        className="tag tag-actualite cursor-pointer hover:bg-cyan/20 transition-colors px-6 py-2.5 text-sm disabled:opacity-50"
      >
        {status === "loading" ? "Envoi en cours..." : "Soumettre"}
      </button>

      {message && (
        <p
          className={`text-xs font-mono ${
            status === "success" ? "text-neon-green" : "text-neon-red"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
