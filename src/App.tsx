import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiKitPage from "./pages/UiKitPage";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen/RegisterScreen";
import InstallPrompt from "./components/InstallPrompt/InstallPrompt";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CategoryScreen from "./pages/CategoryScreen/CategoryScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import StatisticScreen from "./pages/StatisticScreen/StatisticScreen";
import NotificationsScreen from "./pages/NotificationsScreen/NotificationsScreen";
import OperationsScreen from "./pages/OperationScreen/OperationScreen";
import { TransactionProvider } from "./context/TransactionContext";
import GoalAndLimitScreen from "./pages/GoalAndLimitsScreen/GoalAndLimitScreen";
import { CategoryProvider } from "./context/CategoryContext";
import { Analytics} from "@vercel/analytics/react"

function App() {
  return (
    <AuthProvider>
      <Analytics />
      <CategoryProvider>
      <TransactionProvider>
        <BrowserRouter>
          <InstallPrompt />
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/uikit" element={<UiKitPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/category" element={<CategoryScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/statistic" element={<StatisticScreen />} />
              <Route path="/notification" element={<NotificationsScreen />} />
              <Route path="/operations" element={<OperationsScreen />} />
              <Route path="/goalandlimit" element={<GoalAndLimitScreen /> } />
            </Route>
            <Route path="*" element={<LoginScreen />} />
          </Routes>
          </BrowserRouter>
        </TransactionProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default App;
