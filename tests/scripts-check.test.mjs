import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

const root = new URL("..", import.meta.url);

// Syntaxe seulement : daily-newsletter.mjs envoie de vrais e-mails si on l'exécute.
const scripts = [
  "scripts/daily-newsletter.mjs",
  "scripts/inbox-watcher.mjs",
  "scripts/integrate-proposals.mjs",
];

for (const script of scripts) {
  test(`node --check ${script}`, () => {
    const result = spawnSync(process.execPath, ["--check", script], {
      cwd: root,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, result.stderr);
  });
}
