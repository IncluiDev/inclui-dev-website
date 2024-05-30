import EquipeCard from '../EquipeCard/index'
import HenryFoto from '../../assets/HENRY.png'
import KaiqueFoto from '../../assets/KAIQUE.png'
import IgorFoto from '../../assets/IGOR.png'
import AlineFoto from '../../assets/ALINE.png'
import KaykFoto from '../../assets/KAYK.png'
import LeonardoFoto from '../../assets/LEONARDO.png'
import AdrieleFoto from '../../assets/ADRIELE.png'
import dashOne from '../../assets/dash2.png'

import "./style.css"

export default function Equipe(props) {
    return (
        <section id='Equipe' className='Equipe'>
            <div className="members-one">
                
            <EquipeCard
            
                foto = {KaiqueFoto} 
                nome = "Kaique Sousa"
                funcao = "Scrum Master - UX/UI & FullStack" 
                github = ""
                linkedin = ""
                />


            <EquipeCard 
                foto = {HenryFoto} 
                nome = "Henry Modesto"
                funcao = "Scrum Master - UX/UI & FullStack" />


            <EquipeCard 
                foto = {KaykFoto} 
                nome = "Kayk Gomes"
                funcao = "Scrum Master - UX/UI & FullStack" />

            <EquipeCard 
                foto = {AlineFoto} 
                nome = "Aline Aguiar"
                funcao = "Scrum Master - UX/UI & FullStack" />

            </div>
            <div className="members-two">

            <EquipeCard 
                foto = {AdrieleFoto} 
                nome = "Adriele Lima"
                funcao = "Scrum Master - UX/UI & FullStack" />


            <EquipeCard 
                foto = {IgorFoto} 
                nome = "Igor Silva"
                funcao = "Scrum Master - UX/UI & FullStack" />


            <EquipeCard 
                foto = {LeonardoFoto}
                nome = "Leonardo Duarte"
                funcao = "Scrum Master - UX/UI & FullStack" />

            
            <EquipeCard 
                foto = {KaiqueFoto}
                nome = "Edson Fernandez"
                funcao = "Scrum Master - UX/UI & FullStack" />
            </div>

        </section>  
    )
}