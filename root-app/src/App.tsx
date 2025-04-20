import { Box } from "@chakra-ui/react";
import Header from "header_app/Header";
import Hero from "hero_app/Hero";
export default function App() {
  if (!Header) return <div>Header não carregado</div>;
  if (!Hero) return <div>Hero não carregado</div>;

  return (
    <div>
     <Header />
     <Box>
        <Hero />
      </Box>
      <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
        <h1>Root App</h1>
        <p>Bem-vindo ao Root App!</p>
     </Box>
    </div>
  );
}
