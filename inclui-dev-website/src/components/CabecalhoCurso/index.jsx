import { useNavigate } from 'react-router-dom';
import './style.css'
import { FaPlay } from "react-icons/fa";

const CabecalhoCurso = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso`); 
  };

  return (
    <div className='cabecalhoCursoMain'>
        <div className='containerCabecalhoCurso'>
            <button className='continuarCurso' onClick={handleClick}>Continuar Curso <FaPlay /></button>
            <h1 className='tituloCabecalho'>Tecnologia que <span id='spanI'> I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanI'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h1>
        </div>
    </div>
  )
}

export default CabecalhoCurso