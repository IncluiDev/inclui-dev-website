import './style.css'
import bloquinhoCenter from '../../assets/chao-blocos.png'
import VerdeCor from '../../assets/identidade-cor-verde.png';
import RosaCor from '../../assets/identidade-cor-rosa.png';
import LaranjaCor from '../../assets/identidade-cor-laranja.png';
import AzulCor from '../../assets/identidade-cor-azul.png';
import Paleta from '../Paleta/index'

export default function PaletaCard() {
  return (

    <section className='PaletaCard' id='identidade'>
      <img src={bloquinhoCenter} className='bloquinhoCenter' />
      
      <h2 className='paleta-title'>CORES IDENTIDADE VISUAL</h2>

      <div className='grid-card'>   
        
        <Paleta 
          image = {LaranjaCor} 
          hexadecimal = "Laranja"
          name = "Alegria" />

        <Paleta 
          image = {RosaCor}
          hexadecimal = "Rosa"
          name = "Criatividade" />

        <Paleta 
          image = {VerdeCor}
          hexadecimal = "Verde"
          name = "Coragem" />

        <Paleta 
          image = {AzulCor}
          hexadecimal = "Azul"
          name = "Confiança" />
      </div>
    </section>
  )
}