import './style.css';

const DetalhamentoIntroducao = ( props ) => {
  return (
    <section className='container-detalhamento'>
      <div className='content-detalhamento'>
        <span className='icon-curso'>
          <img src={props.imagem} alt="" />
        </span>

        <div className='titulo-curso-detalhamento'>
          <h2>{props.area || "Teste"} | {props.horasDuracao} horas</h2>
          <h1>{props.nome || "Teste"}</h1>

          <div className='container-tag'>
          {
            Array.isArray(props.tags) && props.tags.map((tag, index) => (
              <h5 key={index} className='tag-curso'>{tag}</h5>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalhamentoIntroducao;