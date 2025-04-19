import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const headerAppUrl = env.VITE_ENTRY_HEADER_APP_URL;
  const loginAppUrl = env.VITE_ENTRY_LOGIN_APP_URL;

  if (!headerAppUrl) {
    throw new Error('VITE_ENTRY_HEADER_APP_URL não está definido');
  }

  return {
    build: {
      target: 'esnext',
    },
    plugins: [
      react(),
      federation({
        name: 'root_app',
        remotes: {
          header_app: headerAppUrl,
          login_app: loginAppUrl,
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
  };
});
