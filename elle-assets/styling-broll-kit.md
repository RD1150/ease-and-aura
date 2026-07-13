# Ease & Aura — Elle Styling B-Roll Kit (3-Look Lookbook Reel)

Goal: a ~15s vertical (9:16) lookbook reel — **ONE CAPSULE · THREE WAYS** — Elle in 3 quiet-luxury neutral looks, subtle motion, labeled text overlays, soft music. Ends on the quiz CTA.

Aesthetic reference (user's Pinterest board): neutral tones, layered capsule looks, labeled "Look 1 / Look 2…" format, 60-30-10 effortless layering, office-ready ease (Stitch Fix vest + wide trouser vibe). Clean, editorial, save-worthy.

Tool: **Runway** (workspace `rdshop70`). Video burns credits — **top up before the video step.** Gen-4 image ≈ 8 credits (3 stills ≈ 24); image-to-video costs more per clip.

---

## STEP 1 — Lock Elle's face (consistency)
Use `elle-hero.jpeg` as the **character/style reference** for every generation. Keep this descriptor IDENTICAL across all 3 — change only the outfit + setting:

> `warm approachable woman in her mid-40s, honey-tan skin, chin-length balayage bob, warm brown eyes, minimal makeup, delicate gold jewelry, quiet-luxury neutrals, natural window light, 35mm, photorealistic, editorial fashion`

Runway: Gen-4, aspect **3:4**, add `elle-hero.jpeg` as reference image, lock the seed if the UI allows.

---

## STEP 2 — 3 outfit stills (one capsule, three ways)
Same descriptor above + these outfits (neutral, layered — matches the board):

1. **THE KNIT** — "cream chunky knit sweater tucked into tailored camel trousers, gold hoops, standing by a sunlit window" *(you already have the hero — reuse it, skip re-render)*
2. **THE COAT** — "long camel wool coat over ivory ribbed turtleneck, straight trousers, walking outdoors on a quiet tree-lined street, soft overcast light, hands in pockets"
3. **THE BLAZER** — "oversized beige blazer, plain white tee, straight trousers, effortless, leaning against a pale plaster wall, warm daylight"

Render 3:4, pick the best frame from each. Save chosen stills as `still-1.jpg`, `still-2.jpg`, `still-3.jpg` in `elle-assets/broll/`.

---

## STEP 3 — Animate each still (image-to-video)
Feed each chosen still into Runway image-to-video. Keep motion SUBTLE + slow (premium, not uncanny). ~4s each:

1. **THE KNIT** — "she turns slightly toward camera and gives a soft warm smile, hair catches the light, gentle slow motion"
2. **THE COAT** — "she walks slowly toward camera down the street, coat moving gently in the breeze, cinematic slow motion"
3. **THE BLAZER** — "she pushes off the wall and takes a relaxed confident step forward, calm and effortless"

Export MP4, 9:16 if offered (else I crop). Name them `elle-look-1.mp4`, `elle-look-2.mp4`, `elle-look-3.mp4` in `elle-assets/broll/`.

---

## STEP 4 — Drop clips here, I stitch it
Folder: `~/ease-and-aura/elle-assets/broll/`  ← already created.
Then tell me — I ffmpeg them into ONE 9:16 reel with:
- gentle crossfades between looks
- **text overlays (Cormorant + gold, on-brand):**
  - open: **ONE CAPSULE · THREE WAYS**
  - per look: **LOOK 1 — THE KNIT** / **LOOK 2 — THE COAT** / **LOOK 3 — THE BLAZER**
  - end card: **Neutral. Effortless. Yours.**  →  **Your capsule in 5 minutes · easeandaura.com**
- music-ready (drop an MP3 in the folder, or add the track in the IG/FB composer)

Output: `elle-lookbook-reel.mp4` — ready for IG Reels, TikTok, Pinterest Idea Pin, FB.

---

### Cheap alt (if credits are tight)
Animate ONLY Look 1; for Looks 2 & 3 give me the stills and I'll build a **Ken Burns** slow pan/zoom on them + splice the one motion clip. ~24 credits total, still looks editorial.

---

## BONUS — matching Pinterest grid graphic (I can build now, no Runway)
Those "one capsule, X ways" grid pins on your board? I can render an **on-brand "Elle's Capsule — Three Ways" graphic** (the 3 stills labeled in a clean neutral grid with the 60-30-10 note + quiz CTA) using headless Chrome — the same way I built the FB cover. Pinterest loves these; they get saved. Say the word once you have the 3 stills.
