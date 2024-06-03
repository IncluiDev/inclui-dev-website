import './style.css'

import Home from '../../components/Home'
import Header from '../../components/Header'
import About from '../../components/About'
import AboutProject from '../../components/AboutProject'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import PaletaCard from '../../components/PaletaCard'
import IdentidadeVisual from '../../components/IdentidadeVisual'
import { useTranslation } from 'react-i18next'
import Equipe from '../../components/Equipe'
import Planos from '../../components/Planos'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <main>
        <h1>{t("header")}</h1>
        
        <Home />
        <About />
        <AboutProject />
        <PaletaCard />
        <IdentidadeVisual />
        <Equipe />
        <Planos />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}