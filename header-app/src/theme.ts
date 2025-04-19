// theme.ts
import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#1a365d' },
          600: { value: '#153e75' },
          700: { value: '#2a69ac' },
        },
      },
    },
  },
});
