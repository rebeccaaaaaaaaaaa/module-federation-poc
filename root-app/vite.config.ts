import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const headerAppUrl = env.VITE_ENTRY_HEADER_APP_URL;

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
        },
        shared: ['react', 'react-dom'],
      }),
    ],
  };
});
