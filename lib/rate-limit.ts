import type { NextRequest } from "next/server";

// Limiteur fenêtre fixe en mémoire (mono-instance). Réinitialisé au redémarrage
// et non partagé entre instances : suffisant pour un déploiement Elestio unique.
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

// Renvoie true si la requête est autorisée, false si la limite est atteinte.
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}
