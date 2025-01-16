import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Content/Landing/Landing'
import App from './App'
import Presupuesto from './Content/Presupuesto/Presupuesto'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/Landing' element={<Landing />}/>
        <Route path='/Home' element={<Landing />}/>
        <Route path='/Presupuesto' element={<Presupuesto />}/>
        <Route path='/Pruebas' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </>,
)
