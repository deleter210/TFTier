// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        overlay: 'public/overlay.html',
        summary: 'public/summary.html',
        auth: 'public/auth.html',
        background: 'public/background.html'
      }
    }
  },
  server: {
    port: 3000
  }
});
