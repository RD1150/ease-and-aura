import pkg from '/Users/reenadutta/Downloads/primed-ad/node_modules/playwright/index.js';
const { chromium } = pkg;
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(join(__dir, 'pin-template.html'), 'utf8');

const pins = [
  {
    file: 'pin-cream-sweater.png',
    kicker: 'Capsule Wardrobe',
    headline: 'The Best <em>Cream</em> Sweater',
    sub: 'The hardest-working piece you own — and the easiest to get wrong.',
    points: ['Read fiber, gauge & construction in 30 seconds', 'Which "cream" actually flatters you', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-white-tshirt.png',
    kicker: 'Wardrobe Essentials',
    headline: 'The <em>White Tee</em>, Done Right',
    sub: 'Most fail the same three ways. Here’s how to spot the good ones.',
    points: ['The window test for see-through fabric', 'Why "100% cotton" isn’t enough', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-straight-leg-jeans.png',
    kicker: 'Denim Guide',
    headline: 'Jeans That <em>Last</em>',
    sub: 'The one denim cut that never really goes out of style.',
    points: ['Why less stretch means better jeans', 'The rise that makes any outfit work', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-camel-coat.png',
    kicker: 'Investment Piece',
    headline: 'How to Buy a <em>Camel Coat</em>',
    sub: 'The piece people notice — and the one most worth buying well.',
    points: ['The wool % is the whole ballgame', 'The details that reveal quality', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-white-button-down.png',
    kicker: 'Wardrobe Staple',
    headline: 'The Best <em>White Button-Down</em>',
    sub: 'White hides nothing — which is exactly why it’s worth choosing well.',
    points: ['Poplin vs. oxford vs. twill, decoded', 'The opacity test that saves a return', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-quiz.png',
    kicker: 'Free AI Style Quiz',
    headline: 'Build a Wardrobe That <em>Works</em>',
    sub: 'A capsule built for your shape, your colors, and your real life.',
    points: ['Personalized to your body & aesthetic', 'Shoppable at every budget', 'Takes about five minutes'],
    foot: 'Take the quiz · <strong>easeandaura.com</strong>',
  },

  // ── Batch 2 (2026-07-16): fresh angles on existing guides. Pinterest ranks each
  // image separately even when two pins share a destination — so every headline
  // below is a different search, not a restatement of the guide's title.
  {
    file: 'pin-sweater-pilling.png',
    kicker: 'Knitwear Guide',
    headline: 'Why Your Sweater <em>Pills</em>',
    sub: 'Pilling isn’t wear and tear — it’s a fiber choice made before you bought it.',
    points: ['Short fibers pill, long fibers don’t', 'What the gauge actually tells you', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-cashmere-merino.png',
    kicker: 'Knitwear Guide',
    headline: '<em>Cashmere</em> or Merino?',
    sub: 'One is softer. The other survives. Neither is the obvious answer.',
    points: ['Where cashmere is worth the money', 'Where merino quietly wins', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-cream-tone.png',
    kicker: 'Color Guide',
    headline: 'The Right <em>Cream</em> for You',
    sub: 'Cream runs warm to cool — and the wrong one washes you out.',
    points: ['Read your undertone in 30 seconds', 'Ivory vs. oat vs. bone', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-tee-sheer.png',
    kicker: 'Wardrobe Essentials',
    headline: 'Why Your Tee Is <em>See-Through</em>',
    sub: 'Most white tees fail the same way — and it’s visible before you buy.',
    points: ['The window test that saves a return', 'Why “100% cotton” isn’t enough', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-tee-wash.png',
    kicker: 'Wardrobe Essentials',
    headline: 'The Tee That <em>Survives</em>',
    sub: 'Shapeless after three washes is a fabric problem, not a laundry one.',
    points: ['Why fabric weight predicts lifespan', 'The neckline that goes first', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-jeans-rise.png',
    kicker: 'Denim Guide',
    headline: 'The <em>Rise</em> Changes Everything',
    sub: 'The one measurement that decides whether a pair of jeans works on you.',
    points: ['How rise rewrites your proportions', 'The one that flatters most people', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-jeans-stretch.png',
    kicker: 'Denim Guide',
    headline: 'Why <em>Stretch</em> Ruins Jeans',
    sub: 'Comfortable in the fitting room, bagged out at the knee by March.',
    points: ['What elastane does over time', 'The rigidity worth getting used to', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-coat-wool.png',
    kicker: 'Investment Piece',
    headline: 'Is That Coat <em>Actually</em> Wool?',
    sub: 'The same silhouette exists at $90 and at $1,900. One line tells you which.',
    points: ['Under 50% wool — walk away', 'Why blends collapse out of shape', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-coat-length.png',
    kicker: 'Investment Piece',
    headline: 'Camel Coat: <em>Long or Short?</em>',
    sub: 'One is the coat people remember. The other cuts you in half at the hip.',
    points: ['Why length matters more than cut', 'Which camel shade flatters you', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-shirt-weave.png',
    kicker: 'Wardrobe Staple',
    headline: '<em>Poplin</em> vs. Oxford vs. Twill',
    sub: 'The weave decides what shirt you are actually buying.',
    points: ['Which one goes sheer in white', 'Which one you can live in', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-shirt-gape.png',
    kicker: 'Wardrobe Staple',
    headline: 'Why Your Shirt <em>Gapes</em>',
    sub: 'It’s a pattern problem, not a size problem — so sizing up won’t fix it.',
    points: ['Three fixes that actually work', 'The stretch trade-off, honestly', 'What to buy at three budgets'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-quiz-whats-in.png',
    kicker: 'Free Style Quiz',
    headline: 'What’s In <em>Your</em> Capsule?',
    sub: 'Ten pieces, thirty outfits — chosen for your shape and your real life.',
    points: ['Personalized to your body & aesthetic', 'Shoppable at every budget', 'Takes about five minutes'],
    foot: 'Take the quiz · <strong>easeandaura.com</strong>',
  },

  // ── Batch 3 (2026-07-22): pins for the two new pillar guides — the evergreen
  // checklist hub and the seasonal fall capsule. Head-keyword search intent
  // ("capsule wardrobe checklist", "fall capsule wardrobe"), high pin volume.
  {
    file: 'pin-checklist.png',
    kicker: 'The Complete Checklist',
    headline: 'The Capsule Wardrobe <em>Checklist</em>',
    sub: 'Twelve pieces that recombine into a month of outfits.',
    points: ['The 12 essentials, chosen well', 'How to judge quality on each', 'What to buy at every budget'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-12-essentials.png',
    kicker: 'Capsule Wardrobe',
    headline: '12 Pieces, <em>30 Outfits</em>',
    sub: 'The whole trick is a shared palette — then everything matches.',
    points: ['The neutrals that recombine', 'Why fewer pieces means more outfits', 'The one rule that makes it work'],
    foot: 'Free checklist · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-capsule-palette.png',
    kicker: 'Style Foundations',
    headline: 'Pick a <em>Palette</em>, Not Pieces',
    sub: 'Two or three neutrals plus one color you love — that’s the whole method.',
    points: ['Why a palette makes everything match', 'The neutrals that never date', 'Build a month of outfits from 12 pieces'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-fall-capsule.png',
    kicker: 'Seasonal Capsule',
    headline: 'The <em>Fall</em> Capsule Wardrobe',
    sub: 'Ten pieces in warm neutrals — a month of autumn outfits.',
    points: ['The coat, knits & denim that carry fall', 'How to judge each piece', 'What to buy at every budget'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-fall-10-pieces.png',
    kicker: 'Fall Wardrobe',
    headline: '<em>10 Pieces</em> for Fall',
    sub: 'Camel, cream & chocolate — everything layers with everything else.',
    points: ['The warm-neutral fall palette', 'Ten pieces, five easy outfits', 'Nothing that fights anything else'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
  {
    file: 'pin-fall-outfits.png',
    kicker: 'Autumn Outfits',
    headline: '5 <em>Fall Outfits</em>, One Rail',
    sub: 'Straight off a ten-piece capsule — before you even start swapping.',
    points: ['The weekday, the weekend, the easy one', 'Every piece in a shared palette', 'Add boots and the coat — done'],
    foot: 'Free guide · <strong>easeandaura.com</strong>',
  },
];

// Pass filenames as args to re-render only those pins; no args renders all.
const only = process.argv.slice(2);
const queue = only.length ? pins.filter(p => only.includes(p.file)) : pins;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1000, height: 1500 }, deviceScaleFactor: 2 });

for (const p of queue) {
  const pts = p.points.map(t => `<li>${t}</li>`).join('');
  const html = template
    .replace('__KICKER__', p.kicker)
    .replace('__HEADLINE__', p.headline)
    .replace('__SUB__', p.sub)
    .replace('__POINTS__', pts)
    .replace('__FOOT__', p.foot);
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const out = join(__dir, p.file);
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1000, height: 1500 } });
  console.log('rendered', p.file);
}

await browser.close();
console.log('done');
