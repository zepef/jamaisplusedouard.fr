"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

export default function ConfirmContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`/api/newsletter?token=${token}`)
      .then((res) => {
        setStatus(res.ok ? "success" : "error");
      })
      .catch(() => setStatus("error"));
  }, [token]);

  if (status === "loading") {
    return (
      <GlassCard>
        <p className="text-sm text-muted font-mono">
          Confirmation en cours...
        </p>
      </GlassCard>
    );
  }

  if (status === "success") {
    return (
      <GlassCard glow="cyan">
        <div className="text-4xl mb-4 text-neon-green">✓</div>
        <h1 className="text-xl font-bold text-foreground mb-2">
          Inscription confirmee
        </h1>
        <p className="text-sm text-muted mb-6">
          Vous recevrez les alertes sur les nouvelles controverses et
          decouvertes du reseau.
        </p>
        <Link
          href="/"
          className="tag tag-actualite cursor-pointer hover:bg-cyan/20 transition-colors px-4 py-2 inline-block"
        >
          Retour a l&apos;accueil
        </Link>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow="red">
      <div className="text-4xl mb-4 text-neon-red">✗</div>
      <h1 className="text-xl font-bold text-foreground mb-2">
        Erreur de confirmation
      </h1>
      <p className="text-sm text-muted mb-6">
        Le lien est invalide ou a expire. Reessayez de vous inscrire.
      </p>
      <Link
        href="/"
        className="tag tag-controverse cursor-pointer hover:bg-neon-red/20 transition-colors px-4 py-2 inline-block"
      >
        Retour a l&apos;accueil
      </Link>
    </GlassCard>
  );
}
