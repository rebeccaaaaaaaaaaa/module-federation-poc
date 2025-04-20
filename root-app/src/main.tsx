// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);
