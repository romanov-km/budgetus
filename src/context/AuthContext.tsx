import { createContext, useContext, useState,  } from "react";
import type { ReactNode } from "react";
import { mockUsers } from "../mock/mockData";

type User = {
  username: string;
  name: string;
  email: string;
};

type AuthContextType = {
  isAuth: boolean;
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  user: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username: string, password: string): boolean => {
    const foundUser = mockUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setIsAuth(true);
      setUser(foundUser);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
