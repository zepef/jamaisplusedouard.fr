import type { NextRequest } from "next/server";

export function jsonResponse(data: unknown, status = 200) {
  return Response.json(data, { status });
}

export function errorResponse(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export function validateApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get("x-api-key");
  return apiKey === process.env.API_SECRET_KEY;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
