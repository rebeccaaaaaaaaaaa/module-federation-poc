import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 4175,
    open: true,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'login_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/components/Login.tsx',
      },
      shared: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
});
