import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "root_app/AuthProvider";

const Login = () => {
  const { handleLogin } = useAuth(); // Usa o contexto de autenticação

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
        >
          <Stack>
            <div id="email">
              <label>Email address</label>
              <Input type="email" />
            </div>
            <div id="password">
              <label>Password</label>
              <Input type="password" />
            </div>
            <Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
