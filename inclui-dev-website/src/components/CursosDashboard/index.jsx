import './style.css';
import jsCurso from '../../assets/jsCurso.png'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import EstatisticasDashboard from "../../components/EstatisticasDashboard";


const CursosDashboard = () => {  
    return (
      <section className='cursos-dashboard-container'>
        <div>
          <h1>Cursos</h1>

          <article className='cursos-container'>
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
                  <button className='assistir-cursos'>ASSISTIR</button>
              </div>
          </article>

          <article className='cursos-container'>
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
                  <button className='assistir-cursos'>ASSISTIR</button>
              </div>
          </article>

          <article className='cursos-container'>
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
                  <button className='assistir-cursos'>ASSISTIR</button>
              </div>
          </article>
        </div>
      
        <EstatisticasDashboard/>
      </section>
    );
  }
  
  export default CursosDashboard;
  