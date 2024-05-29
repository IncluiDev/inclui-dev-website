import './style.css'
import javaIcon from '../../assets/javaIcon.png'
import pessoaComCelular from '../../assets/pessoaComCelular.png'

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
            <p>Carga Horária</p>
            <p>5h</p>
          </li>
          <li>
            <p>Avaliação</p>
            <p>5.0</p>
          </li>
        </ul>
        <ul className='listaInfoCurso'>
          <li>
              <p>Publicado dia</p>
              <p>05/11/2023</p>
            </li>
            <li>
              <p>Alunos</p>
              <p>500</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default DetalhamentoIntroducao;
