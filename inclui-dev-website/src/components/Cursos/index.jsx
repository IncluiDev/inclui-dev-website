import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import CursosCard from '../CursosCard';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

import { useTranslation } from 'react-i18next'

export default function Cursos() {
    const [cursos, setCursos] = useState([]);
    const { t } = useTranslation()

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
                        <li className="item-ativo">Cursos</li>
                        <li className='jogos-select'>Jogos</li>
                    </ul>
                </nav>

                <div className='container-card'>
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
                <div className='blocos-1'>
                    <img src={blocosCentro} alt="blocosCentro" />
                </div>
            </div>
        </div>
    );
}