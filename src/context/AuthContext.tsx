import { createContext, useContext, useState,  } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  const login = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
