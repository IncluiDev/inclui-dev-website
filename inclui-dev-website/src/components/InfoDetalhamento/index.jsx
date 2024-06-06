import './style.css';
import { FaChevronDown } from 'react-icons/fa';
import blocosCentro from '../../assets/chao-blocos.png';
import livrosOculos from '../../assets/livrosOculos.png';
import DetalhamentoTutor from '../DetalhamentoTutor';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

const InfoDetalhamento = (props) => {
  const [showDescriptions, setShowDescriptions] = useState([false, false, false]);
  const [aulas, setAulas] = useState([]);

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
            <h3>Aulas</h3>

            <ol className='listaAulas'>
              {
                Array.isArray(aulas) && aulas.map((aula, index) => (
                  <li key={index}>
                    <div className="li-content">
                      {aula.nome}
                      <button onClick={() => toggleDescription(index)}>
                        <FaChevronDown />
                      </button>
                    </div>
                    {showDescriptions[index] && <p className="description">{aula.descricao || ""}</p>}
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
        <DetalhamentoTutor professor={props.professor} />
      </div>

      <div className='blocos1'>
        <img src={blocosCentro} alt="blocosCentro" />
      </div>
    </>
  );
};

export default InfoDetalhamento;