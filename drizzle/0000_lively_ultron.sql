CREATE TYPE "public"."categorie" AS ENUM('actualite', 'controverse', 'biographie');--> statement-breakpoint
CREATE TYPE "public"."lien_type" AS ENUM('politique', 'financier', 'familial', 'professionnel', 'mediatique');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('presse', 'officiel', 'social', 'registre');--> statement-breakpoint
CREATE TABLE "abonnes_newsletter" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"confirmed" boolean DEFAULT false,
	"token" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "abonnes_newsletter_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"titre" varchar(500) NOT NULL,
	"slug" varchar(500) NOT NULL,
	"contenu" text NOT NULL,
	"resume" text,
	"categorie" "categorie" NOT NULL,
	"date_publication" timestamp DEFAULT now(),
	"date_evenement" timestamp,
	"image_url" text,
	"published" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "articles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "articles_tags" (
	"article_id" integer NOT NULL,
	"tag_id" integer NOT NULL,
	CONSTRAINT "articles_tags_article_id_tag_id_pk" PRIMARY KEY("article_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "liens_reseau" (
	"id" serial PRIMARY KEY NOT NULL,
	"personne_source_id" integer NOT NULL,
	"personne_cible_id" integer NOT NULL,
	"type_lien" "lien_type" NOT NULL,
	"description" text,
	"sources" text,
	"force" integer DEFAULT 5
);
--> statement-breakpoint
CREATE TABLE "personnes" (
	"id" serial PRIMARY KEY NOT NULL,
	"nom" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"role" varchar(500),
	"description" text,
	"photo_url" text,
	"parti_politique" varchar(255),
	"fonctions" text,
	CONSTRAINT "personnes_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"article_id" integer NOT NULL,
	"url" text NOT NULL,
	"titre" varchar(500),
	"auteur" varchar(255),
	"date_source" timestamp,
	"type" "source_type" NOT NULL,
	"archive_url" text
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"nom" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	CONSTRAINT "tags_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "articles_tags" ADD CONSTRAINT "articles_tags_article_id_articles_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_tags" ADD CONSTRAINT "articles_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "liens_reseau" ADD CONSTRAINT "liens_reseau_personne_source_id_personnes_id_fk" FOREIGN KEY ("personne_source_id") REFERENCES "public"."personnes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "liens_reseau" ADD CONSTRAINT "liens_reseau_personne_cible_id_personnes_id_fk" FOREIGN KEY ("personne_cible_id") REFERENCES "public"."personnes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sources" ADD CONSTRAINT "sources_article_id_articles_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "articles_slug_idx" ON "articles" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "articles_categorie_idx" ON "articles" USING btree ("categorie");--> statement-breakpoint
CREATE INDEX "articles_date_publication_idx" ON "articles" USING btree ("date_publication");