import './style.css';

import { useNavigate } from 'react-router-dom';

import descricaoBlocos from '../../assets/descricao-linha-blocos.png';
import rodapeCurso from '../../assets/rodape-curso.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function CursoExibicaoPage() {
    const navigate = useNavigate();

    function handleClick(root) {
        navigate(root); 
    }

    return (
        <div className='curso-container'>
            <header className='header-curso'>
                <h2>
                    <span className='enumeracao-curso'>01.</span>
                    Aula
                </h2>

                <nav className='navigation-curso'>
                    <button className='button-proxima-aula'>
                        Próxima Aula
                        <FontAwesomeIcon icon={faArrowRight} className='icon-curso' />
                    </button>

                    <button className='button-sair' onClick={() => handleClick("/detalhamento")}>
                        Sair
                        <FontAwesomeIcon icon={faRightFromBracket} className='icon-curso' />
                    </button>
                </nav>
            </header>

            <main>
                <section>
                    <iframe className='curso-video' src="https://www.youtube.com/embed/VKjFuX91G5Q?si=E2i2ozs23wnMIusf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </section>

                <article>
                    <div className='descricao-imagem'>
                        <div className='curso-subtitulos'>
                            <h3>Descrição de Imagem</h3>
                            <img src={descricaoBlocos} alt="Descrição de blocos" />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida congue eros eu tincidunt. In hac habitasse platea dictumst. Aliquam eget dapibus augue. Praesent porta justo eu leo hendrerit, ut laoreet massa fermentum. Sed augue lorem, imperdiet sit amet dictum et, vestibulum eget mi. Etiam quam magna, imperdiet eget eros.
                        </p>
                    </div>

                    <div className='transcricao-descricao'>
                        <div className='curso-subtitulos'>
                            <h3>Transcrição</h3>
                            <img src={descricaoBlocos} alt="Transcrição de blocos" />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida congue eros eu tincidunt. In hac habitasse platea dictumst. Aliquam eget dapibus augue. Praesent porta justo eu leo hendrerit, ut laoreet massa fermentum. Sed augue lorem, imperdiet sit amet dictum et, vestibulum eget mi. Etiam quam magna, imperdiet eget eros.
                        </p>                   
                    </div>
                </article>

                <footer>
                    <img className='rodape-curso' src={rodapeCurso} alt="Rodapé do curso"/>
                </footer>
            </main>
        </div>
    );
}
