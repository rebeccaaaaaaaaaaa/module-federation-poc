// src/pages/LoginPage.tsx

import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Space,
} from '@mantine/core';

interface LoginPageProps {
  login: () => void;
}

export default function Login({ login }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      login();
    } else {
      alert('Preencha o e-mail e a senha.');
    }
  };

  return (
    <Container size={420} my={40}>
      <Title>Bem-vindo de volta</Title>
      <Space h="md" />

      <Paper withBorder shadow="md" p={30} radius="md">
        <TextInput
          label="E-mail"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Senha"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mt="md"
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Entrar
        </Button>
      </Paper>
    </Container>
  );
};
