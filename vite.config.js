import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: '/html-css-proje/',  // ← Repository adını değiştir!
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    injectHTML(), 
    FullReload(['./src/**/**.html'])
  ],
});