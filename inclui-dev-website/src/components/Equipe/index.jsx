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

export default function Equipe(props) {
    return (
        <section id='Equipe' className='Equipe'>
            <div className='blocos-Equipe'><img className='CenterBlocos' src={blocosCenter} /></div>
            
            <h2 className='title-equipe'>EQUIPE</h2>
                <div className="members-one">
                
            <EquipeCard
            
                foto = {KaiqueFoto} 
                nome = "Kaique Sousa"
                funcao = "Product Owner & FullStack" 
                github = "https://github.com/kaiquesouzasantos"
                linkedin = "https://www.linkedin.com/in/kaique-souza-santos/"
                instagram = "https://www.instagram.com/kaiquesouzasantoss/" />


            <EquipeCard 
                foto = {HenryFoto} 
                nome = "Henry Modesto"
                funcao = "Scrum Master & FullStack"
                github = "https://github.com/HenryModesto"
                linkedin = "https://www.linkedin.com/in/henrymodesto/" 
                instagram = "https://www.instagram.com/henry_modesto05/" />
                

            <EquipeCard 
                foto = {KaykFoto} 
                nome = "Kayk Gomes"
                funcao = "Financeiro & Back-End" 
                github = "https://github.com/Kayk-Dev"
                linkedin = "https://www.linkedin.com/in/kaykmg/" 
                instagram = "https://www.instagram.com/kaykmessiass/" />


            <EquipeCard 
                foto = {AlineFoto} 
                nome = "Aline Aguiar"
                funcao = "Marketing - UX/UI & Front-End"
                github = "https://github.com/eulineaguiar"
                linkedin = "https://www.linkedin.com/in/alineaguiarsilva/" 
                instagram = "https://www.instagram.com/eulineaguiar/" />

            </div>
            
            <div className="members-two">
            <EquipeCard 
                foto = {AdrieleFoto} 
                nome = "Adriele Lima"
                funcao = "Marketing & Back-End" 
                github = "#"
                linkedin = "https://www.linkedin.com/in/adrielels/" 
                instagram = "https://www.instagram.com/adriele.7/" />


            <EquipeCard 
                foto = {IgorFoto} 
                nome = "Igor Silva"
                funcao = "Designer & Front-End" 
                github = "https://github.com/IgorOdSilva"
                linkedin = "https://www.linkedin.com/in/igorodsilva/"
                instagram = "https://www.instagram.com/igor_silva_150/" />


            <EquipeCard 
                foto = {LeonardoFoto}
                nome = "Leonardo Duarte"
                funcao = "Designer & Front-End" 
                github = "https://github.com/leoduarte14"
                linkedin = "https://www.linkedin.com/in/leonardo-duarte-pereira-a4705b255/"
                instagram = "https://www.instagram.com/duart.yn/" />

           
            <EquipeCard 
                foto = {KaiqueFoto}
                nome = "Edson Fernandez"
                funcao = "Mentor - Gerente de TI - PAM" 
                github = "https://github.com/HenryModesto"
                linkedin = "https://www.linkedin.com/in/edsonfmarques/"
                instagram = "https://www.instagram.com/edsonfernandesmarques/" />

            </div>
        </section>  
    )
}