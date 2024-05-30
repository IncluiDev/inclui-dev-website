import './style.css'
import bloquinhoCenter from '../../assets/chao-blocos.png'
import VerdeCor from '../../assets/identidade-cor-verde.png';
import RosaCor from '../../assets/identidade-cor-rosa.png';
import LaranjaCor from '../../assets/identidade-cor-laranja.png';
import AzulCor from '../../assets/identidade-cor-azul.png';
import Paleta from '../Paleta/index'

export default function PaletaCard() {
  return (

    <section className='PaletaCard' id='feedback'>
      <img src={bloquinhoCenter} className='bloquinhoCenter' />
      
      <Paleta subtitle= "CORES IDENTIDADE VISUAL" />

      <div className='grid-card'>   
        
        <Paleta 
          image = {LaranjaCor} 
          hexadecimal = "LARANJA"
          name = "ALEGRIA" />

        <Paleta 
          image = {RosaCor}
          hexadecimal = "ROSA"
          name = "CRIATIVIDADE" />

        <Paleta 
          image = {VerdeCor}
          hexadecimal = "VERDE"
          name = "CORAGEM" />

        <Paleta 
          image = {AzulCor}
          hexadecimal = "AZUL"
          name = "CONFIANÇA" />
      </div>
    </section>
  )
}