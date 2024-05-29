import CabecalhoCurso from "../../components/CabecalhoCurso"
import DetalhamentoIntroducao from "../../components/DetalhamentoIntroducao"
import Header from "../../components/Header"
import InfoDetalhamento from "../../components/InfoDetalhamento"


export default function DetalhamentoPage() {
    return (
      <>
        <Header/>

        <main>
          <DetalhamentoIntroducao/>
          <CabecalhoCurso/>
          <InfoDetalhamento/>
        </main>
      </>
    )
}