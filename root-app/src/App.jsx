import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header_app/Header'));
const Login = React.lazy(() => import('login_app/Login'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Carregando Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <p>Conteúdo principal da aplicação Root</p>
      </main>
      <Suspense fallback={<div>Carregando Header...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}

export default App;
