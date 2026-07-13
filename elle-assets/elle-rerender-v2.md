# Elle — RE-RENDER v2 (the "actually mid-40s" pass)

**Why v2:** v1 rendered as a late-20s AI-influencer face. That breaks the whole "style over 40" wedge — our target customer must see a *peer*, not a 28-year-old. This pass fixes age + kills the glossy AI sheen.

---

## ⚠️ TWO RULES THAT DECIDE WHETHER THIS WORKS

**1. DO NOT attach `elle-hero.jpeg` as a character/style reference.**
The old kit says to attach it to every generation for consistency. For THIS render, don't. That hero *is* the too-young face — using it as a reference anchors the model to the exact problem we're fixing. This is very likely why v1 stayed young.
→ Generate with **NO character reference.** Once you have an Elle you love, *she* becomes the reference for everything afterward.

**2. Ask OLDER than you want, and demand skin texture.**
Image models bias hard toward young + airbrushed. Ask for "mid-40s" and you get 30. Ask for late-40s with explicit aging markers and unretouched skin, and you land at a believable 45.

---

## THE PROMPT (paste as-is)

```
Editorial portrait photograph of a 48-year-old woman, genuinely her age — visible fine
lines around her eyes and mouth, soft crow's feet when she smiles, gentle forehead lines,
a naturally softened jawline, real visible skin texture and pores, unretouched skin.
A few silver strands threaded through long chestnut-brown hair with soft balayage, past
her shoulders, loosely styled. Fair, light skin with a warm undertone. Warm hazel eyes,
calm and kind. Minimal makeup, bare glowing skin, no heavy contour, no false lashes.
Delicate fine gold jewelry. Wearing a cream chunky knit sweater, quiet-luxury neutral
palette. Standing by a large sunlit window, soft diffused natural daylight, warm cream
and beige interior.
Shot on 85mm, shallow depth of field, natural documentary fashion photography,
Kinfolk editorial, photorealistic, film grain, NOT retouched, NOT glamorous,
NOT an influencer headshot.
```

**Runway settings:** Gen-4 · Text to Image · aspect **3:4** · 4 images (~32 credits)
*(Avoid the "Nano Banana"/Google models — they require a paid-plan upgrade.)*

---

## IF SHE STILL COMES OUT TOO YOUNG

Escalate in this order — change ONE thing at a time:
1. Bump the stated age: `48` → **`52-year-old woman`** (you'll perceive ~45).
2. Add after "unretouched skin": `**she looks like a real woman in her late forties, not a model**`
3. Add at the end: `**candid, imperfect, real, shot for a magazine profile not an advertisement**`
4. Add `**graying at the temples**`

The single highest-leverage words are **"visible skin texture and pores," "unretouched," and a stated age in the high 40s/low 50s.** Those three do most of the work.

---

## HOW TO PICK THE WINNER

Judge the 4 images against the customer, not against beauty. Ask:
- Would a **47-year-old woman** see herself here — or see someone she's supposed to envy?
- Does the skin look like **skin** (texture, pores, lines) or like glass?
- Could this plausibly be a **real photo** of a real person?

Pick the most *believable*, not the most beautiful. Beauty is what broke v1.

---

## WHEN YOU HAVE HER

Save the winner as `elle-assets/elle-hero-v2.jpeg` and tell me. Then I:
1. Rebuild the profile pic + FB cover with the new face
2. Use her as the locked character reference for the 3 outfit looks (`styling-broll-kit.md`)
3. Finish the carousel + capsule grid + captions → Day-1 go-live

**Nothing else is blocked. She is the last gate.**
