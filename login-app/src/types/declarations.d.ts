declare module 'root_app/AuthProvider' {
    export const AuthProvider: ({ children }: { children: React.ReactNode }) => JSX.Element;
    export const useAuth: () => {
      isAuthenticated: boolean;
      login: () => void;
      logout: () => void;
      handleLogin: () => void;
    };
  }
  