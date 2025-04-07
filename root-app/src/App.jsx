import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header_app/Header'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Carregando Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <p>Conteúdo principal da aplicação Root</p>
      </main>
    </div>
  );
}

export default App;
