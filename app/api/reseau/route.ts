import type { NextRequest } from "next/server";
import { db } from "@/lib/db/client";
import { personnes, liensReseau } from "@/lib/db/schema";
import { getGraphData, getPersonnes } from "@/lib/db/queries";
import { jsonResponse, errorResponse, validateApiKey, slugify } from "@/lib/api-utils";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const format = searchParams.get("format");

  try {
    if (format === "graph") {
      const data = await getGraphData();
      return jsonResponse(data);
    }
    const result = await getPersonnes();
    return jsonResponse(result);
  } catch (error) {
    return errorResponse("Erreur lors de la recuperation du reseau", 500);
  }
}

export async function POST(request: NextRequest) {
  if (!validateApiKey(request)) {
    return errorResponse("Non autorise", 401);
  }

  try {
    const body = await request.json();
    const { type } = body;

    if (type === "personne") {
      const { nom, role, description, photoUrl, partiPolitique, fonctions } = body;
      if (!nom) return errorResponse("nom est requis");

      const [personne] = await db
        .insert(personnes)
        .values({
          nom,
          slug: slugify(nom),
          role: role || null,
          description: description || null,
          photoUrl: photoUrl || null,
          partiPolitique: partiPolitique || null,
          fonctions: fonctions || null,
        })
        .returning();

      return jsonResponse(personne, 201);
    }

    if (type === "lien") {
      const { personneSourceId, personneCibleId, typeLien, description, force } = body;
      if (!personneSourceId || !personneCibleId || !typeLien) {
        return errorResponse("personneSourceId, personneCibleId et typeLien sont requis");
      }

      const [lien] = await db
        .insert(liensReseau)
        .values({
          personneSourceId,
          personneCibleId,
          typeLien,
          description: description || null,
          sources: body.sources || null,
          force: force || 5,
        })
        .returning();

      return jsonResponse(lien, 201);
    }

    return errorResponse("type doit etre 'personne' ou 'lien'");
  } catch (error) {
    return errorResponse("Erreur lors de la creation", 500);
  }
}
