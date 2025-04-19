declare module "header_app/Header" {
  import { ComponentType } from "react";
  const Header: ComponentType<unknown>;
  export default Header;
}

declare module "about_app/About" {
  import { ComponentType } from "react";
  const About: ComponentType<unknown>;
  export default About;
}

declare module "login_app/Login" {
  import { ComponentType } from "react";
  const Login: ComponentType<unknown>;
  export default Login;
}

declare module "root_app/AuthContext" {
  import { ComponentType } from "react";

  // Exporte o que você está consumindo do 'root-app'
  export const useAuth: () => {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  };

  export const AuthProvider: ComponentType<unknown>;
}
