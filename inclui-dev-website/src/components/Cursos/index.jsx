import './style.css';
import blocosCentro from '../../assets/chao-blocos.png';
import lateralCard from '../../assets/lateralCard.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

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
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
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