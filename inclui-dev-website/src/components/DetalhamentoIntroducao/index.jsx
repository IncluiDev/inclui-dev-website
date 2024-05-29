import './style.css';
import javaIcon from '../../assets/javaIcon.png';
import pessoaComCelular from '../../assets/pessoaComCelular.png';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const DetalhamentoIntroducao = () => {
  return (
    <div className='containerDetalhamento'>
      <span className='iconCurso'><img src={javaIcon} alt="" /></span>
      <div className='tituloCursoDetalhamento'>
        <h2>Categoria Curso</h2>
        <h1>Titulo Curso</h1>
        <div className='containerTag'>
          <h5 className='tagCurso'>BackEnd</h5>
          <h5 className='tagCurso'>Inciante</h5>
        </div>
      </div>
      <span className='pessoaComCelular'><img src={pessoaComCelular} alt="" /></span>
      <div className='detalhesCurso'>
        <ul className='listaInfoCurso'>
          <li>
            <p><MdOutlineWatchLater /> Carga Horária</p>
            <p>5h</p>
          </li>
          <li>
            <p><BiSolidLike /> Avaliação</p>
            <p>5.0</p>
          </li>
        </ul>
        <ul className='listaInfoCurso'>
          <li>
            <p><IoCalendar /> Publicado dia</p>
            <p>05/11/2023</p>
          </li>
          <li>
            <p><FaUserAlt /> Alunos</p>
            <p>500</p>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default DetalhamentoIntroducao;
