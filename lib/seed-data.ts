// Contenu éditorial publié. Les données vivent dans lib/data/*.json (éditables
// par le pipeline de veille via revue) et sont typées ici.
import ficheJson from "./data/fiche.json";
import timelineJson from "./data/timeline.json";
import controversesJson from "./data/controverses.json";
import reseauJson from "./data/reseau.json";
import investigationsJson from "./data/investigations.json";

// ─── Types ───────────────────────────────────────────────────

export type TimelineEvent = {
  annee: string;
  titre: string;
  description: string;
  categorie: "biographie" | "controverse" | "carriere";
  section?: string;
};

export type Controverse = {
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  date: string;
  gravite: "haute" | "moyenne" | "basse";
  themes: string[];
  sources: { titre: string; url: string; type: string; auteur?: string }[];
};

export type SousReseau =
  | "young-leaders"
  | "sino-francais"
  | "matignon"
  | "le-havre"
  | "entreprises"
  | "horizons"
  | "villepin"
  | "chiraquien"
  | "facilitateurs"
  | "portuaire"
  | "bilderberg"
  | "coalition-2027"
  | "cyber-influence";

export type Centroide = "philippe" | "juppe" | "raffarin" | "villepin";

export type PersonneReseau = {
  nom: string;
  slug: string;
  role: string;
  description: string;
  typeLien: string;
  partiPolitique?: string;
  sousReseaux?: SousReseau[];
  /** Si défini, ce nœud est rattaché à un centroïde spécifique dans le graphe */
  rattachement?: Centroide | Centroide[];
};

export type Investigation = {
  slug: string;
  titre: string;
  sousTitre: string;
  resume: string;
  date: string;
  themes: string[];
  parties: {
    titre: string;
    contenu: string;
  }[];
  noeudsLies: string[]; // slugs of related network nodes
  sources: { titre: string; url?: string; type: string }[];
};

// ─── Données ─────────────────────────────────────────────────

export const ficheSynthetique = ficheJson;
export const timeline = timelineJson as TimelineEvent[];
export const controverses = controversesJson as Controverse[];
export const reseau = reseauJson as unknown as PersonneReseau[];
export const investigations = investigationsJson as Investigation[];

export const stats = {
  controverses: controverses.length,
  articles: timeline.length,
  connexions: reseau.length,
  sources: controverses.reduce((acc, c) => acc + c.sources.length, 0),
  investigations: investigations.length,
};
