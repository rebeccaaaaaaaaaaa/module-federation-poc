import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const headerAppUrl = env.VITE_ENTRY_HEADER_APP_URL;
  const loginAppUrl = env.VITE_ENTRY_LOGIN_APP_URL;
  const heroAppUrl = env.VITE_ENTRY_HERO_APP_URL;
  const aboutAppUrl = env.VITE_ENTRY_ABOUT_APP_URL;

  return {
    build: {
      target: 'esnext',
    },
    plugins: [
      react(),
      federation({
        name: 'root_app',
        exposes: {
          './AuthProvider': './src/contexts/AuthContext.tsx',
        },
        remotes: {
          header_app: headerAppUrl,
          login_app: loginAppUrl,
          hero_app: heroAppUrl,
          about_app: aboutAppUrl,
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
          },
          'zustand': {
            version: '4.2.0'
          },
        }
      }),
    ],
  };
});
