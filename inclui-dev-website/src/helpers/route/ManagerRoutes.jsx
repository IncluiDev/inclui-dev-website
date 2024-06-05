import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../auth/AuthContext';

import PreferenciasPage from "../../pages/PreferenciasPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import CadastroPage from "../../pages/CadastroPage";
import RecuperacaoPage from "../../pages/RecuperacaoPage";
import CatalogoPage from "../../pages/CatalogoPage";
import DetalhamentoPage from "../../pages/DetalhamentoPage";
import CursoExibicaoPage from "../../pages/CursoExibicaoPage";

export default function ManagerRoutes() {
    const { authenticated } = useContext(Context);

    return (
        <Routes>
          <Route path="/" element={<PreferenciasPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/catalogo" element={<CatalogoPage/>}/>
          {/* <Route path="/catalogo" element={authenticated ? <CatalogoPage/> : <Navigate to="/login" replace />}/> */}
          <Route path="/cadastro" element={<CadastroPage/>}/>
          <Route path="/recuperacao" element={<RecuperacaoPage/>}/>

          <Route path="/detalhamento" element={<DetalhamentoPage/>}/>
          <Route path="/curso" element={<CursoExibicaoPage/>}/>
          
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}