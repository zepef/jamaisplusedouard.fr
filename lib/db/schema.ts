import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
  integer,
  uuid,
  unique,
} from "drizzle-orm/pg-core";

// Schema documentation. The app reads static content from lib/seed-data.ts and
// accesses these tables at runtime via the Supabase JS client (lib/db/supabase.ts).
// drizzle-kit uses this file to document/generate migrations for the live DB.

// Newsletter
export const abonnesNewsletter = pgTable("abonnes_newsletter", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  confirmed: boolean("confirmed").default(false),
  token: varchar("token", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Commentaires d'articles
export const commentaires = pgTable("commentaires", {
  id: uuid("id").primaryKey(),
  articleSlug: varchar("article_slug", { length: 500 }).notNull(),
  pseudo: varchar("pseudo", { length: 50 }).notNull(),
  contenu: text("contenu").notNull(),
  votesUtile: integer("votes_utile").default(0),
  votesInutile: integer("votes_inutile").default(0),
  sigInsulte: integer("sig_insulte").default(0),
  sigDesinfo: integer("sig_desinfo").default(0),
  sigSpam: integer("sig_spam").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Déduplication des votes (un voter_id ne compte qu'une fois par type)
export const commentVotes = pgTable(
  "comment_votes",
  {
    id: serial("id").primaryKey(),
    commentId: uuid("comment_id").notNull(),
    voterId: varchar("voter_id", { length: 64 }).notNull(),
    type: varchar("type", { length: 16 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [unique().on(table.commentId, table.voterId, table.type)]
);

// Déduplication des signalements
export const commentReports = pgTable(
  "comment_reports",
  {
    id: serial("id").primaryKey(),
    commentId: uuid("comment_id").notNull(),
    voterId: varchar("voter_id", { length: 64 }).notNull(),
    motif: varchar("motif", { length: 16 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [unique().on(table.commentId, table.voterId, table.motif)]
);

// Soumissions citoyennes (modération hors-ligne). Pas d'IP stockée.
export const soumissions = pgTable("soumissions", {
  id: uuid("id").primaryKey(),
  categorie: varchar("categorie", { length: 50 }).notNull(),
  contenu: text("contenu").notNull(),
  sources: text("sources"),
  contact: varchar("contact", { length: 255 }),
  anonyme: boolean("anonyme").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
