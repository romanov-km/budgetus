import { createContext, useContext, useEffect, useState } from "react";
import { getMe, loginUser } from "../utils/auth";

interface User {
  username: string;
  email: string;
  id: number;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuth: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  isAuth: false,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);
  const isAuth = !!token;

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await loginUser({ username:email, password });
      setToken(response.access_token);
      localStorage.setItem("token", response.access_token);
      const userData = await getMe(response.access_token);
      setUser(userData);
      return true;
    } catch (err) {
      console.error("Ошибка входа:", err);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const initialize = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          setToken(storedToken);
          const userData = await getMe(storedToken);
          setUser(userData);
        } catch (err) {
          console.error("Автологин не удался", err);
          logout(); // если токен недействителен — выходим
        }
      }
    };
  
    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
