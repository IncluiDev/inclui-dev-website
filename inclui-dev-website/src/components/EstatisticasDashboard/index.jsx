import React from 'react'
import './style.css'
import estatisticas from '../../assets/estatisticas.png'
import planoEstatisticas from '../../assets/planoEstatisticas.png'

const EstatisticasDashboard = () => {
  return (
    <>
    <section className='estatisticas-dashboard-container'>
        <h2>Suas estatisticas</h2>
        <nav className='estatisticas-nav'>
            <ul className='estatisticas-nav-lista'>
                <li>Horas de Aprendizado</li>
                <li>Meus cursos</li>
                <button className='mes-nav'>Mês</button>

            </ul>
            <img src={estatisticas} alt=""  className='estatisticas'/>
            <img src={planoEstatisticas} alt=""  className='planoEstatisticas'/>
        </nav>
    </section>
    </>
  )
}

export default EstatisticasDashboard