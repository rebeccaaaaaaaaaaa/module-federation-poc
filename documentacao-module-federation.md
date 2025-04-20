
# 🧩 Documentação de Erros e Soluções — Module Federation com Vite

## 📁 Estrutura geral do projeto

- **root_app**: Aplicação que consome o componente remoto.
- **header_app**: Aplicação que expõe o componente `Header`.

---

## ✅ 1. Erro: "Não é possível localizar o módulo 'header_app/Header' ou suas declarações de tipo correspondentes"

### 🔍 Causa:
O TypeScript não reconhece o módulo federado como parte do projeto local.

### ✅ Solução:
Criar um arquivo de declaração de tipos para informar o TypeScript sobre o módulo remoto:

#### `src/types/remote-modules.d.ts`
```ts
declare module 'header_app/Header' {
  import { ComponentType } from 'react';
  const Header: ComponentType<any>;
  export default Header;
}
```

### 🛠️ Extra:
Certifique-se de que o `tsconfig.json` reconhece o diretório de tipos:
```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

---

## ❌ 2. Erro: Uncaught TypeError: Cannot convert object to primitive value

### 🔍 Causa:
O componente remoto `Header` foi importado, mas o valor retornado não era um React component válido.

### ✅ Solução:
Verifique o `Header` exportado no `header_app`:

#### `header_app/src/components/Header/index.tsx`
```tsx
const Header = () => {
  return <header>Header federado funcionando 🎉</header>;
};
export default Header;
```

E a configuração no `vite.config.ts`:
```ts
exposes: {
  './Header': './src/components/Header',
}
```

No `root_app`, o import deve ser:
```ts
import Header from 'header_app/Header';
```

---

## ⚠️ 3. Erro: remoteEntry.js não encontrado / carregamento quebrado

### 🔍 Causa:
Portas invertidas ou arquivos ausentes ao configurar as aplicações.

### ✅ Soluções:
- Certifique-se de que o `header_app` está rodando na porta correta (4173), e que o `remoteEntry.js` está acessível.
- Verifique no navegador: http://localhost:4173/assets/remoteEntry.js
- A configuração correta no `root_app`:
```ts
remotes: {
  header_app: 'http://localhost:4173/assets/remoteEntry.js',
},
```

---

## ✅ Exemplo completo das configurações Vite

### `header_app/vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: { port: 4173 },
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
        './Header': './src/components/Header',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
```

### `root_app/vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      name: 'root_app',
      remotes: {
        header_app: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
```

---

## 🧪 Teste recomendado ao importar o componente:
```tsx
import Header from 'header_app/Header';

export default function App() {
  console.log('Header remoto:', Header);

  if (!Header) return <div>Header não carregado</div>;

  return (
    <div>
      <Header />
    </div>
  );
}
```

---

## 📌 Conclusão

Esses erros são comuns ao configurar Module Federation com Vite, especialmente com TypeScript. A chave é:

- Expor corretamente os módulos;
- Usar `export default` nos componentes remotos;
- Informar o TypeScript sobre os módulos com `declare module`;
- Garantir o correto apontamento do `remoteEntry.js`.
