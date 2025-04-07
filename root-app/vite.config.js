import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@mantine/core': path.resolve(__dirname, 'node_modules/@mantine/core'),
      '@mantine/hooks': path.resolve(__dirname, 'node_modules/@mantine/hooks'),
    },
  },
  build: {
    target: 'esnext',
  },
  server: {
    port: 4173,
    strictPort: true,
    open: true,
  },
  plugins: [
    react(),
    federation({
      remotes: {
        remotes: {
          header_app: `${import.meta.env.VITE_HEADER_APP_URL}/assets/remoteEntry.js`,
          login_app: `${import.meta.env.VITE_LOGIN_APP_URL}/assets/remoteEntry.js`,
          home_app: `${import.meta.env.VITE_HOME_APP_URL}/assets/remoteEntry.js`,
        }
        
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@mantine/core': {
          singleton: true,
          requiredVersion: false,
          includeSecondaries: true,
        },
        '@mantine/hooks': {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),
  ],
});
