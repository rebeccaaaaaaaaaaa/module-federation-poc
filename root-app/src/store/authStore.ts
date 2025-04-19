import { create } from 'zustand'; // Importação nomeada

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  handleLogin: () => void; // Adicionando handleLogin aqui
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
  handleLogin: () => {
    set({ isAuthenticated: true });
  },
}));
