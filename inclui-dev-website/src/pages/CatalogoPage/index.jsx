import Header from "../../components/Header"
import Catalogo from '../../components/Catalogo'
import CatalogoCabecalho from "../../components/CatalogoCabecalho"
import './style.css'
import Footer from '../../components/Footer'

export default function CatalogoPage() {
    return (
      <div className="catalogo-page">
        <Header />

        <main>
          <CatalogoCabecalho />

          <Catalogo/>
        </main>
        <Footer />
      </div>
    )
}
  