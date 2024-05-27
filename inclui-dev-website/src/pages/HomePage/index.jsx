import './style.css'

import Home from '../../components/Home'
import Header from '../../components/Header'
import About from '../../components/About'
import Add from '../../components/Add'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import PaletaCard from '../../components/PaletaCard'
import IdentidadeVisual from '../../components/IdentidadeVisual'
import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'

export default function HomePage() {
  const { t } = useTranslation()

  function teste() {
    console.log(t("header"));
  }

  useEffect(() => {
    const intervalId = setInterval(teste, 1000); // Configura para rodar a cada 1 segundo

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [t]);

  return (
    <>
      <Header />

      <main>
        <h1>{t("header")}</h1>
        
        <Home />
        <About />
        <Add />
        <PaletaCard/>
        <IdentidadeVisual />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}