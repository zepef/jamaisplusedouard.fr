#!/usr/bin/env python3
"""Veille RSS pour jamaisplusedouard.fr — blogwatcher scan + filtrage Philippe"""
import subprocess, json, os, re, sys
from datetime import datetime, timezone
from pathlib import Path

REPO = "/opt/data/jamaisplusedouard.fr"
BLOGWATCHER_DB = f"{REPO}/data-incoming/blogwatcher.db"
BLOGWATCHER_BIN = "/opt/hermes/.venv/bin/blogwatcher-cli"

FILTERS = [
    r"Édouard Philippe", r"Edouard Philippe",
    r"maire du Havre", r"Horizons",
    r"Le Havre", r"Forward Global",
    r"CMA CGM"
]

def filter_article(title, summary=""):
    text = f"{title} {summary}"
    for pat in FILTERS:
        if re.search(pat, text, re.IGNORECASE):
            return True
    return False

def run_blogwatcher():
    env = os.environ.copy()
    env["BLOGWATCHER_DB"] = BLOGWATCHER_DB
    r = subprocess.run(
        [BLOGWATCHER_BIN, "articles", "--all", "--json"],
        capture_output=True, text=True, env=env, timeout=60
    )
    articles = []
    for line in r.stdout.strip().split("\n"):
        if line:
            try:
                articles.append(json.loads(line))
            except json.JSONDecodeError:
                pass
    return articles

def main():
    print(f"[veille-rss] {datetime.now(timezone.utc).isoformat()} — Scan RSS", flush=True)

    # 1. Kill switch
    pause_file = Path(REPO) / "data-incoming" / "PAUSE"
    if pause_file.exists():
        print("[veille-rss] ⛔ PAUSE détecté — aucun scan RSS.", flush=True)
        sys.exit(0)

    # 2. Run scan
    env = os.environ.copy()
    env["BLOGWATCHER_DB"] = BLOGWATCHER_DB
    r = subprocess.run(
        [BLOGWATCHER_BIN, "scan"],
        capture_output=True, text=True, env=env, timeout=120
    )
    print(r.stdout, flush=True)
    if r.stderr:
        print(f"[STDERR] {r.stderr}", flush=True)

    # 3. Get unread articles
    env["BLOGWATCHER_SILENT"] = "1"
    r = subprocess.run(
        [BLOGWATCHER_BIN, "articles", "--json"],
        capture_output=True, text=True, env=env, timeout=30
    )
    new_articles = []
    for line in r.stdout.strip().split("\n"):
        if line:
            try:
                new_articles.append(json.loads(line))
            except json.JSONDecodeError:
                pass

    # 4. Filter by Philippe mentions
    hits = [a for a in new_articles if filter_article(a.get("title", ""), a.get("summary", ""))]

    if hits:
        print(f"[veille-rss] 🔍 {len(hits)} article(s) mentionnant Édouard Philippe :", flush=True)
        for h in hits:
            print(f"  - [{h.get('blog_name','?')}] {h.get('title','?')}", flush=True)
            print(f"    {h.get('url','?')}", flush=True)

        # Write to data-incoming/
        date_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        output = {
            "_meta": {
                "source": f"blogwatcher:{len(new_articles)}articles",
                "producer": "hermes-cron-rss",
                "generatedAt": datetime.now(timezone.utc).isoformat()
            },
            "_rss_hits": [
                {
                    "media": h.get("blog_name", ""),
                    "title": h.get("title", ""),
                    "url": h.get("url", ""),
                    "published": h.get("published_date", "")
                }
                for h in hits
            ]
        }
        out_path = Path(REPO) / "data-incoming" / f"{date_str}-rss-mentions.json"
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(output, f, ensure_ascii=False, indent=2)
        print(f"[veille-rss] ✅ Fichier écrit: {out_path}", flush=True)

        # Git commit + push
        GIT_SSH = "ssh -i /home/hermes/.hermes/.ssh/id_ed25519_veille -o StrictHostKeyChecking=accept-new"
        env["GIT_SSH_COMMAND"] = GIT_SSH
        subprocess.run(["git", "add", "data-incoming/"], cwd=REPO, env=env, timeout=10)
        subprocess.run(["git", "add", "data-incoming/blogwatcher.db"], cwd=REPO, env=env, timeout=10)
        r = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=REPO, env=env, timeout=10)
        if r.returncode != 0:
            subprocess.run(["git", "commit", "-m", f"chore(veille-rss): {len(hits)} mentions Philippe {date_str}"], cwd=REPO, env=env, timeout=10)
            subprocess.run(["git", "push", "origin", "main"], cwd=REPO, env=env, timeout=30)
            print(f"[veille-rss] ✅ Commit + push effectué.", flush=True)
        else:
            print("[veille-rss] Rien de nouveau à committer.", flush=True)
    else:
        print("[veille-rss] Aucune mention d'Édouard Philippe dans les nouveaux articles.", flush=True)

    # Mark all as read
    env2 = os.environ.copy()
    env2["BLOGWATCHER_DB"] = BLOGWATCHER_DB
    env2["BLOGWATCHER_YES"] = "1"
    subprocess.run([BLOGWATCHER_BIN, "read-all"], capture_output=True, env=env2, timeout=10)

if __name__ == "__main__":
    main()
