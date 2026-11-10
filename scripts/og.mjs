// Генерує public/og.png (UA) і public/og-en.png (EN), 1200×630, з SVG. Запуск: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const variants = [
  { file: 'og.png', tagline: 'Розмовна англійська · A2 → B2 · Telegram' },
  { file: 'og-en.png', tagline: 'Conversational English · A2 → B2 · Telegram' },
];

const render = (tagline) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f6f1e9"/>
  <circle cx="1020" cy="120" r="260" fill="#f4c34a" opacity=".55"/>
  <circle cx="1080" cy="560" r="150" fill="none" stroke="#e2552c" stroke-width="36" opacity=".25"/>

  <text x="80" y="110" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="700" fill="#1f1a17">Mark<tspan fill="#e2552c">.</tspan></text>

  <text font-family="Georgia, 'Times New Roman', serif" font-weight="700" fill="#1f1a17">
    <tspan x="80" y="270" font-size="96">English</tspan>
    <tspan x="80" y="380" font-size="96" font-style="italic" fill="#e2552c">with Mark</tspan>
  </text>
  <path d="M84 410 C 250 392, 420 388, 560 400" fill="none" stroke="#f4c34a" stroke-width="14" stroke-linecap="round"/>

  <text x="80" y="478" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#6b6159">${tagline}</text>

  <rect x="80" y="520" width="420" height="64" rx="32" fill="#e2552c"/>
  <text x="290" y="562" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#ffffff">@mark_english_demo_bot</text>

  <g transform="translate(860 210) rotate(-6)">
    <rect width="250" height="76" rx="22" fill="#1f1a17"/>
    <text x="125" y="49" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="30" fill="#f6f1e9">How's it going?</text>
  </g>
  <g transform="translate(800 340) rotate(4)">
    <rect width="230" height="76" rx="22" fill="#b9cfe0"/>
    <text x="115" y="49" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="30" fill="#1f1a17">Fair enough!</text>
  </g>
</svg>`;

for (const { file, tagline } of variants) {
  const out = fileURLToPath(new URL(`../public/${file}`, import.meta.url));
  await sharp(Buffer.from(render(tagline))).png({ compressionLevel: 9 }).toFile(out);
  console.log('OG image written to', out);
}
