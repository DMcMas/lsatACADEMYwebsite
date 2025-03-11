import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dist/', // Ensures assets are correctly linked to /dist/
  build: {
    outDir: 'dist', // Output files inside dist/
    assetsDir: 'assets', // Keep assets inside dist/assets/
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js', // Keeps JS in assets folder
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
