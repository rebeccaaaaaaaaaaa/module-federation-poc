import React, { Suspense } from "react";
import { MantineProvider, TextInput } from "@mantine/core";
import '@mantine/core/styles.css';

const Login = React.lazy(() => import("login_app/Login"));

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Suspense fallback={<div>Carregando Login...</div>}>
        <Login />
      </Suspense>
    </MantineProvider>
  );
}

export default App;
