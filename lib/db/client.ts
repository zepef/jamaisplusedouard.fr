import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Récupérer la connection string disponible
let connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_URL;

// Si c'est le pooler Supabase (port 6543), forcer le port 5432 (session mode)
// Le pooler en mode transaction ne supporte pas DEFAULT, NOW(), ni les prepared statements
if (connectionString?.includes(":6543")) {
  connectionString = connectionString.replace(":6543", ":5432");
  // Retirer les paramètres spécifiques au pooler
  connectionString = connectionString
    .replace("&pgbouncer=true", "")
    .replace("?pgbouncer=true&", "?")
    .replace("&supa=base-pooler.x", "");
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

export const db = drizzle({ client: pool, schema });
