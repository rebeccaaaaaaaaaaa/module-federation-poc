import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  build: {
    target: 'esnext', // 👈 isso aqui é essencial
  },
  server: {
    port: 4173,
    strictPort: true, // 👈 força o Vite a usar exatamente essa porta, senão dá erro
    open: true,
  },
  
  plugins: [
    react(),
    federation({
      remotes: {
        header_app: 'http://localhost:4174/assets/remoteEntry.js',
        login_app: 'http://localhost:4175/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
