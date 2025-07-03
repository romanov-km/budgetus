import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
