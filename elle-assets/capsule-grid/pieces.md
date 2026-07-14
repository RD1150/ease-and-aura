# The Neutral Capsule — 8 pieces

Renders to `grid-preview.png` (1000x1500 Pinterest pin) via `../build.sh`.

## Imagery: editorial stock, not Amazon product shots

`p1.jpg` … `p8.jpg` are **free-license editorial photos from Pexels** (commercial use, no
attribution required). They are deliberately NOT Amazon product images.

Why: Amazon's Operating Agreement only permits product images pulled via SiteStripe or the
Product Advertising API. PA-API access requires 3 qualifying sales first — which requires
traffic — which is what this pin is *for*. Waiting on SiteStripe made the pin a manual,
blocked task. It also isn't needed: the whole pin links to one URL (the quiz), so per-tile
product shots buy us nothing, and catalog cutouts make a worse pin than editorial imagery.

The tiles are a mood board, not a shoppable product list. Labels name the *category*
("Cream Knit"), never a specific product, so nothing here implies "buy this exact item."

To swap in real product shots later, drop replacement `p1.jpg` … `p8.jpg` in this folder —
`grid.html` picks them up with no code change. Tune framing via the `[label, file, focal
point, zoom]` table in `grid.html`.

## The 8 pieces

| # | Piece           | File     | Source (Pexels ID) |
|---|-----------------|----------|--------------------|
| 1 | Cream Knit      | `p1.jpg` | 6630834            |
| 2 | Camel Blazer    | `p2.jpg` | 9218536            |
| 3 | White Tee       | `p3.jpg` | 12025472           |
| 4 | Straight Jean   | `p4.jpg` | 4546763            |
| 5 | Camel Coat      | `p5.jpg` | 5424917            |
| 6 | Leather Tote    | `p6.jpg` | 36364964           |
| 7 | Leather Loafer  | `p7.jpg` | 27609337           |
| 8 | Gold Hoops      | `p8.jpg` | 12194345           |

Two pieces changed from the original list, both driven by what imagery actually exists:
- **Camel Trouser → Camel Blazer.** Pexels has no neutral trousers shot as a product; it's
  all blue denim. A blazer is an equally legitimate capsule staple with good imagery.
- **White button-down → White Tee.** Same reason. Both are capsule staples.

## Tagged search links

The quiz results page links each capsule category to a tagged Amazon search (tag:
`easeandaura20-20`), so we earn on anything bought in-session. These are the fallbacks that
match the categories above:

1. Cream knit sweater — https://www.amazon.com/s?k=womens+cream+crewneck+sweater&tag=easeandaura20-20
2. Camel blazer — https://www.amazon.com/s?k=womens+camel+blazer&tag=easeandaura20-20
3. White tee — https://www.amazon.com/s?k=womens+white+cotton+tee&tag=easeandaura20-20
4. Straight-leg jeans — https://www.amazon.com/s?k=womens+straight+leg+jeans&tag=easeandaura20-20
5. Camel wool coat — https://www.amazon.com/s?k=womens+camel+wool+coat&tag=easeandaura20-20
6. Brown leather tote — https://www.amazon.com/s?k=womens+brown+leather+tote+bag&tag=easeandaura20-20
7. Leather loafers — https://www.amazon.com/s?k=womens+leather+loafers&tag=easeandaura20-20
8. Gold hoop earrings — https://www.amazon.com/s?k=gold+hoop+earrings&tag=easeandaura20-20
