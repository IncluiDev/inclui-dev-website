import './style.css';
import { useNavigate } from 'react-router-dom';
import descricaoBlocos from '../../assets/descricao-linha-blocos.png';
import rodapeCurso from '../../assets/rodape-curso.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { URLGetter } from "../../helpers/component/URLGetter";
import Loader from '../../components/Loader';
import { WebClient } from '../../helpers/api/WebClient';

export default function CursoExibicaoPage() {
    const navigate = useNavigate();
    const [aula, setAula] = useState(null);
    const numeroAula = URLGetter.getAtribut("aula");
    const cursoId = URLGetter.getIdentification();

    useEffect(() => {
        WebClient.exchange(`/aula/all?curso=${cursoId}`, "GET")
            .then(response => response.json())
            .then(data => {
                let aula = data[numeroAula]
                aula ? setAula(aula) : navigate(`/detalhamento?id=${cursoId}`)
            })
            .catch(error => {
                console.error('Error fetching class:', error);
                navigate("/catalogo");
            });
    }, [numeroAula, cursoId, navigate]);

    function handleClick() {
        navigate(`/detalhamento?id=${cursoId}`);
    }

    function nextClass() {
        navigate(`/curso?id=${cursoId}&aula=${Number(numeroAula) + 1}`);
    }

    return (
        aula ? (
            <div className='curso-container'>
                <header className='header-curso'>
                    <h2>
                        <span className='enumeracao-curso'>{Number(numeroAula) + 1}.</span>
                        {aula.nome}
                    </h2>

                    <nav className='navigation-curso'>
                        <button className='button-proxima-aula' onClick={nextClass}>
                            Próxima Aula
                            <FontAwesomeIcon icon={faArrowRight} className='icon-curso' />
                        </button>

                        <button className='button-sair' onClick={handleClick}>
                            Sair
                            <FontAwesomeIcon icon={faRightFromBracket} className='icon-curso' />
                        </button>
                    </nav>
                </header>

                <main>
                    <section>
                        <iframe
                            className='curso-video'
                            src={aula.referenciaVideo}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </section>

                    <article>
                        <div className='descricao-imagem'>
                            <div className='curso-subtitulos'>
                                <h3>Descrição de Imagem</h3>
                                <img src={descricaoBlocos} alt="Descrição de blocos" />
                            </div>

                            <p>{aula.descricaoImagem}</p>
                        </div>

                        <div className='transcricao-descricao'>
                            <div className='curso-subtitulos'>
                                <h3>Transcrição</h3>
                                <img src={descricaoBlocos} alt="Transcrição de blocos" />
                            </div>

                            <p>{aula.transcricao}</p>
                        </div>
                    </article>

                    <footer>
                        <img className='rodape-curso' src={rodapeCurso} alt="Rodapé do curso" />
                    </footer>
                </main>
            </div>
        ) : (
            <Loader/>
        )
    );
}