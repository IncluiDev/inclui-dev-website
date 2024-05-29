import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import lateralCard from '../../assets/lateralCard.png';
import CursosCard from '../CursosCard';
import imgCursoRosa from '../../assets/imgCursoRosa.png';
import imgCursoAZul from '../../assets/imgCursoAzul.png';
import imgCursoRoxo from '../../assets/imgCursoRoxo.png';

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
                        imgSrc={imgCursoRosa}
                        courseName="Crie sua primeira aplicação web Java"
                        courseTag="#Java"
                        descricaoCurso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid repudiandae necessitatibus eius velit delectus sequi, obcaecati nihil cumque recusandae ratione blanditiis quas, mollitia repellat ab distinctio eum ea tempora."
                        progress={80}
                        
                    />
                     <CursosCard
                        imgSrc={imgCursoAZul}
                        courseName="Aplicando a Orientação a Objetos"
                        courseTag="#Java"
                        progress={56}
                        descricaoCurso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid repudiandae necessitatibus eius velit delectus sequi, obcaecati nihil cumque recusandae ratione blanditiis quas, mollitia repellat ab distinctio eum ea tempora."
                    />
                     <CursosCard
                        imgSrc={imgCursoRoxo}
                        courseName="Desenvolva uma API Rest em Java"
                        courseTag="#API"
                        progress={80}
                        descricaoCurso="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid repudiandae necessitatibus eius velit delectus sequi, obcaecati nihil cumque recusandae ratione blanditiis quas, mollitia repellat ab distinctio eum ea tempora."
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
