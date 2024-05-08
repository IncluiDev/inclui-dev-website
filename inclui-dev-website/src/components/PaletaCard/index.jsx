import './style.css'
import bloquinhoCenter from '../../assets/bloquinhoCenter.png'
import { useEffect, useState } from 'react';
import VerdeCor from '../../assets/verdeCor.png';
import RosaCor from '../../assets/rosaCor.png';
import LaranjaCor from '../../assets/laranjaCor.png';
import AzulCor from '../../assets/azulCor.png';
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