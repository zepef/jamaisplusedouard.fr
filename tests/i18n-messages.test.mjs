import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";

const root = new URL("..", import.meta.url);

function leafKeys(value, prefix = "") {
  const keys = [];
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === "object" && !Array.isArray(child)) {
      keys.push(...leafKeys(child, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

function localesFromRouting() {
  const source = readFileSync(new URL("i18n/routing.ts", root), "utf8");
  const block = source.match(/locales:\s*\[([^\]]+)\]/);
  assert.ok(block, "i18n/routing.ts doit déclarer locales: [...]");
  return [...block[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

test("les 8 locales de routing ont un fichier messages", () => {
  const locales = localesFromRouting();
  assert.deepEqual(locales, ["fr", "en", "de", "es", "ru", "ja", "it", "zh"]);

  const files = readdirSync(new URL("messages/", root))
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/, ""))
    .sort();

  assert.deepEqual(files, [...locales].sort());
});

test("les fichiers messages ont les mêmes clés que fr.json", () => {
  const locales = localesFromRouting();
  const bundles = Object.fromEntries(
    locales.map((locale) => {
      const data = JSON.parse(readFileSync(new URL(`messages/${locale}.json`, root), "utf8"));
      return [locale, new Set(leafKeys(data))];
    }),
  );
  const reference = bundles.fr;

  for (const locale of locales) {
    const keys = bundles[locale];
    const missing = [...reference].filter((key) => !keys.has(key));
    const extra = [...keys].filter((key) => !reference.has(key));
    assert.deepEqual(missing, [], `${locale} manque des clés de fr`);
    assert.deepEqual(extra, [], `${locale} a des clés absentes de fr`);
  }
});
