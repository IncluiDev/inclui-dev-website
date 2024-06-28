import './style.css';
import estatisticas from '../../assets/estatisticas.png';
import premiumImg from '../../assets/premiumImg.png';

const EstatisticasDashboard = () => {
  return (
    <>
      <section className='estatisticas-dashboard-container'>
        <nav className='estatisticas-nav'>
          <h1 className='titulo-dashboard'>Suas estatísticas</h1>
          <ul className='estatisticas-nav-lista'>
            <li>Horas de Aprendizado</li>
            <li>Meus cursos</li>
            <button className='mes-nav'>Mês</button>
            <div className='estatisticas-imagens'>
              <img src={estatisticas} alt="Estatísticas" className='estatisticas' />
            </div>
          </ul>
        </nav>
        <div className="card-premium">
          <div className="card-content">
            <img src={premiumImg} alt="Plano de Estatísticas" className='premiumImg' />
            <button className='button-dashboard'>Go Premium</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstatisticasDashboard;