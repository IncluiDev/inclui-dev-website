import { Routes, Route, Navigate } from 'react-router-dom';

import PreferenciasPage from "../../pages/PreferenciasPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import CadastroPage from "../../pages/CadastroPage";
import RecuperacaoPage from "../../pages/RecuperacaoPage";
import CatalogoPage from "../../pages/CatalogoPage";
import DetalhamentoPage from "../../pages/DetalhamentoPage";
import CursoExibicaoPage from "../../pages/CursoExibicaoPage";
import CadastroResponsavelPage from '../../pages/CadastroResponsavelPage';
import Dashboard from '../../pages/Dashboard';
import NewsletterAdmPage from '../../pages/NewsletterAdmPage';
import ErrorPage from '../../pages/ErrorPage';
import LGPDPage from '../../pages/LGPDPage';
import CadastroProfessor from '../../pages/CadastroProfessor';
import MazeRunnerPage from '../../pages/MazeRunnerPage';
import QuizPage from '../../pages/QuizPage';

export default function ManagerRoutes() {
    return (
        <Routes>
          <Route path="/" element={<PreferenciasPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/catalogo" element={<CatalogoPage/>}/>
          <Route path="/cadastro" element={<CadastroPage/>}/>
          <Route path="/responsavel" element={<CadastroResponsavelPage/>}/>
          <Route path="/recuperacao" element={<RecuperacaoPage/>}/>
          
          <Route path="/professor" element={<CadastroProfessor/>}/>

          <Route path="/mazerunner" element={<MazeRunnerPage/>}/>
          <Route path="/quiz" element={<QuizPage/>}/>

          <Route path="/newsletter" element={<NewsletterAdmPage/>}/>
          <Route path="/detalhamento" element={<DetalhamentoPage/>}/>
          <Route path="/curso" element={<CursoExibicaoPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="/lgpd" element={<LGPDPage/>}/>
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}