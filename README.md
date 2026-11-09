# English with Mark — demo landing

Демо-лендинг вигаданого курсу розмовної англійської. Astro 5 + Tailwind CSS 4, статичний сайт, дві мови (UA за замовчуванням `/`, EN — `/en/`).

## Команди

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # збірка в dist/
npm run preview   # перегляд зібраної версії
npm run og        # перегенерувати public/og.png
```

## Де що міняти

- Тексти, ціни, FAQ, посилання на бота і контакт розробника: `src/i18n/ua.ts` і `src/i18n/en.ts`
- Кольори та шрифти: `src/styles/global.css` (блок `@theme`)
- Домен для canonical/OG: `site` у `astro.config.mjs`

## Деплой на Vercel

1. Запушити репозиторій на GitHub.
2. vercel.com → Add New → Project → імпортувати репозиторій. Vercel сам визначить Astro (Build: `npm run build`, Output: `dist`).
3. Після першого деплою вписати свій домен у `site` в `astro.config.mjs` і запушити ще раз.

Або без GitHub: `npx vercel` (preview) і `npx vercel --prod`.
