import './style.css';
import pessoaComCelular from '../../assets/pessoaComCelular.png';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const DetalhamentoIntroducao = ( props ) => {
  return (
    <div className='container-detalhamento'>
      <span className='icon-curso'>
        <img src={props.imagem} alt="Java Icon" />
      </span>

      <div className='titulo-curso-detalhamento'>
        <h2>{props.area || "Teste"}</h2>
        <h1>{props.nome || "Teste"}</h1>
        <div className='container-tag'>
        {
          Array.isArray(props.tags) && props.tags.map((tag, index) => (
            <h5 key={index} className='tag-curso'>{tag}</h5>
          ))
        }
        </div>
      </div>
      <span className='pessoa-com-celular'><img src={pessoaComCelular} alt="Pessoa com Celular" /></span>
      <div className='detalhes-curso'>
        <ul className='lista-info-curso'>
          <li>
            <p><MdOutlineWatchLater /> Carga Horária</p>
            <p>{props.horasDuracao || "0"}h</p>
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