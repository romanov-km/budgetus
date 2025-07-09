import { api } from "./api";
const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data: {
    username: string;
    password: string;
  }) => {
    return api("/auth/jwt/login", {
      method: "POST",
      body: new URLSearchParams({
        username: data.username,
        password: data.password,
      }).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  };

  export const getMe = async (token: string) => {
    const res = await fetch(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) throw new Error("Не удалось получить пользователя");
  
    return res.json();
  };
  