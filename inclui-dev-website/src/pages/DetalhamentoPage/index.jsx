import CabecalhoCurso from "../../components/CabecalhoCurso";
import DetalhamentoIntroducao from "../../components/DetalhamentoIntroducao";
import Header from "../../components/Header";
import InfoDetalhamento from "../../components/InfoDetalhamento";
import { api } from "../../lib/axios/axios";
import { useEffect, useState } from 'react';
import { URLGetter } from "../../helpers/component/URLGetter";

export default function DetalhamentoPage() {
    const [curso, setCurso] = useState();

    async function getCurso() {
        try {
            const response = await api.get(`/curso?id=${URLGetter.getIdentification()}`);
            setCurso(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } 
    }

    useEffect(() => {
        getCurso();
    }, []);

    return (
      <>
        <Header/>
        
        <main>
          {curso ? (
            <>
              <DetalhamentoIntroducao 
                nome={curso.nome} 
                area={curso.area} 
                horasDuracao={curso.horasDuracao} 
                tags={curso.tags}
                imagem={curso.referenciaImagem}
              />
              
              <CabecalhoCurso id={curso.id}/>

              <InfoDetalhamento 
                id={curso.id}
                nome={curso.nome} 
                descricao={curso.descricao}
                professor={curso.professor}
              />
            </>
          ) : (
            <p>Loading...</p> 
          )}
        </main>
      </>
    )
}