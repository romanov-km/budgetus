import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UiKitPage from './pages/UiKitPage'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/uikit' element={<UiKitPage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
