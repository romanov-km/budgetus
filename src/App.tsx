import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UiKitPage from './pages/UiKitPage'
import Grid from './pages/grid'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import RegisterScreen from './pages/RegisterScreen/RegisterScreen'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/uikit' element={<UiKitPage />} />
      <Route path='/grid' element={<Grid />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
