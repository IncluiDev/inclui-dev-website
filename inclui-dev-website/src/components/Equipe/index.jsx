import EquipeCard from '../EquipeCard/index'
import HenryFoto from '../../assets/equipe/HENRY.png'
import KaiqueFoto from '../../assets/equipe/KAIQUE.png'
import IgorFoto from '../../assets/equipe/IGOR.png'
import AlineFoto from '../../assets/equipe/ALINE.png'
import KaykFoto from '../../assets/equipe/KAYK.png'
import LeonardoFoto from '../../assets/equipe/LEONARDO.png'
import AdrieleFoto from '../../assets/equipe/ADRIELE.png'
import blocosCenter from '../../assets/chao-blocos.png'

import "./style.css"

import { useTranslation } from 'react-i18next'

export default function Equipe() {
    const { t } = useTranslation()

    return (
        <section id='equipe' className='Equipe'>
            <div className='blocos-Equipe'><img className='CenterBlocos' src={blocosCenter} /></div>
            <h2 className='title-equipe'>{t("equipe-titulo")}</h2>
            
            <div className="members-one">
                <EquipeCard
                    foto={KaiqueFoto} 
                    nome="Kaique Souza"
                    funcao="Product Owner & Full-Stack"
                    github="https://github.com/kaiquesouzasantos"
                    linkedin="https://www.linkedin.com/in/kaique-souza-santos/"
                    instagram="https://www.instagram.com/kaiquesouzasantoss/"
                    cor="#4D8F9A" 
                />

                <EquipeCard
                    foto={HenryFoto} 
                    nome="Henry Modesto"
                    funcao="Scrum Master, Design & Full-Stack"
                    github="https://github.com/HenryModesto"
                    linkedin="https://www.linkedin.com/in/henrymodesto/"
                    instagram="https://www.instagram.com/henry_modesto05/"
                    cor="#63AB72" 
                />

                <EquipeCard
                    foto={KaykFoto} 
                    nome="Kayk Gomes"
                    funcao="Financeiro & Back-End"
                    github="https://github.com/Kayk-Dev"
                    linkedin="https://www.linkedin.com/in/kaykmg/"
                    instagram="https://www.instagram.com/kaykmessiass/"
                    cor="#CA1BB4" 
                />

                <EquipeCard
                    foto={AlineFoto} 
                    nome="Aline Aguiar"
                    funcao="Marketing, Design & Front-End"
                    github="https://github.com/eulineaguiar"
                    linkedin="https://www.linkedin.com/in/alineaguiarsilva/"
                    instagram="https://www.instagram.com/eulineaguiar/"
                    cor="#F76456" 
                />
            </div>

            <div className="members-two">
                <EquipeCard
                    foto={AdrieleFoto} 
                    nome="Adriele Lima"
                    funcao="Marketing & Back-End"
                    github="#"
                    linkedin="https://www.linkedin.com/in/adrielels/"
                    instagram="https://www.instagram.com/adriele.7/"
                    cor="#F76456" 
                />
                
                <EquipeCard
                    foto={IgorFoto} 
                    nome="Igor Silva"
                    funcao="Design & Front-End"
                    github="https://github.com/IgorOdSilva"
                    linkedin="https://www.linkedin.com/in/igorodsilva/"
                    instagram="https://www.instagram.com/igor_silva_150/"
                    cor="#4D8F9A" 
                />

                <EquipeCard
                    foto={LeonardoFoto}
                    nome="Leonardo Duarte"
                    funcao="Design & Front-End"
                    github="https://github.com/leoduarte14"
                    linkedin="https://www.linkedin.com/in/leonardo-duarte-pereira-a4705b255/"
                    instagram="https://www.instagram.com/duart.yn/"
                    cor="#63AB72" 
                />

                
            </div>
        </section>
    )
}

/*
<EquipeCard
                    foto={KaiqueFoto}
                    nome="Edson Fernandez"
                    funcao="Mentor"
                    linkedin="https://www.linkedin.com/in/edsonfmarques/"
                    instagram="https://www.instagram.com/edsonfernandesmarques/"
                    cor="#CA1BB4" 
                />
*/