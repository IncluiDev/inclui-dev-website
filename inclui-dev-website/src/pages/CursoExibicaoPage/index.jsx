import './style.css';
import { useNavigate } from 'react-router-dom';
import descricaoBlocos from '../../assets/descricao-linha-blocos.png';
import rodapeCurso from '../../assets/rodape-curso.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { api } from "../../lib/axios/axios";
import { useEffect, useState } from 'react';
import { URLGetter } from "../../helpers/component/URLGetter";

export default function CursoExibicaoPage() {
    const navigate = useNavigate();
    const [aula, setAula] = useState();

    async function getAula() {
        try {
            const response = await api.get(`/aula?id=${URLGetter.getIdentification()}`);
            setAula(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    }

    useEffect(() => {
        getAula();
    }, []);

    function handleClick(root) {
        navigate(root);
    }

    return (
        aula ? (
            <div className='curso-container'>
                <header className='header-curso'>
                    <h2>
                        <span className='enumeracao-curso'>01.</span>
                        {aula.nome}
                    </h2>

                    <nav className='navigation-curso'>
                        <button className='button-proxima-aula'>
                            Próxima Aula
                            <FontAwesomeIcon icon={faArrowRight} className='icon-curso' />
                        </button>

                        <button className='button-sair' onClick={() => handleClick("/catalogo")}>
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
            "Loading..."
        )
    );
}