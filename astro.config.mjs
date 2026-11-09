import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Після деплою заміни на свій домен Vercel (потрібно для абсолютних OG-посилань)
export default defineConfig({
  site: 'https://english-with-mark.vercel.app',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
