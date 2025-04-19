import { createContext, useContext, ReactNode } from 'react';
import { useAuthStore } from '../store/authStore';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  handleLogin: () => void; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isAuthenticated, login, logout } = useAuthStore();

  function handleLogin() {
    login(); // Chama a função de login do Zustand
    console.log('Login realizado com sucesso - função vinda do authContext do root!');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
