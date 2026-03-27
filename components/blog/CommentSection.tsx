"use client";

import { useState, useEffect, useCallback } from "react";
import GlassCard from "@/components/ui/GlassCard";

type Commentaire = {
  id: string;
  pseudo: string;
  contenu: string;
  date: string;
  notes: { utile: number; inutile: number };
  signalements: { insulte: number; desinformation: number; spam: number };
  userVote?: "utile" | "inutile" | null;
  userSignal?: string | null;
};

type Props = {
  articleSlug: string;
};

export default function CommentSection({ articleSlug }: Props) {
  const [commentaires, setCommentaires] = useState<Commentaire[]>([]);
  const [pseudo, setPseudo] = useState("");
  const [contenu, setContenu] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [tri, setTri] = useState<"recent" | "utile" | "signale">("recent");

  // Charger les commentaires
  const loadComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/commentaires?slug=${articleSlug}`);
      if (res.ok) {
        const data = await res.json();
        setCommentaires(data.commentaires || []);
      }
    } catch {
      // Silently fail — comments are not critical
    }
  }, [articleSlug]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  // Poster un commentaire
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contenu.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/commentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleSlug,
          pseudo: pseudo.trim() || "Anonyme",
          contenu: contenu.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Commentaire publie.");
        setContenu("");
        loadComments();
        setTimeout(() => setMessage(""), 3000);
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Erreur.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion.");
    }
  }

  // Voter
  async function handleVote(commentId: string, type: "utile" | "inutile") {
    try {
      await fetch("/api/commentaires/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId, type }),
      });
      loadComments();
    } catch {
      // silent
    }
  }

  // Signaler
  async function handleSignal(
    commentId: string,
    motif: "insulte" | "desinformation" | "spam"
  ) {
    try {
      await fetch("/api/commentaires/signaler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId, motif }),
      });
      setMessage(`Commentaire signale pour ${motif}. Merci.`);
      setTimeout(() => setMessage(""), 3000);
      loadComments();
    } catch {
      // silent
    }
  }

  // Tri
  const sorted = [...commentaires].sort((a, b) => {
    if (tri === "utile") return b.notes.utile - a.notes.utile;
    if (tri === "signale") {
      const totalA =
        a.signalements.insulte + a.signalements.desinformation + a.signalements.spam;
      const totalB =
        b.signalements.insulte + b.signalements.desinformation + b.signalements.spam;
      return totalB - totalA;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-12">
      <h2 className="text-lg font-bold text-foreground mb-6">
        Commentaires ({commentaires.length})
      </h2>

      {/* Formulaire */}
      <GlassCard className="mb-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              placeholder="Pseudo (optionnel)"
              className="w-40 bg-glass text-foreground placeholder-muted/30 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors"
            />
            <span className="text-xs text-muted/50 self-center">
              ou anonyme
            </span>
          </div>
          <textarea
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            placeholder="Votre commentaire... Restez factuel et source vos affirmations."
            required
            rows={3}
            className="w-full bg-glass text-foreground placeholder-muted/30 outline-none font-mono text-sm px-3 py-2 rounded border border-glass-border focus:border-cyan/30 transition-colors resize-y"
          />
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-muted/40">
              Les commentaires insultants ou diffusant de fausses informations
              seront signales par la communaute.
            </p>
            <button
              type="submit"
              disabled={status === "loading" || !contenu.trim()}
              className="tag tag-actualite cursor-pointer hover:bg-cyan/20 transition-colors px-4 py-2 disabled:opacity-50 shrink-0"
            >
              {status === "loading" ? "..." : "Publier"}
            </button>
          </div>
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
      </GlassCard>

      {/* Tri */}
      {commentaires.length > 0 && (
        <div className="flex gap-2 mb-4">
          {(
            [
              { key: "recent", label: "Recents" },
              { key: "utile", label: "Plus utiles" },
              { key: "signale", label: "Plus signales" },
            ] as const
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setTri(t.key)}
              className={`tag cursor-pointer transition-colors ${
                tri === t.key
                  ? "tag-actualite"
                  : "text-muted border-glass-border bg-glass"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* Liste des commentaires */}
      <div className="space-y-3">
        {sorted.map((c) => {
          const totalSignalements =
            c.signalements.insulte +
            c.signalements.desinformation +
            c.signalements.spam;
          const isSignaled = totalSignalements >= 3;

          return (
            <div
              key={c.id}
              className={`glass rounded-lg p-4 ${
                isSignaled ? "border border-neon-red/30 opacity-60" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {c.pseudo}
                  </span>
                  <time className="text-[10px] font-mono text-muted/50">
                    {new Date(c.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
                {isSignaled && (
                  <span className="tag text-neon-red border-neon-red/30 bg-neon-red/8">
                    signale ({totalSignalements})
                  </span>
                )}
              </div>

              {/* Contenu */}
              {isSignaled ? (
                <details>
                  <summary className="text-xs text-neon-red/70 cursor-pointer">
                    Contenu masque — signale par la communaute. Cliquer pour
                    afficher.
                  </summary>
                  <p className="text-sm text-muted mt-2 italic">{c.contenu}</p>
                </details>
              ) : (
                <p className="text-sm text-foreground/90">{c.contenu}</p>
              )}

              {/* Actions */}
              <div className="mt-3 flex items-center gap-4 flex-wrap">
                {/* Votes */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleVote(c.id, "utile")}
                    className="text-[10px] font-mono text-muted/50 hover:text-neon-green transition-colors cursor-pointer"
                  >
                    ▲ Utile ({c.notes.utile})
                  </button>
                  <span className="text-muted/20">|</span>
                  <button
                    onClick={() => handleVote(c.id, "inutile")}
                    className="text-[10px] font-mono text-muted/50 hover:text-neon-red transition-colors cursor-pointer"
                  >
                    ▼ Inutile ({c.notes.inutile})
                  </button>
                </div>

                {/* Signalements */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-muted/30">Signaler :</span>
                  <button
                    onClick={() => handleSignal(c.id, "insulte")}
                    className="text-[10px] font-mono text-muted/40 hover:text-neon-red transition-colors cursor-pointer"
                    title="Contenu insultant"
                  >
                    Insulte
                    {c.signalements.insulte > 0 &&
                      ` (${c.signalements.insulte})`}
                  </button>
                  <span className="text-muted/20">·</span>
                  <button
                    onClick={() => handleSignal(c.id, "desinformation")}
                    className="text-[10px] font-mono text-muted/40 hover:text-neon-red transition-colors cursor-pointer"
                    title="Fausses informations"
                  >
                    Desinfo
                    {c.signalements.desinformation > 0 &&
                      ` (${c.signalements.desinformation})`}
                  </button>
                  <span className="text-muted/20">·</span>
                  <button
                    onClick={() => handleSignal(c.id, "spam")}
                    className="text-[10px] font-mono text-muted/40 hover:text-neon-red transition-colors cursor-pointer"
                    title="Spam ou hors-sujet"
                  >
                    Spam
                    {c.signalements.spam > 0 && ` (${c.signalements.spam})`}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {commentaires.length === 0 && (
        <p className="text-sm text-muted/50 text-center py-8 font-mono">
          Aucun commentaire. Soyez le premier a reagir.
        </p>
      )}
    </div>
  );
}
