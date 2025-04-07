import React, { Suspense } from 'react';
import { MantineProvider } from '@mantine/core'

const Header = React.lazy(() => import('header_app/Header'));
const Login = React.lazy(() => import('login_app/Login'));

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Suspense fallback={<div>Carregando Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <p>Conteúdo principal da aplicação Root</p>
      </main>
      <Suspense fallback={<div>Carregando Login...</div>}>
        <Login />
      </Suspense>
    </MantineProvider>
  );
}

export default App;
