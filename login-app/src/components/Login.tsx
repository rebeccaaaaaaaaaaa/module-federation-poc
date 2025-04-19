import { Input, Box, Button } from "@chakra-ui/react";

const Login = () => {
  return(
    <Box>
      <Input placeholder="Username" size="md" mb={4} />
      <Input placeholder="Password" size="md" type="password" mb={4} />
      <Button colorScheme="blue" size="md">Login</Button>
    </Box>
  )
}

export default Login;