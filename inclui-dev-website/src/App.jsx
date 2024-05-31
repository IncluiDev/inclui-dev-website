import './style.css'
import './acessibilidade.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'
import LoginPage from './pages/LoginPage'
import RecuperacaoPage from './pages/RecuperacaoPage'
import CadastroPage from './pages/CadastroPage'
import DetalhamentoPage from './pages/DetalhamentoPage'
import CursoExibicaoPage from './pages/CursoExibicaoPage'
import PreferenciasPage from './pages/PreferenciasPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreferenciasPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/cadastro" element={<CadastroPage/>}></Route>
        <Route path="/recuperacao" element={<RecuperacaoPage/>}></Route>
        <Route path="/catalogo" element={<CatalogoPage/>}></Route>
        <Route path="/detalhamento" element={<DetalhamentoPage/>}></Route>
        <Route path="/curso" element={<CursoExibicaoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}