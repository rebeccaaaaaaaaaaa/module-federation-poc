import React, { Suspense } from "react";
import '@mantine/core/styles.css';

const Login = React.lazy(() => import("login_app/Login"));

function App() {
  return (
     <Suspense fallback={<div>Carregando Login...</div>}>
        <Login />
      </Suspense>
  );
}

export default App;
