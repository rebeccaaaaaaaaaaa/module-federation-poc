import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  /* eslint-disable no-undef */
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const isProd = mode === "production";

  const remotes = {
    header_app: {
      external: isProd ? env.VITE_HEADER_APP_URL : env.VITE_HEADER_APP_URL_DEV,
      format: "esm",
    },
    login_app: {
      external: isProd ? env.VITE_LOGIN_APP_URL : env.VITE_LOGIN_APP_URL_DEV,
      format: "esm",
    },
    home_app: {
      external: isProd ? env.VITE_HOME_APP_URL : env.VITE_HOME_APP_URL_DEV,
      format: "esm",
    },
  };

  return {
    resolve: {
      alias: {
        "@mantine/core": path.resolve(__dirname, "node_modules/@mantine/core"),
        "@mantine/hooks": path.resolve(
          __dirname,
          "node_modules/@mantine/hooks"
        ),
      },
    },
    build: {
      target: "esnext",
    },
    server: {
      port: 4173,
      strictPort: true,
      open: true,
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    },
    plugins: [
      react(),
      federation({
        remotes,
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          "@mantine/core": {
            singleton: true,
            requiredVersion: false,
            includeSecondaries: true,
          },
          "@mantine/hooks": {
            singleton: true,
            requiredVersion: false,
          },
        },
      }),
    ],
  };
});
