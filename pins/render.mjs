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
