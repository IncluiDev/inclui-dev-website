import './style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'
import LoginPage from './pages/LoginPage'
import RecuperacaoPage from './pages/RecuperacaoPage'
import CadastroPage from './pages/CadastroPage'
<<<<<<< Updated upstream
=======
import DetalhamentoPage from './pages/DetalhamentoPage'
import TelaPreferencia from './pages/TelaPreferencia'
>>>>>>> Stashed changes

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/catalogo" element={<CatalogoPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/cadastro" element={<CadastroPage/>}></Route>
        <Route path="/recuperacao" element={<RecuperacaoPage/>}></Route>
<<<<<<< Updated upstream
=======
        <Route path="/detalhamento" element={<DetalhamentoPage/>}></Route>
        <Route path="/preferencias" element={<TelaPreferencia/>}></Route>
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  )
}