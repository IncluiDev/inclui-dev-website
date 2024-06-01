import './style.css';
import { useNavigate } from 'react-router-dom';

const CursosCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detalhamento`); 
    };

    return (
        <div className="containerCardCursoPrincipal" onClick={handleClick}>
            <img src={props.imgSrc} alt={props.courseName} />

            <div className="infoCursoCard">
                <div className="tituloCurso">
                    <h1>{props.courseName}</h1>
                </div>
                
                <div className="tagsCurso">
                        {
                            Array.isArray(props.courseTag) && props.courseTag.map((tag, index) => (
                                <h2 key={index} className='tagCurso'><span>#</span>{tag}</h2>
                            ))
                        }
                </div>
                <div className='descricaoCurso'>
                    <h4>Descrição Curso</h4>
                    <p>{props.descricaoCurso}</p>
                </div>
                <div className="porcentagemCurso">
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