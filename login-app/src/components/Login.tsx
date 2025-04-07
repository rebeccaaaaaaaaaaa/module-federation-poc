import { Box, Title, TextInput, Button, Paper } from '@mantine/core'

function Login() {
  return (
    <Box maw={300} mx="auto" mt="xl">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={3} mb="md">Login</Title>
        <TextInput label="Email" placeholder="seu@email.com" mb="sm" />
        <TextInput label="Senha" placeholder="••••••••" type="password" mb="md" />
        <Button fullWidth>Entrar</Button>
      </Paper>
    </Box>
  )
}

export default Login
