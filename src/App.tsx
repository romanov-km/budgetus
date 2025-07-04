import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UiKitPage from './pages/UiKitPage'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import RegisterScreen from './pages/RegisterScreen/RegisterScreen'
import InstallPrompt from './components/InstallPrompt/InstallPrompt'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import CategoryScreen from './pages/CategoryScreen/CategoryScreen'
import ProfileScreen from './pages/ProfileScreen/ProfileScreen'

function App() {

  return (
  <AuthProvider>
   <BrowserRouter>
    <InstallPrompt />
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/uikit' element={<UiKitPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      
      <Route path="*" element={<LoginScreen />} />
    </Routes>
   </BrowserRouter>
   </AuthProvider>
  )
}

export default App
