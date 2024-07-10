import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`, // Importa Bootstrap SCSS
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), // Alias per Bootstrap
    },
  },
  build: {
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: true,
  },
});
