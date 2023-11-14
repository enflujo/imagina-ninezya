import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './estaticos',
  compressHTML: true,
  outDir: './publico',
  site: 'https://imagina.uniandes.edu.co',
  base: '/especiales/siya',
  build: {
    assets: 'estaticos',
  },
});
