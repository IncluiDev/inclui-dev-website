import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import lateralCard from '../../assets/lateralCard.png';
import imgCurso1 from '../../assets/imgCursoAzul.png'
import CursosCard from '../CursosCard';

export default function Cursos() {
    return(
        <div className="main">
            <div className="container-cursos">
                <h1>Todos nossos cursos Java</h1>
                <nav className='menuCurso'>
                    <ul>
                        <li className="itemAtivo">Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Kotlin</li>
                    </ul>
                </nav>
                <div className='containerCard'>
                    <div className='lateralCard'>
                        <img src={lateralCard} alt="Lateral Card"/>
                    </div>
                    <div className='containerPrincipal'>
                        <CursosCard
                            imgSrc={imgCurso1}
                            courseName="Crie sua primeira aplicação web Java"
                            courseTag="Java"
                            descricaoCurso=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolorem id? Illum aliquid magnam ducimus possimus delectus exercitationem iste illo nemo rerum consequuntur, repellendus quos! Facilis provident eos perspiciatis."
                            progress="80"

                        />
                         <CursosCard
                            imgSrc={imgCurso1}
                            courseName="Crie sua primeira aplicação web Java"
                            courseTag="Java"
                            descricaoCurso=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolorem id? Illum aliquid magnam ducimus possimus delectus exercitationem iste illo nemo rerum consequuntur, repellendus quos! Facilis provident eos perspiciatis."
                            progress="80"
                        />
                         <CursosCard
                            imgSrc={imgCurso1}
                            courseName="Crie sua primeira aplicação web Java"
                            courseTag="#Java"
                            descricaoCurso=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolorem id? Illum aliquid magnam ducimus possimus delectus exercitationem iste illo nemo rerum consequuntur, repellendus quos! Facilis provident eos perspiciatis."
                            progress="80"
                        />
                    </div>
                    <div className='lateralCard'>
                        <img src={lateralCard} alt="Lateral Card"/>
                    </div>
                </div>
                <div className='blocos1'>
                    <img src={blocosCentro} alt="blocosCentro"/>
                </div>
            </div>
        </div>
    )
}