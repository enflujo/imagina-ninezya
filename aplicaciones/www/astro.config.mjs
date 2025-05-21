import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  publicDir: './estaticos',
  compressHTML: true,
  outDir: './publico',
  site: 'https://enflujo.github.io',
  base: '/imagina-ninezya/especiales/siya',
  integrations: [sitemap(), robotsTxt()],
  build: {
    assets: 'estaticos',
  },
  vite: {
    ssr: { noExternal: ['@enflujo/alquimia'] },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
