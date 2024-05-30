import './style.css'
import descricaoBlocos from '../../assets/descricao-linha-blocos.png';
import rodapeCurso from '../../assets/rodape-curso.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CursoExibicaoPage() {
    return(
        <div className='curso-container'>
            <section className='header-curso'>
                <h2>
                    <span className='enumeracao-curso'>01.</span>
                    Aula
                </h2>

                <button className='button-proxima-aula'>
                    Próxima Aula
                    <FontAwesomeIcon icon={faArrowRight} className='icon-curso' />
                </button>
            </section>

            <main>
                <section>
                    <iframe className='curso-video' src="https://www.youtube.com/embed/VKjFuX91G5Q?si=E2i2ozs23wnMIusf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>

                <section>
                    <div className='descricao-imagem'>
                        <div className='curso-subtitulos'>
                            <h3>Descrição de Imagem</h3>
                            <img src={descricaoBlocos} alt="" />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida congue eros eu tincidunt. In hac habitasse platea dictumst. Aliquam eget dapibus augue. Praesent porta justo eu leo hendrerit, ut laoreet massa fermentum. Sed augue lorem, imperdiet sit amet dictum et, vestibulum eget mi. Etiam quam magna, imperdiet eget eros.
                        </p>
                    </div>

                    <div className='transcricao-descricao'>
                        <div className='curso-subtitulos'>
                            <h3>Transcrição</h3>
                            <img src={descricaoBlocos} alt="" />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida congue eros eu tincidunt. In hac habitasse platea dictumst. Aliquam eget dapibus augue. Praesent porta justo eu leo hendrerit, ut laoreet massa fermentum. Sed augue lorem, imperdiet sit amet dictum et, vestibulum eget mi. Etiam quam magna, imperdiet eget eros.
                        </p>                   
                    </div>
                </section>

                <section>
                    <img className='rodape-curso' src={rodapeCurso}/>
                </section>
            </main>
        </div>
    );
}