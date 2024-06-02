import EquipeCard from '../EquipeCard/index'
import HenryFoto from '../../assets/HENRY.png'
import KaiqueFoto from '../../assets/KAIQUE.png'
import IgorFoto from '../../assets/IGOR.png'
import AlineFoto from '../../assets/ALINE.png'
import KaykFoto from '../../assets/KAYK.png'
import LeonardoFoto from '../../assets/LEONARDO.png'
import AdrieleFoto from '../../assets/ADRIELE.png'
import blocosCenter from '../../assets/chao-blocos.png'

import "./style.css"

export default function Equipe() {
    return (
        <section id='Equipe' className='Equipe'>
            <div className='blocos-Equipe'><img className='CenterBlocos' src={blocosCenter} /></div>
            <h2 className='title-equipe'>EQUIPE</h2>
            <div className="members-one">
                <EquipeCard
                    foto={KaiqueFoto} 
                    nome="KAIQUE SOUSA"
                    funcao="Product Owner & FullStack"
                    github="https://github.com/kaiquesouzasantos"
                    linkedin="https://www.linkedin.com/in/kaique-souza-santos/"
                    instagram="https://www.instagram.com/kaiquesouzasantoss/"
                    cor="#FF725E" 
                 
                />

                <EquipeCard
                    foto={HenryFoto} 
                    nome="HENRY MODESTO"
                    funcao="Scrum Master, UX/UI, FullStack"
                    github="https://github.com/HenryModesto"
                    linkedin="https://www.linkedin.com/in/henrymodesto/"
                    instagram="https://www.instagram.com/henry_modesto05/"
                    cor="#4D8F9A" 
                />

                <EquipeCard
                    foto={KaykFoto} 
                    nome="KAYK GOMES"
                    funcao="Financeiro & Back-End"
                    github="https://github.com/Kayk-Dev"
                    linkedin="https://www.linkedin.com/in/kaykmg/"
                    instagram="https://www.instagram.com/kaykmessiass/"
                    cor="#63AB72" 
                />

                <EquipeCard
                    foto={AlineFoto} 
                    nome="ALINE AGUIAR"
                    funcao="Marketing - UX/UI & Front-End"
                    github="https://github.com/eulineaguiar"
                    linkedin="https://www.linkedin.com/in/alineaguiarsilva/"
                    instagram="https://www.instagram.com/eulineaguiar/"
                    cor="#C45BAA" 
                />
            </div>
            <div className="members-two">
                <EquipeCard
                    foto={AdrieleFoto} 
                    nome="ADRIELE LIMA"
                    funcao="Marketing & Back-End"
                    github="#"
                    linkedin="https://www.linkedin.com/in/adrielels/"
                    instagram="https://www.instagram.com/adriele.7/"
                    cor="#FFAA1D" 
                />
                
                <EquipeCard
                    foto={IgorFoto} 
                    nome="IGOR SILVA"
                    funcao="Designer & Front-End"
                    github="https://github.com/IgorOdSilva"
                    linkedin="https://www.linkedin.com/in/igorodsilva/"
                    instagram="https://www.instagram.com/igor_silva_150/"
                    cor="#C45BAA" 
                />
                <EquipeCard
                    foto={LeonardoFoto}
                    nome="LEONARDO DUARTE"
                    funcao="Designer & Front-End"
                    github="https://github.com/leoduarte14"
                    linkedin="https://www.linkedin.com/in/leonardo-duarte-pereira-a4705b255/"
                    instagram="https://www.instagram.com/duart.yn/"
                    cor="#7DCEA0" 
                />
                <EquipeCard
                    foto={KaiqueFoto}
                    nome="EDSON FERNANDEZ"
                    funcao="Mentor - Gerente de TI - PAM"
                    linkedin="https://www.linkedin.com/in/edsonfmarques/"
                    instagram="https://www.instagram.com/edsonfernandesmarques/"
                    cor="#FFA07A" 
                />
            </div>
        </section>
    )
}