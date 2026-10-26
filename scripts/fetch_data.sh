#!/usr/bin/env bash
# Copies the public files the site reads next to it, so the browser asks nobody else: the catalog of the Android versions (GitHub), the totals of the
# players' answers and the list of incompatible games (the relay, which does not allow other sites to read it directly). Used by the workflow, and by hand to try the site on a computer.
# With --local, the catalog is the one of the folder next to this repository (gameport-catalog), so a change not yet pushed shows on the site at once.
# With --test, the totals are those of the relay's test set (the same data as the console in test mode), to see on the site what a debug build and the console add.
set -euo pipefail
local_catalog=0
summary_path=/summary
for argument in "$@"; do
  case "$argument" in
    --local) local_catalog=1 ;;
    --test) summary_path=/test/summary ;;
    *) echo "unknown option: $argument" >&2; exit 2 ;;
  esac
done
here="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$here/site/data"
if [ "$local_catalog" = 1 ]; then
  cp "$here/../gameport-catalog/v1/catalog.json" "$here/site/data/catalog.json"
else
  curl -fsS --retry 3 "https://raw.githubusercontent.com/gameport-project/gameport-catalog/main/v1/catalog.json" -o "$here/site/data/catalog.json"
fi
curl -fsS --retry 3 "https://gameport-relay.gameport.workers.dev$summary_path" -o "$here/site/data/summary.json"
curl -fsS --retry 3 "https://gameport-relay.gameport.workers.dev/incompatible" -o "$here/site/data/incompatible.json"
python3 - "$here/site/data" <<'PY'
import json, sys
folder = sys.argv[1]
catalog = json.load(open(f"{folder}/catalog.json"))
summary = json.load(open(f"{folder}/summary.json"))
assert catalog["v"] == 1 and catalog["apps"], "the catalog is empty"
assert summary["v"] == 1, "the summary is not the one expected"
incompatible = json.load(open(f"{folder}/incompatible.json"))
assert incompatible["v"] == 1, "the list of incompatible games is not the one expected"
print(f'{len(catalog["apps"])} games, {len(summary["games"])} with answers, {len(incompatible["games"])} incompatible')
PY
