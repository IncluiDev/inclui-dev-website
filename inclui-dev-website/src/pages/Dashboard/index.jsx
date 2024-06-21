import './style.css';
import ContinuarAssistindo from "../../components/ContinuarAssistindo";
import CursosDashboard from "../../components/CursosDashboard";
import Navbar from "../../components/NavbarDashoard";
import TopoDashboard from "../../components/TopoDashboard";
import { useAuth } from "../../helpers/auth/hooks/useAuth";
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';

export default function Dashboard() {
    const { checkLogin, getUser } = useAuth();
    const [user, setUser] = useState(getUser());
    const [progresso, setProgresso] = useState([]);

    if (!checkLogin()) {
        return <Navigate to="/login" />;
    }

    function getProgresso() {
        WebClient.exchange(`/progresso?usuario=${user?.id}`, "GET")
          .then(response => response.json())
          .then(data => setProgresso(data))
          .catch(() => console.error('Error fetching progress'));
    }

    useEffect(() => {
        getProgresso();
        console.log(progresso)
    }, [user]); 

    return (
      <>
        <Navbar/>

        <main className='main-dashboard'>
          <TopoDashboard nome={user?.nome} progresso={progresso.length} />
          <ContinuarAssistindo />
          <CursosDashboard/>
        </main>
      </>
    );
}