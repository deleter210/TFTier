import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {

      dashboard: path.resolve(__dirname, 'public/dashboard.html'),

      config: path.resolve(__dirname, "public/config.html"),
        overlay: path.resolve(__dirname, 'public/overlay.html'),
        summary: path.resolve(__dirname, 'public/summary.html'),
        background: path.resolve(__dirname, 'public/background.html')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
