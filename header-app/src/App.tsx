import  Header from "./components/Header";
import { ChakraProvider } from '@chakra-ui/react'
import { system } from './theme';
function App() {
  return (
    <ChakraProvider value={system}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
