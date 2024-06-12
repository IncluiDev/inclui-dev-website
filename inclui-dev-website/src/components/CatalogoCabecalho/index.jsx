import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';

import { useTranslation } from 'react-i18next'

export default function CatalogoCabecalho() {
    const { t } = useTranslation()

    return (
        <div className="container">
            <div className='container-info'>
                <section className="foto">
                    <div className='container-foto'>
                        <div className='fundo-container'>
                            <h2>{t("catalogo-titulo")}</h2>
                        </div>
                    </div>
                </section>

                <section className="texto">
                    <div className="container-texto">
                        <h1>{t("catalogo-subtitulo")} <span id='spanI'>I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanL'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h1>
                        <p>
                            {t("catalogo-descricao")}
                        </p>
                        <button className='button-saiba-mais'>{t("catalogo-button-saiba-mais")}</button>
                    </div>
                </section>
            </div>
            <img src={blocosCentro} alt="blocosCentro" className='blocos-catalogo'/>
        </div>
    )
}