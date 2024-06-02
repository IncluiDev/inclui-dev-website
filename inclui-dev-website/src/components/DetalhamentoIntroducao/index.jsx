import './style.css';
import javaIcon from '../../assets/javaIcon.png';
import pessoaComCelular from '../../assets/pessoaComCelular.png';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const DetalhamentoIntroducao = () => {
  return (
    <div className='container-detalhamento'>
      <span className='icon-curso'><img src={javaIcon} alt="Java Icon" /></span>
      <div className='titulo-curso-detalhamento'>
        <h2>Categoria Curso</h2>
        <h1>Titulo Curso</h1>
        <div className='container-tag'>
          <h5 className='tag-curso'>BackEnd</h5>
          <h5 className='tag-curso'>Iniciante</h5>
        </div>
      </div>
      <span className='pessoa-com-celular'><img src={pessoaComCelular} alt="Pessoa com Celular" /></span>
      <div className='detalhes-curso'>
        <ul className='lista-info-curso'>
          <li>
            <p><MdOutlineWatchLater /> Carga Horária</p>
            <p>5h</p>
          </li>
          <li>
            <p><BiSolidLike /> Avaliação</p>
            <p>5.0</p>
          </li>
        </ul>
        <ul className='lista-info-curso'>
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
  );
}

export default DetalhamentoIntroducao;