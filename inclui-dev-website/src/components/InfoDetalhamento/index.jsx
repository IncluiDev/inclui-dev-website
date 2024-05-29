import React, { useState } from 'react';
import './style.css';
import { FaChevronDown } from 'react-icons/fa';
import tutorIcon from '../../assets/tutorIcon.png';
import profProfile from '../../assets/profProfile.png';
import blocosCentro from '../../assets/chao-blocos.png';
import pessoaPC from '../../assets/pessoaMexendoPc.png';
import livrosOculos from '../../assets/livrosOculos.png';


const InfoDetalhamento = () => {
  const [showDescriptions, setShowDescriptions] = useState([false, false, false]);

  const descriptions = [
    "Descrição da aula 1: Nesta aula, você aprenderá a instalar a IDE.",
    "Descrição da aula 2: Nesta aula, você dará os primeiros passos em Java.",
    "Descrição da aula 3: Nesta aula, você finalizará sua primeira aplicação."
  ];

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
            <h3>Nome do Curso</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, amet. Hic tempora exercitationem deserunt in, aliquam corrupti perspiciatis? Voluptatem dolorem, blanditiis cum reiciendis maxime ipsa voluptate mollitia nulla possimus expedita!</p>
          </div>
          <span className='aulasIcon'><img src={livrosOculos} alt="" /></span>
          <div className='aulasCurso'>
            <h3>Aulas</h3>
            <ol className='listaAulas'>
              <li>
                <div className="li-content">
                  Instalando a IDE
                  <button onClick={() => toggleDescription(0)}>
                    <FaChevronDown />
                  </button>
                </div>
                {showDescriptions[0] && <p className="description">{descriptions[0]}</p>}
              </li>
              <li>
                <div className="li-content">
                  Primeiros passos em Java
                  <button onClick={() => toggleDescription(1)}>
                    <FaChevronDown />
                  </button>
                </div>
                {showDescriptions[1] && <p className="description">{descriptions[1]}</p>}
              </li>
              <li>
                <div className="li-content">
                  Finalizando sua primeira aplicação
                  <button onClick={() => toggleDescription(2)}>
                    <FaChevronDown />
                  </button>
                </div>
                {showDescriptions[2] && <p className="description">{descriptions[2]}</p>}
              </li>
            </ol>
          </div>
        </div>
        <div className='tutor'>
          <div className='tutor-titulo'>
            <span className='tutorIcon'><img src={tutorIcon} alt="" /></span>
            <h2>SEU TUTOR</h2>
          </div>
          <div className='tutor-nome'>
            <span className='tutorProfile'><img src={profProfile} alt="" /></span>
            <h4>Nome do Tutor <br />Professor da  <span id='spanI'> I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanI'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h4>
          </div>
          <span className='imgPessoaPC'><img src={pessoaPC} alt="" /></span>
        </div>
      </div>
      <div className='blocos1'>
        <img src={blocosCentro} alt="blocosCentro" />
      </div>
    </>
  );
};

export default InfoDetalhamento;
