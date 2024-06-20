import React from 'react'
import './style.css'
import pessoaDashboard from '../../assets/pessoaDashboard.png'
import userProfile from '../../assets/user-profile.png'
import { MdOutlineNotificationsActive } from "react-icons/md";
import Bolhas from '../../assets/bolhas.png'

const TopoDashboard = () => {
  return (
    <header className='topo-dashboard-container'>
      <div className='topo-dashboard'>
        <div className='saudacao-user-container'>
          <div className='bolhas-background'></div>
          <div className='saudacao-user-texto'>
            <h1>Olá, Dev!</h1>
            <p>Feliz em te ver novamente!</p>
          </div>
          <div className="pessoaImg">
            <img src={pessoaDashboard} alt="Pessoa no Dashboard" className='pessoaDashboard'/>
          </div>
        </div>
        <aside className='info-topo-container'>
          <div className='info-topo'>
            <input type="search" placeholder='Pesquisar Curso' className='pesquisa-curso' aria-label="Pesquisar Curso"/>
            <MdOutlineNotificationsActive className="notification-icon"/>
            <img src={userProfile} alt="Perfil do Usuário" className='user-profile'/>
          </div>
          <section className='cursos-dashboard'>
            <div className='curso-completo'>
              <h2>04</h2>
              <p>Cursos completos</p>
            </div>
            <div className='curso-progresso'>
              <h2>05</h2>
              <p>Cursos em progresso</p>
            </div>
          </section>
        </aside>
      </div>
    </header>
  )
}

export default TopoDashboard