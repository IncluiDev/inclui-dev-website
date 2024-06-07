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
import SwitchLanguage from '../../components/SwitchLanguage'

import { useTranslation } from 'react-i18next'

import { curso } from "../../helpers/gambiarra/gambiarra"

export default function CursoExibicaoPage() {
    const navigate = useNavigate();
    const [aula, setAula] = useState(null);
    const numeroAula = URLGetter.getAtribut("aula");
    const cursoId = URLGetter.getIdentification();
    const { t } = useTranslation()

    useEffect(() => {
        WebClient.exchange(`/aula/all?curso=${cursoId}`, "GET")
            .then(response => response.json())
            .then(data => {
                let aula = data[numeroAula]
                aula ? setAula(aula) : navigate(`/detalhamento?id=${cursoId}`)
            })
            .catch(error => {
                console.error('Error fetching class:', error);
                //navigate("/catalogo");
            });

            setAula(curso)
    }, [numeroAula, cursoId, navigate]);

    function handleClick() {
        navigate(`/detalhamento?id=${cursoId}`);
    }

    function nextClass() {
        navigate(`/detalhamento?id=${cursoId}`);
        //navigate(`/curso?id=${cursoId}&aula=${Number(numeroAula) + 1}`);
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
                        <SwitchLanguage/>
                        <button className='button-proxima-aula' onClick={nextClass}>
                            {t("curso-button-proxima-aula")}
                            <FontAwesomeIcon icon={faArrowRight} className='icon-curso' />
                        </button>

                        <button className='button-sair' onClick={handleClick}>
                            {t("curso-button-sair")}
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
                                <h3>{t("curso-subtitulo-descricao-imagem")}</h3>
                                <img src={descricaoBlocos} alt="Descrição de blocos" />
                            </div>

                            <p>{aula.descricaoImagem}</p>
                        </div>

                        <div className='transcricao-descricao'>
                            <div className='curso-subtitulos'>
                                <h3>{t("curso-subtitulo-transcricao")}</h3>
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