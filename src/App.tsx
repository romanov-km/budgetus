import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UiKitPage from './pages/UiKitPage'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import RegisterScreen from './pages/RegisterScreen/RegisterScreen'
import InstallPrompt from './components/InstallPrompt/InstallPrompt'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {

  return (
  <AuthProvider>
   <BrowserRouter>
    <InstallPrompt />
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/uikit' element={<UiKitPage />} />
      <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
      <Route path='/grid' element={<HomeScreen />} />
      <Route path='/stats' element={<HomeScreen />} />
      <Route path='/login' element={<HomeScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path="*" element={<LoginScreen />} />
    </Routes>
   </BrowserRouter>
   </AuthProvider>
  )
}

export default App
