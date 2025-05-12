import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4175,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  },
  plugins: [
    react(),
    federation({
      name: "login_app",
      filename: "remoteEntry.js",
      remotes: {
        root_app: 'http://localhost:5000/assets/remoteEntry.js',
      },
      exposes: {
        "./Login": "./src/components/Login",
      },
      shared: {
        react: {
          version: "18.2.0",
        },
        "react-dom": {
          version: "18.2.0",
        },
        "@chakra-ui/react": {
          version: "2.8.1",
        },
        "@emotion/react": {
          version: "11.11.1",
        },
        "@emotion/styled": {
          version: "11.11.0",
        },
        "framer-motion": {
          version: "10.16.3",
        },
        zustand: {
          version: "4.2.0",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
