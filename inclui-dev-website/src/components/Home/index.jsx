import './style.css'

import ImageHome from '../../assets/home-usuarios.png'
import Details1 from '../../assets/Details1.png'
import Details2 from '../../assets/Details2.png'
import blocosCenter from '../../assets/chao-blocos.png'
import blocoMais from '../../assets/mais-roxo.png'
import { CircleChevronDown } from 'lucide-react';

import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation()

    return( 
        <section className="home">
       
             <div className='titulos'>
                <h1> <span id='tituloS'>{t("home-titulo-01")}</span><br /> {t("home-titulo-02")} <span id='spanI'>I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanL'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h1>
                <p id='subtitulo'> {t("home-subtitulo-01")}  <br /> {t("home-subtitulo-02")} </p>

                <img className='Details1' src={Details1}/>
                <img className='Details2' src={Details2} />
                <img className='HomeImage' src={ImageHome} />

                <img className='blocoMais' src={blocoMais} />
                <img className='CenterBlocos' src={blocosCenter} />
                    
                <a className='saibaMais' href="/home#sobre">  <span id='saiba'>{t("home-saiba-mais")} <CircleChevronDown id='circleDown' size={45} color="white" weight="bold"/> </span> 
                </a>
            </div>
        </section> 
    )
}