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
        overlay: path.resolve(__dirname, 'src/windows/overlay.html'),
        summary: path.resolve(__dirname, 'src/windows/summary.html'),
        background: path.resolve(__dirname, 'src/windows/background.html')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
        manualChunks: undefined // 👈 Ensures flat output
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
