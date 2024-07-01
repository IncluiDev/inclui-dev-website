import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import CursosCard from '../CursosCard';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

import mazeImg from '../../assets/game/mazerunner.png';
import quizImg from '../../assets/game/quiz.png';

import { useTranslation } from 'react-i18next'
import GameCard from '../GameCard';

export default function Catalogo() {
    const [cursos, setCursos] = useState([]);
    const [cursoOpen , setCursoOpen] = useState(true);
    const [jogosOpen , setJogosOpen] = useState(false);
    const { t } = useTranslation()

    function cursoVisible() {
        setCursoOpen(true);
        setJogosOpen(false);
    } 

    function jogosVisible() {
        setJogosOpen(true);
        setCursoOpen(false);
    }

    function getCursos() {
        WebClient.exchange("/curso/all", "GET")
            .then(response => response.json()) 
            .then(data => setCursos(data))
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }    

    useEffect(() => {
        getCursos();
    }, []);

    return (
        <div className="main">
            <div className="container-cursos">
                <h1>{t("catalogo-titulo-navegacao")}</h1>

                <nav className='menu-curso'>
                    <ul>
                        <li className="item-ativo" onClick={() => cursoVisible()}>Cursos</li>
                        <li className='jogos-select' onClick={() => jogosVisible()}>Jogos</li>
                    </ul>
                </nav>

                <div className='container-card' style={{display: cursoOpen ? 'block' : 'none'}}>
                    <div className='container-principal'>
                        {
                            cursos.map(curso => (
                                <CursosCard
                                    key={curso.id} 
                                    id={curso.id}
                                    imgSrc={curso.referenciaImagem}
                                    courseName={curso.nome}
                                    courseTag={curso.tags}
                                    descricaoCurso={curso.descricao}
                                    progress="0"
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='container-card' style={{display: jogosOpen ? 'block' : 'none'}}>
                    <div className='grid'>
                        <GameCard img={mazeImg} nome="Maze Runner" autor="Kayk Messias" redirect="/mazerunner"/>
                        <GameCard img={quizImg} nome="Quiz" autor="Henry Modesto" redirect="/quiz"/>
                    </div>
                </div>

                <div className='blocos-1'>
                    <img src={blocosCentro} alt="blocosCentro" />
                </div>
            </div>
        </div>
    );
}