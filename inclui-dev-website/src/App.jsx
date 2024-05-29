import './style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'
import LoginPage from './pages/LoginPage'
import RecuperacaoPage from './pages/RecuperacaoPage'
import CadastroPage from './pages/CadastroPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/catalogo" element={<CatalogoPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/cadastro" element={<CadastroPage/>}></Route>
        <Route path="/recuperacao" element={<RecuperacaoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}