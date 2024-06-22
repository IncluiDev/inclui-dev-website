import './style.css';
import { useNavigate } from 'react-router-dom';
import descricaoBlocos from '../../assets/descricao-linha-blocos.png';
import { FaArrowRight } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import Footer from '../../components/Footer';

import { useEffect, useState } from 'react';
import { URLGetter } from "../../helpers/component/URLGetter";
import Loader from '../../components/Loader';
import { WebClient } from '../../helpers/api/WebClient';
import SwitchLanguage from '../../components/SwitchLanguage'

import { useTranslation } from 'react-i18next'

import { Progresso } from '../../helpers/service/Progresso';

export default function CursoExibicaoPage() {
    const navigate = useNavigate();
    const [aula, setAula] = useState(null);
    const [loading, setLoading] = useState(true); 
    const numeroAula = URLGetter.getAtribut("aula");
    const cursoId = URLGetter.getIdentification();
    const { t } = useTranslation()

    async function setProgressoCurso() {
      await Progresso.setProgresso(cursoId, Number(numeroAula) + 1);
    }

    useEffect(() => {
        setLoading(true); 
        
        WebClient.exchange(`/aula/all?curso=${cursoId}`, "GET")
            .then(response => response.json())
            .then(data => {
                const aulaAtual = data[numeroAula];

                if (aulaAtual) {
                    setAula(aulaAtual);
                    setProgressoCurso()
                } else {
                    navigate(`/detalhamento?id=${cursoId}`);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar os dados da aula:", error);
                navigate(`/detalhamento?id=${cursoId}`);
            })
            .finally(() => setLoading(false));
    }, [numeroAula, cursoId, navigate]);

    function handleClick() {
        navigate(`/detalhamento?id=${cursoId}`);
    }

    function nextClass() {
        setLoading(true);
        navigate(`/curso?id=${cursoId}&aula=${Number(numeroAula) + 1}`);
    }

    if (loading) {
        return <Loader />;
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
                        <SwitchLanguage/>

                        <button className='button-proxima-aula' onClick={nextClass}>
                            {t("curso-button-proxima-aula")}
                            <FaArrowRight className='icon-curso' />
                        </button>

                        <button className='button-sair' onClick={handleClick}>
                            {t("curso-button-sair")}
                            <FaRightFromBracket className='icon-curso' />
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
                </main>

                <Footer/>
            </div>
        ) : (
            <Loader/>
        )
    );
}
