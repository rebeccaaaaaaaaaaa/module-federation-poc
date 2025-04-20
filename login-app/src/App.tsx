import { ChakraProvider} from '@chakra-ui/react';
import { system } from './theme';
import Login from './components/Login';

function App() {
  return (
    <ChakraProvider value={system}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
