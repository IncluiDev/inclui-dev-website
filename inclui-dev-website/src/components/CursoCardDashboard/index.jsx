import { useState, useEffect } from 'react';
import { WebClient } from '../../helpers/api/WebClient';
import { MdOutlineWatchLater } from "react-icons/md";
import livros from '../../assets/livros-curso.png'

export default function CursoCardDashboard({ curso }) {
    const [tutor, setTutor] = useState("");

    async function fetchTutor() {
        await WebClient.exchange(`/usuario?id=${curso.professor}`, "GET")
            .then(response => response.json())
            .then(data => setTutor(data.nome))
            .catch(error => {
                console.error(`Error fetching tutor for curso ${curso.id}:`, error);
                setTutor('Desconhecido');
            });
    }

    useEffect(() => {
        fetchTutor();
    }, [curso]);

    return (
        <article className='cursos-container'>
            <img src={livros} alt="" className='curso-icon'/>

            <div className='curso-info'>
                <div>
                    <h3 className='curso-nome'>{curso.nome}</h3>
                    <p>by <span className='nome-tutor'>{tutor || "Carregando..."}</span></p>
                </div>
                <div className='curso-info-desc'>
                    <p><MdOutlineWatchLater /> {curso.horasDuracao}h</p>
                </div>
                <button 
                    className='assistir-cursos' 
                    onClick={() => window.location.href = `/detalhamento?id=${curso.id}`}
                >ASSISTIR</button>
            </div>
        </article>
    );
};