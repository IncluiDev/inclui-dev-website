import './style.css'
import pessoaDashboard from '../../assets/pessoaDashboard.png'

const TopoDashboard = (props) => {
  return (
    <header className='topo-dashboard-container'>
      <div className='topo-dashboard'>
        <div className='saudacao-user-container'>
          <div className='bolhas-background'></div>
          <div className='saudacao-user-texto'>
            <h1>Olá, {props.nome || "Dev"}!</h1>
            <p>Feliz em te ver novamente!</p>
          </div>
          <div className="pessoaImg">
            <img src={pessoaDashboard} alt="Pessoa no Dashboard" className='pessoaDashboard' />
          </div>
        </div>

        <aside className='info-topo-container'>
          <section className='cursos-dashboard'>
            <div className='curso-progresso'>
              <h2>{props.progresso || 0}</h2>
              <p>Cursos em progresso</p>
            </div>
            <div className='curso-completo'>
              <h2>{props.completo || 0}</h2>
              <p>Cursos completados</p>
            </div>
            <div className='curso-fazer'>
              <h2>{props.progresso || 0}</h2>
              <p>Cursos a fazer</p>
            </div>
          </section>
        </aside>
      </div>
    </header>
  )
}

export default TopoDashboard