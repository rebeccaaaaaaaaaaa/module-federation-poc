import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 4176,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
  },
  plugins: [
    react(),
    federation({
      name: 'hero_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Hero': './src/components/Hero/index.tsx',
      },    
      shared: {
        react: {
          version: '18.2.0'
        },
        'react-dom': {
          version: '18.2.0'
        },
        '@chakra-ui/react': {
          version: '2.8.1'
        },
        '@emotion/react': {
          version: '11.11.1'
        },
        '@emotion/styled': {
          version: '11.11.0'
        },
        'framer-motion': {
          version: '10.16.3'
        }
      }
    }),
  ],
});