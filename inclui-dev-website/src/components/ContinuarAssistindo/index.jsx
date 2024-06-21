import './style.css'
import jsCurso from '../../assets/jsCurso.png'

const ContinuarAssistindo = (props) => {
  return (
    <section className='continuar-assistindo-container'>
      <h1>Continuar Assistindo</h1>

      <aside className='curso-continuar-assistindo'>

        <div className='info-continuar-assistindo'>
          <img src={jsCurso} alt="" className='curso-icon'/>
          
          <h2>JS Para iniciantes</h2>
          <p>By <span className='nome-tutor'>Gustavo Guanabara</span></p>

          <div className="porcentagem-curso">
            <h4>Progresso</h4>
            <div id="progress-container">
              <div id="progress-bar" style={{ width: `${props.progress}%` }}>
              </div>
              <p>{props.progress}55%</p>
            </div>
          </div>
        </div>

        <img src={jsCurso} alt="" className='curso-icon'/>
        
        <div className='info-continuar-assistindo'>
          <h2>JS Para iniciantes</h2>
          <p>By <span className='nome-tutor'>Gustavo Guanabara</span></p>
          <div className="porcentagem-curso">
            <h4>Progresso</h4>
            <div id="progress-container">
              <div id="progress-bar" >
              </div>
              <p>55%</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default ContinuarAssistindo