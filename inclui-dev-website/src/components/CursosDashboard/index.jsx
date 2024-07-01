import './style.css';

import { useEffect, useState } from 'react';
import { WebClient } from '../../helpers/api/WebClient';
import CursoCardDashboard from "../../components/CursoCardDashboard"

const CursosDashboard = () => {  
    const [cursos, setCursos] = useState([]);

    function getCursos() {
        WebClient.exchange("/curso/all", "GET")
            .then(response => response.json()) 
            .then(data => setCursos(data))
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }    

    useEffect(() => {
        getCursos();
    }, []);

    return (
      <section className='cursos-dashboard-container'>
        <div>
          <h1 className='titulo-dashboard'>Cursos</h1>

        {
            cursos.map(curso => (
                <CursoCardDashboard key={curso.id} curso={curso}/>
            ))
        }
        </div>
      </section>
    );
  }
  
  export default CursosDashboard;
  