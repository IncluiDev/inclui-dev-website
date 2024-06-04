import { useNavigate } from 'react-router-dom';
import './style.css';
import { FaPlay } from "react-icons/fa";

import blocos from '../../assets/chao-blocos.png'

const CabecalhoCurso = ( props ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso?id=${props.id}&aula=0`); 
  };

  return (
    <div className='cabecalho-curso-main'>
      <img src={blocos} className='blocos-introducao'/>
        <div className='container-cabecalho-curso'>
            <button className='continuar-curso' onClick={handleClick}>
              Continuar Curso <FaPlay />
            </button>
        </div>
    </div>
  );
}

export default CabecalhoCurso;

/*
<h1 className='titulo-cabecalho'>
              Tecnologia que 
              <span id='spanI'>I</span>
              <span id='spanN'>n</span>
              <span id='spanC'>c</span>
              <span id='spanL'>l</span>
              <span id='spanN'>u</span>
              <span id='spanC'>i</span>
              <span id='spanM'>+</span>
            </h1>
*/