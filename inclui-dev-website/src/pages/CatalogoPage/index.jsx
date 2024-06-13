import Header from "../../components/Header"
import Cursos from '../../components/Cursos'
import CatalogoCabecalho from "../../components/CatalogoCabecalho"
import Footer from '../../components/Footer'

export default function CatalogoPage() {
    return (
      <>
        <Header/>

        <main>
          <CatalogoCabecalho />
          <Cursos/>
        </main>
        {/* <Footer /> */}
      </>
    )
}
  