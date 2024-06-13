import './style.css';
import { useNavigate } from 'react-router-dom';
import javaIcon from '../../assets/javaIcon.png'

const CursosCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detalhamento?id=${props.id}`); 
    };

    return (
        <div className="container-card-curso-principal" onClick={handleClick}>
            <img src={javaIcon} alt={props.courseName} />

            <div className="info-curso-card">
                <div className="titulo-curso">
                    <h1>{props.courseName}</h1>
                </div>
                
                <div className="tags-curso">
                    {
                        props.courseTag.map((tag, index) => (
                            <h2 key={index} className='tag-curso'><span>#</span>{tag}</h2>
                        ))
                    }
                </div>
                <div className='descricao-curso'>
                    <h4>Descrição Curso</h4>
                    <p>{props.descricaoCurso}</p>
                </div>
                <div className="porcentagem-curso">
                    <h4>Progresso</h4>

                    <div id="progress-container">
                        <div id="progress-bar" style={{ width: `${props.progress}%` }}>
                        </div>
                        <p>{props.progress}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CursosCard;