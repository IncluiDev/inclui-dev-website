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
          hexadecimal = "#F76456"
          name = "ALEGRIA" />

        <Paleta 
          image = {RosaCor}
          hexadecimal = "#CA1BB4"
          name = "CRIATIVIDADE" />

        <Paleta 
          image = {VerdeCor}
          hexadecimal = "#63AB72"
          name = "CORAGEM" />

        <Paleta 
          image = {AzulCor}
          hexadecimal = "#4D8F9A"
          name = "CONFIANÇA" />
      </div>
    </section>
  )
}