import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import lateralCard from '../../assets/lateralCard.png';
import imgCurso1 from '../../assets/cursos/curso-java.png';
import CursosCard from '../CursosCard';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

export default function Cursos() {
    const [cursos, setCursos] = useState([]);

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
                <h1>Todos nossos cursos Java</h1>
                <nav className='menu-curso'>
                    <ul>
                        <li className="item-ativo">Java</li>
                        <li>Python</li>
                        <li className='jogos-select'>Jogos</li>
                    </ul>
                </nav>

                <div className='container-card'>
                    <div className='container-principal'>
                        <CursosCard
                            id = "teste"
                            imgSrc={imgCurso1}
                            courseName="Crie sua primeira aplicação web Java"
                            courseTag={["Java", "OO", "Polimorfismo"]}
                            descricaoCurso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolorem id? Illum aliquid magnam ducimus possimus delectus exercitationem iste illo nemo rerum consequuntur, repellendus quos! Facilis provident eos perspiciatis."
                            progress="80"
                        />
                        {
                            cursos.map(curso => (
                                <CursosCard
                                    key={curso.id} 
                                    id={curso.id}
                                    imgSrc={curso.referenciaImagem}
                                    courseName={curso.nome}
                                    courseTag={curso.tags}
                                    descricaoCurso={curso.descricao}
                                    progress="80"
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