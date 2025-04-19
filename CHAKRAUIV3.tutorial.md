
# 🧠 Guia de Configuração do Chakra UI v3 com Vite + ReactJS + Module Federation

> ✅ Compatível com o Chakra UI v3.16+  
> 🔧 Vite, React 18/19, Module Federation (`@originjs/vite-plugin-federation` ou `@module-federation/vite`)

---

## 📦 Instalação dos Pacotes

Execute no terminal:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

---

## 🧱 Estrutura Básica de Projeto

```
root-app/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ theme.ts
├─ vite.config.ts
└─ package.json
```

---

## 🎨 Configurando o Tema com Chakra UI v3

### 1. Criando o tema

```ts
// src/theme.ts
import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#1a365d' },
          600: { value: '#153e75' },
          700: { value: '#2a69ac' },
        },
      },
    },
  },
});
```

---

### 2. Configurando o `ChakraProvider`

```tsx
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { system } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
```

---

## 🤝 Configurando o Module Federation com Chakra

### Exemplo usando `@originjs/vite-plugin-federation`

```ts
// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: { target: 'esnext' },
    plugins: [
      react(),
      federation({
        name: 'root_app',
        remotes: {
          header_app: env.VITE_ENTRY_HEADER_APP_URL,
        },
        shared: [
          'react',
          'react-dom',
          '@chakra-ui/react',
          '@emotion/react',
          '@emotion/styled',
          'framer-motion'
        ],
      }),
    ],
  };
});
```

> **Nota**: Se estiver usando `@module-federation/vite`, a sintaxe de `shared` é diferente. Consulte a [documentação oficial](https://github.com/module-federation/universe) para detalhes.

---

## 🧪 Testando se o Chakra está funcionando

```tsx
// src/App.tsx
import { Box, Heading, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box p={4}>
      <Heading color="brand.700">Chakra UI v3 + Vite + MF</Heading>
      <Button colorScheme="brand" mt={4}>
        Clique aqui
      </Button>
    </Box>
  );
}

export default App;
```

---

## ✅ Resultado Esperado

Você verá um botão estilizado com as cores do tema personalizado, e tudo integrado com `Module Federation`.
