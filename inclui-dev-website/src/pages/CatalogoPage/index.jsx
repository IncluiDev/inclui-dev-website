import Header from "../../components/Header"
import Cursos from '../../components/Cursos'
import CatalogoCabecalho from "../../components/CatalogoCabecalho"

export default function CatalogoPage() {
    return (
      <>
        <Header/>

        <main>
          <CatalogoCabecalho />
          <Cursos/>
        </main>
      </>
    )
}
  