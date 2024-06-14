import CabecalhoCurso from "../../components/CabecalhoCurso";
import DetalhamentoIntroducao from "../../components/DetalhamentoIntroducao";
import Header from "../../components/Header";
import InfoDetalhamento from "../../components/InfoDetalhamento";
import Loader from '../../components/Loader';
import Footer from "../../components/Footer";
import { useEffect, useState } from 'react';
import { URLGetter } from "../../helpers/component/URLGetter";
import { WebClient } from '../../helpers/api/WebClient';

export default function DetalhamentoPage() {
    const [curso, setCurso] = useState(null);

    useEffect(() => {
      WebClient.exchange(`/curso?id=${URLGetter.getIdentification()}`, "GET")
            .then(response => response.json())
            .then(data => setCurso(data))
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
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

              <Footer/>
            </>
          ) : (
            <Loader/>
          )}
        </main>
      </>
    )
}