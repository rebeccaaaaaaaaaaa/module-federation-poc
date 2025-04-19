// login-app/src/Login.tsx

import { Button } from '@chakra-ui/react';
import { useAuth } from 'root_app/AuthProvider';

const Login = () => {
  const { handleLogin } = useAuth(); // Usa o contexto de autenticação

  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
