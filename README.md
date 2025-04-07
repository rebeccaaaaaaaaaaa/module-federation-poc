# Como rodar localmente

- O app root podemos rodasr com o npm run dev, porém os outros apps só funcionam depois do build, então temos que rodar o npm run build e depois o npm run preview.

# 📘 Guia Completo: Micro Frontends com Vite + Module Federation (root-app + header-app)

- 🧱 Estrutura do Projeto

mf-app/
├── root-app/      # Container principal
└── header-app/    # Microfrontend remoto (Header)

# 1️⃣ Criar os projetos com Vite

Crie as duas aplicações com Vite + React + TypeScript:

npm create vite@latest root-app -- --template react-ts
npm create vite@latest header-app -- --template react-ts

# 2️⃣ Instalar as dependências

Navegue em cada projeto (root-app e header-app) e instale o plugin de Module Federation:

npm install @originjs/vite-plugin-federation

⚠️ Importante: esse comando deve ser executado dentro de cada app.

# 3️⃣ Configurar o vite.config.ts do header-app

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5174, // Porta fixa para evitar conflitos
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
      name: 'header_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.tsx',
      },
      shared: ['react', 'react-dom'],
      dev: true,
    }),
  ],
});

# 4️⃣ Criar o componente Header

Crie o arquivo src/components/Header.tsx no header-app:

tsx

export function Header() {
  return <h1>Sou o Header remoto!</h1>;
}

# 5️⃣ Configurar o vite.config.ts do root-app

ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5173, // Porta fixa para o container
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'root_app',
      remotes: {
        header_app: 'http://localhost:5174/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});

# 6️⃣ Usar o Header remoto no root-app
No main.tsx, importe o Header com await import:

tsx

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const RemoteHeader = React.lazy(() => import('header_app/Header'));

const App = () => (
  <Suspense fallback={<div>Carregando header...</div>}>
    <RemoteHeader />
  </Suspense>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
7️⃣ Corrigir erros comuns
❌ Erro: Top-level await is not available...
Solução: no vite.config.ts do root-app, adicione:

ts

build: {
  target: 'esnext',
}
E no tsconfig.json:

json

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext"
  }
}

# 8️⃣ Rodar as aplicações
Em dois terminais separados:

bash
Copiar
Editar

# Terminal 1 - header-app
cd header-app
npm run dev

# Terminal 2 - root-app
cd root-app
npm run dev

Acesse:
➡️ http://localhost:5173
Você verá o conteúdo do root com o Header remoto carregado!

🧪 Verificações
Verifique se http://localhost:5174/assets/remoteEntry.js está acessível no navegador.

Se aparecer "carregando header..." e nada mais, pode ser erro de build ou o remoteEntry.js está inacessível.

# ✅ Conclusão
Agora você tem:

Uma aplicação root-app que consome um microfrontend remoto via Module Federation.

Um microfrontend header-app exposto via remoteEntry.js.

Ambiente de desenvolvimento com portas fixas.

Correções de build e compatibilidade com top-level await.