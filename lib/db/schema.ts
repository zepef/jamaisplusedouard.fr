import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
  integer,
  pgEnum,
  primaryKey,
  index,
} from "drizzle-orm/pg-core";

// Enums
export const categorieEnum = pgEnum("categorie", [
  "actualite",
  "controverse",
  "biographie",
]);

export const sourceTypeEnum = pgEnum("source_type", [
  "presse",
  "officiel",
  "social",
  "registre",
]);

export const lienTypeEnum = pgEnum("lien_type", [
  "politique",
  "financier",
  "familial",
  "professionnel",
  "mediatique",
]);

// Articles
export const articles = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    titre: varchar("titre", { length: 500 }).notNull(),
    slug: varchar("slug", { length: 500 }).notNull().unique(),
    contenu: text("contenu").notNull(),
    resume: text("resume"),
    categorie: categorieEnum("categorie").notNull(),
    datePublication: timestamp("date_publication").defaultNow(),
    dateEvenement: timestamp("date_evenement"),
    imageUrl: text("image_url"),
    published: boolean("published").default(false),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [
    index("articles_slug_idx").on(table.slug),
    index("articles_categorie_idx").on(table.categorie),
    index("articles_date_publication_idx").on(table.datePublication),
  ]
);

// Sources (chaque fait doit etre source)
export const sources = pgTable("sources", {
  id: serial("id").primaryKey(),
  articleId: integer("article_id")
    .notNull()
    .references(() => articles.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  titre: varchar("titre", { length: 500 }),
  auteur: varchar("auteur", { length: 255 }),
  dateSource: timestamp("date_source"),
  type: sourceTypeEnum("type").notNull(),
  archiveUrl: text("archive_url"),
});

// Personnes du reseau
export const personnes = pgTable("personnes", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  role: varchar("role", { length: 500 }),
  description: text("description"),
  photoUrl: text("photo_url"),
  partiPolitique: varchar("parti_politique", { length: 255 }),
  fonctions: text("fonctions"),
});

// Liens du reseau
export const liensReseau = pgTable("liens_reseau", {
  id: serial("id").primaryKey(),
  personneSourceId: integer("personne_source_id")
    .notNull()
    .references(() => personnes.id, { onDelete: "cascade" }),
  personneCibleId: integer("personne_cible_id")
    .notNull()
    .references(() => personnes.id, { onDelete: "cascade" }),
  typeLien: lienTypeEnum("type_lien").notNull(),
  description: text("description"),
  sources: text("sources"),
  force: integer("force").default(5),
});

// Tags
export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
});

// Articles <-> Tags (N:N)
export const articlesTags = pgTable(
  "articles_tags",
  {
    articleId: integer("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.articleId, table.tagId] })]
);

// Newsletter
export const abonnesNewsletter = pgTable("abonnes_newsletter", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  confirmed: boolean("confirmed").default(false),
  token: varchar("token", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
