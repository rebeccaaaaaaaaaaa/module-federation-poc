import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 4174,
    open: true,
  },
  plugins: [
    react(),
    federation({
      name: 'header_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  dev: true
});
