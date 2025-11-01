import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: '/html-css-proje/',  // ← Repository adını buraya yaz
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html'  // ← BU ÇOK ÖNEMLİ!
      }
    }
  },
  plugins: [
    injectHTML(), 
    FullReload(['./src/**/**.html'])
  ],
});