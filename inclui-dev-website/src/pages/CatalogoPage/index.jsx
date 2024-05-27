import Header from "../../components/Header"
import Cursos from '../../components/Cursos'
import CatalogoIntroducao from "../../components/CatalogoIntroducao"

export default function CatalogoPage() {
    return (
      <>
        <Header/>

        <main>
          <CatalogoIntroducao/>
          <Cursos/>
        </main>
      </>
    )
}
  