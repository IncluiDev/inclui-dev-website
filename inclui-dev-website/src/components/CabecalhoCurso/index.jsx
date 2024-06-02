import { useNavigate } from 'react-router-dom';
import './style.css';
import { FaPlay } from "react-icons/fa";

const CabecalhoCurso = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso`); 
  };

  return (
    <div className='cabecalho-curso-main'>
        <div className='container-cabecalho-curso'>
            <button className='continuar-curso' onClick={handleClick}>
              Continuar Curso <FaPlay />
            </button>
            <h1 className='titulo-cabecalho'>
              Tecnologia que 
              <span id='spanI'> I</span>
              <span id='spanN'>n</span>
              <span id='spanC'>c</span>
              <span id='spanI'>l</span>
              <span id='spanN'>u</span>
              <span id='spanC'>i</span>
              <span id='spanM'>+</span>
            </h1>
        </div>
    </div>
  );
}

export default CabecalhoCurso;
