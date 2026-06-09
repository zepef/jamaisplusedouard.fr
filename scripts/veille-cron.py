#!/usr/bin/env python3
"""Cron de veille — jamaisplusedouard.fr
Exécution : quotidienne (à définir via cronjob)
Kill switch : vérifie data-incoming/PAUSE avant toute collecte
"""

import json, os, subprocess, sys, textwrap, urllib.request
from datetime import datetime, timezone
from pathlib import Path

REPO = "/opt/data/jamaisplusedouard.fr"
TAVILY_KEY = "***"
GIT_SSH = "ssh -i /home/hermes/.hermes/.ssh/id_ed25519_veille -o StrictHostKeyChecking=accept-new"

QUEBEC = [
    "Édouard Philippe Le Havre enquête PNF mise à jour 2026",
    "Édouard Philippe réseau influence France China Foundation Young Leaders",
    "Forward Global contrat public marché influence France",
    "Édouard Philippe Horizons financement campagne dons 2026",
    "Édouard Philippe conflit intérêts Havre marchés publics",
    "Édouard Philippe Avisa Partners cyber influence lien",
    "Édouard Philippe présidentielle 2027 sondage actualité",
    "Le Havre hub numérique enquête favoritisme trafic influence",
]


def git(cmd, check=True):
    env = os.environ.copy()
    env["GIT_SSH_COMMAND"] = GIT_SSH
    return subprocess.run(
        ["git"] + cmd,
        cwd=REPO,
        capture_output=True, text=True,
        env=env, timeout=30
    )


def search_tavily(query):
    data = json.dumps({
        "api_key": TAVILY_KEY,
        "query": query,
        "search_depth": "advanced",
        "include_answer": False,
        "max_results": 5
    }).encode()
    req = urllib.request.Request(
        "https://api.tavily.com/search",
        data=data,
        headers={"Content-Type": "application/json"}
    )
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        return json.loads(resp.read())
    except Exception as e:
        print(f"  [WARN] Tavily error: {e}", flush=True)
        return {"results": []}


def main():
    print(f"[veille] {datetime.now(timezone.utc).isoformat()} — Démarrage", flush=True)

    # 1. Git pull
    r = git(["pull", "--rebase", "--quiet"])
    if r.returncode != 0:
        print(f"[veille] Git pull échoué: {r.stderr}", flush=True)
        sys.exit(1)

    # 2. KILL SWITCH — PAUSE file
    pause_file = Path(REPO) / "data-incoming" / "PAUSE"
    if pause_file.exists():
        print("[veille] ⛔ PAUSE détecté — aucune collecte ni commit. Attends suppression.", flush=True)
        sys.exit(0)

    # 3. Collecte Tavily
    all_results = []
    seen_urls = set()
    for q in QUEBEC:
        print(f"[veille] Recherche: {q[:60]}...", flush=True)
        res = search_tavily(q)
        for r in res.get("results", []):
            url = r.get("url", "")
            if url and url not in seen_urls and url.startswith("http"):
                seen_urls.add(url)
                all_results.append(r)

    print(f"[veille] {len(all_results)} résultats uniques collectés", flush=True)

    # 4. Production JSON (structure minimaliste — le contenu réel sera enrichi par l'agent)
    output = {
        "_meta": {
            "source": f"tavily:{len(QUEBEC)}queries",
            "producer": "hermes-cron",
            "generatedAt": datetime.now(timezone.utc).isoformat()
        },
        "reseau": [],
        "timeline": [],
        "controverses": [],
        "investigations": [],
        "_raw_hits": [
            {"title": r.get("title",""), "url": r.get("url",""), "content": r.get("content","")[:300]}
            for r in all_results[:10]
        ]
    }

    # Write to data-incoming/
    date_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    out_path = Path(REPO) / "data-incoming" / f"{date_str}-collecte-brute.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"[veille] Fichier écrit: {out_path}", flush=True)

    # 5. Git commit + push
    r = git(["add", "data-incoming/"])
    r = git(["diff", "--cached", "--quiet"])
    if r.returncode == 0:
        print("[veille] Rien de nouveau à committer.", flush=True)
        return

    r = git(["commit", "-m", f"chore(veille): collecte {date_str}"])
    if r.returncode != 0:
        print(f"[veille] Commit échoué: {r.stderr}", flush=True)
        sys.exit(1)

    r = git(["push", "origin", "main"])
    if r.returncode != 0:
        print(f"[veille] Push échoué: {r.stderr}", flush=True)
        print("[veille] Le commit est local. Vérifie l'authentification SSH.", flush=True)
        sys.exit(1)

    print(f"[veille] ✅ Collecte {date_str} commitée et pushée.", flush=True)


if __name__ == "__main__":
    main()
