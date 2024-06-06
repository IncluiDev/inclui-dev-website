import './style.css'
import bloquinhoCenter from '../../assets/chao-blocos.png'
import VerdeCor from '../../assets/identidade-cor-verde.png';
import roxoCor from '../../assets/identidade-cor-roxo.png';
import LaranjaCor from '../../assets/identidade-cor-laranja.png';
import AzulCor from '../../assets/identidade-cor-azul.png';
import Paleta from '../Paleta/index'

import { useTranslation } from 'react-i18next'

export default function PaletaCard() {
  const { t } = useTranslation()

  return (

    <section className='PaletaCard' id='identidade'>
      <img src={bloquinhoCenter} className='bloquinhoCenter' />
      
      <h2 className='paleta-title'>{t("paleta-card-titulo")}</h2>

      <div className='grid-card'>   
        
        <Paleta 
          image = {LaranjaCor} 
          hexadecimal = {t("paleta-card-laranja")}
          name = {t("paleta-card-laranja-significado")} />

        <Paleta 
          image = {roxoCor}
          hexadecimal = {t("paleta-card-roxo")}
          name = {t("paleta-card-roxo-significado")} />

        <Paleta 
          image = {VerdeCor}
          hexadecimal = {t("paleta-card-verde")}
          name = {t("paleta-card-verde-significado")} />

        <Paleta 
          image = {AzulCor}
          hexadecimal = {t("paleta-card-azul")}
          name = {t("paleta-card-azul-significado")} />
      </div>
    </section>
  )
}