import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UiKitPage from './pages/UiKitPage'
import Grid from './pages/grid'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/uikit' element={<UiKitPage />} />
      <Route path='/grid' element={<UiKitPage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
