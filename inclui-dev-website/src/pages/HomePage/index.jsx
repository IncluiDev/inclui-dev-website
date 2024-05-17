import './index.css'

import Home from '../../components/Home'
import Header from '../../components/Header'
import About from '../../components/About'
import Add from '../../components/Add'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import PaletaCard from '../../components/PaletaCard'
import IdentidadeVisual from '../../components/IdentidadeVisual'

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
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