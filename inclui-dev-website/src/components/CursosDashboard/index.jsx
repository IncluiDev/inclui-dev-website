import React, { useState } from 'react';
import './style.css';
import jsCurso from '../../assets/jsCurso.png'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosStar } from "react-icons/io";


const CursosDashboard = () => {
    const [activeItem, setActiveItem] = useState('TODOS CURSOS');
  
    return (
      <section className='cursos-dashboard-container'>
        <h1>Cursos</h1>
        <aside className='cursos-dashboard'>
          <ul className='cursos-dashboard-lista'>
            {['TODOS CURSOS', 'CURSOS JAVA', 'CURSOS JAVASCRIPT', 'HTML CURSOS'].map(item => (
              <li
                key={item}
                className={`item-dashboard-lista ${activeItem === item ? 'ativo' : ''}`}
                onMouseEnter={() => setActiveItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <aside className='cursos-container'>
            <img src={jsCurso} alt="" className='curso-icon'/>
            <div className='curso-info'>
                <div>
                    <h3 className='curso-nome'>Curso de Java completo</h3>
                    <p>by <span className='nome-tutor'>Gustavo Guanabara</span></p>
                </div>
                <div className='curso-info-desc'>
                    <p> <MdOutlineWatchLater /> 6h 30min</p>
                    <p> <IoIosStar /> 4.9</p>
                </div>
                <button className='assistir-cursos'>ASSISTIR CURSO</button>
            </div>
        </aside>
        <aside className='cursos-container'>
            <img src={jsCurso} alt="" className='curso-icon'/>
            <div className='curso-info'>
                <div>
                    <h3 className='curso-nome'>Curso de Java completo</h3>
                    <p>by <span className='nome-tutor'>Gustavo Guanabara</span></p>
                </div>
                <div className='curso-info-desc'>
                    <p> <MdOutlineWatchLater /> 6h 30min</p>
                    <p> <IoIosStar /> 4.9</p>
                </div>
                <button className='assistir-cursos'>ASSISTIR CURSO</button>
            </div>
        </aside>
        <aside className='cursos-container'>
            <img src={jsCurso} alt="" className='curso-icon'/>
            <div className='curso-info'>
                <div>
                    <h3 className='curso-nome'>Curso de Java completo</h3>
                    <p>by <span className='nome-tutor'>Gustavo Guanabara</span></p>
                </div>
                <div className='curso-info-desc'>
                    <p> <MdOutlineWatchLater /> 6h 30min</p>
                    <p> <IoIosStar /> 4.9</p>
                </div>
                <button className='assistir-cursos'>ASSISTIR CURSO</button>
            </div>
        </aside>
      </section>
    );
  }
  
  export default CursosDashboard;
  