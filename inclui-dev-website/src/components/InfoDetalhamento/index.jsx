import './style.css';
import { FaChevronDown } from 'react-icons/fa';
import livrosOculos from '../../assets/livrosOculos.png';
import DetalhamentoTutor from '../DetalhamentoTutor';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

import { useTranslation } from 'react-i18next'

const InfoDetalhamento = (props) => {
  const [showDescriptions, setShowDescriptions] = useState([false, false, false]);
  const [aulas, setAulas] = useState([]);
  const { t } = useTranslation()

  useEffect(() => {
    WebClient.exchange(`/aula/all?curso=${props.id}`, "GET")
      .then(response => response.json())
      .then(data => setAulas(data))
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, [props.id]);

  const toggleDescription = (index) => {
    const updatedShowDescriptions = [...showDescriptions];
    updatedShowDescriptions[index] = !updatedShowDescriptions[index];
    setShowDescriptions(updatedShowDescriptions);
  };

  return (
    <>
      <div className='infoDetalhamentoContainer'>
        <div className='container-titulo-desc-detalhamento'>
          <div className='titulo-desc-detalhamento'>
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
          </div>
          <span className='aulasIcon'><img src={livrosOculos} alt="" /></span>
          <div className='aulasCurso'>
            <h3>{t("detalhamento-info-titulo-aula")}</h3>

            <ol className='listaAulas'>
              {
                Array.isArray(aulas) && aulas.map((aula, index) => (
                  <li key={index}>
                    <div className="li-content">
                      {aula.nome || "teste"}
                      <button onClick={() => toggleDescription(index)}>
                        <FaChevronDown />
                      </button>
                    </div>
                    {showDescriptions[index] && <p className="description">{aula.descricao || "teste"}</p>}
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
        <DetalhamentoTutor professor={props.professor} />
      </div>
    </>
  );
};

export default InfoDetalhamento;