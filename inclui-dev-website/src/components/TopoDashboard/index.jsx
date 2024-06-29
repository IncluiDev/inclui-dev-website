import './style.css'
import pessoaDashboard from '../../assets/pessoaDashboard.png'
import userProfile from '../../assets/user-profile.png'
import { MdOutlineNotificationsActive } from "react-icons/md";

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
            <div className='curso-completo'>
              <h2>0</h2>
              <p>Cursos Completos</p>
            </div>
            <div className='curso-progresso'>
              <h2>{props.progresso || 0}</h2>
              <p>Cursos Progresso</p>
            </div>
            <div className='curso-progresso'>
              <h2>{props.progresso || 0}</h2>
              <p>Jogos Completos</p>
            </div>
            <div className='curso-progresso'>
              <h2>{props.progresso || 0}</h2>
              <p>Jogos Progresso</p>
            </div>
          </section>
        </aside>
      </div>
    </header>
  )
}

export default TopoDashboard