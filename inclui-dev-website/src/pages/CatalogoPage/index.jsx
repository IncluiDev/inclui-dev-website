import Header from "../../components/Header"
import Cursos from '../../components/Cursos'
import CatalogoCabecalho from "../../components/CatalogoCabecalho"
import './style.css'
import Footer from '../../components/Footer'

export default function CatalogoPage() {
    return (
      <div className="catalogo-page">
        <Header/>

        <main>
          <CatalogoCabecalho />
          <Cursos/>
        </main>
        <Footer />
      </div>
    )
}
  