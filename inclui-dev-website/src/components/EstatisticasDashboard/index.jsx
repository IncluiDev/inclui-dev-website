import './style.css';
import estatisticas from '../../assets/estatisticas.png';
import premiumImg from '../../assets/premiumImg.png';

const EstatisticasDashboard = () => {
  return (
    <>
      <section className='estatisticas-dashboard-container'>
        <h2>Suas estatísticas</h2>
        <nav className='estatisticas-nav'>
          <ul className='estatisticas-nav-lista'>
            <li>Horas de Aprendizado</li>
            <li>Meus cursos</li>
            <button className='mes-nav'>Mês</button>
          </ul>
          <div className='estatisticas-imagens'>
            <img src={estatisticas} alt="Estatísticas" className='estatisticas' />
            </div>
            <div className="card-premium">
            
              <div className="card-content">
             
               <img src={premiumImg} alt="Plano de Estatísticas" className='premiumImg' />
               <button className='button-dashboard'>Go Premium</button>
              </div>
            </div>
          
        </nav>
      </section>
    </>
  );
};

export default EstatisticasDashboard;