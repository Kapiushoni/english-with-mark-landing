import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Продакшн-домен Vercel (потрібен для абсолютних canonical/OG/hreflang-посилань)
export default defineConfig({
  site: 'https://english-with-mark-landing.vercel.app',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
