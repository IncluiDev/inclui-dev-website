import './style.css';
import { useEffect, useState } from 'react';
import NavbarDashboard from '../../components/NavbarDashoard';
import TopoDashboard from '../../components/TopoDashboard';
import CursosDashboard from '../../components/CursosDashboard'
import { useAuth } from '../../helpers/auth/hooks/useAuth';
import { WebClient } from '../../helpers/api/WebClient';
import { Navigate } from 'react-router-dom';
import EstatisticasDashboard from '../../components/EstatisticasDashboard';

const Dashboard = () => {
  const { checkLogin, getUser } = useAuth();
  const [user, setUser] = useState(getUser());
  const [progresso, setProgresso] = useState([]);

  useEffect(() => {
    if (!checkLogin()) {
      return;
    }

    getProgresso();
  }, [checkLogin]);

  function getProgresso() {
    WebClient.exchange(`/progresso?usuario=${user?.id}`, 'GET')
      .then(response => response.json())
      .then(data => setProgresso(data))
      .catch(() => console.error('Error fetching progress'));
  }

  if (!checkLogin()) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <NavbarDashboard />
      
      <main className='main-dashboard-container-inicial'>
        <TopoDashboard />
        <CursosDashboard/>
        <EstatisticasDashboard/>
      </main>
    </div>
  );
};

export default Dashboard;
