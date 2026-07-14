#!/bin/bash
# Renders every Ease & Aura social asset from the HTML templates.
# Product tiles fill in automatically once capsule-grid/p1..p8.jpg exist;
# until then they render as labelled placeholders.
set -e

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"

shot() { # shot <url> <out> <w> <h>
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --window-size="$3,$4" \
    --screenshot="$2" "$1" 2>/dev/null
}

echo "→ carousel (7 slides, 1080x1350)"
mkdir -p "$DIR/carousel"
for n in 1 2 3 4 5 6 7; do
  shot "file://$DIR/carousel.html?n=$n" "$DIR/carousel/slide-$n.png" 1080 1350
  printf "  slide-%s\n" "$n"
done

echo "→ capsule grid pin (1000x1500)"
shot "file://$DIR/capsule-grid/grid.html" "$DIR/capsule-grid/grid-preview.png" 1000 1500

have=0
for i in 1 2 3 4 5 6 7 8; do
  [ -f "$DIR/capsule-grid/p$i.jpg" ] && have=$((have+1))
done
echo
echo "product photos present: $have/8"
[ "$have" -lt 8 ] && echo "(missing ones render as placeholders — see capsule-grid/pieces.md)"
echo "done."
