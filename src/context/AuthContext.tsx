import { createContext, useContext, useState,  } from "react";
import type { ReactNode } from "react";
import { mockUsers } from "../mock/mockData";

type User = {
  username: string;
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  isAuth: boolean;
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (data: { username: string; email: string; password: string }) => boolean;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  user: null,
  login: () => false,
  logout: () => {},
  register: () => false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const getStoredUsers = (): User[] => {
    const stored = localStorage.getItem("users");
    const localUsers: User[] = stored ? JSON.parse(stored) : [];
    return [...mockUsers, ...localUsers];
  };

  const login = (username: string, password: string): boolean => {
    const users = getStoredUsers();
    const foundUser = users.find(
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

  const register = ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }): boolean => {
    const users = getStoredUsers();
  
    const exists = users.some(
      (user) => user.username === username || user.email === email
    );
  
    if (exists) return false;
  
    const newUser: User = {
      username,
      name: username, // можно заменить потом
      email,
      password,
    };
  
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  
    setIsAuth(true);
    setUser(newUser);
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify(newUser));
  
    return true;
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
