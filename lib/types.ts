import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import type {
  articles,
  sources,
  personnes,
  liensReseau,
  tags,
  abonnesNewsletter,
} from "./db/schema";

// Select types (lecture)
export type Article = InferSelectModel<typeof articles>;
export type Source = InferSelectModel<typeof sources>;
export type Personne = InferSelectModel<typeof personnes>;
export type LienReseau = InferSelectModel<typeof liensReseau>;
export type Tag = InferSelectModel<typeof tags>;
export type AbonneNewsletter = InferSelectModel<typeof abonnesNewsletter>;

// Insert types (ecriture)
export type NewArticle = InferInsertModel<typeof articles>;
export type NewSource = InferInsertModel<typeof sources>;
export type NewPersonne = InferInsertModel<typeof personnes>;
export type NewLienReseau = InferInsertModel<typeof liensReseau>;
export type NewTag = InferInsertModel<typeof tags>;

// Types enrichis pour le frontend
export type ArticleAvecSources = Article & {
  sources: Source[];
  tags: Tag[];
};

// Types pour le graphe D3
export type GraphNode = {
  id: number;
  nom: string;
  slug: string;
  role: string | null;
  partiPolitique: string | null;
  group: string;
};

export type GraphLink = {
  source: number;
  target: number;
  typeLien: string;
  description: string | null;
  force: number | null;
};

export type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};
