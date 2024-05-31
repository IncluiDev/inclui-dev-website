import './style.css';
import { useNavigate } from 'react-router-dom';

const CursosCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/curso`); 
    };

    return (
        <div className="containerCardCursoPrincipal" onClick={handleClick}>
            <img src={props.imgSrc} alt="" />

            <div className="infoCursoCard">
                <div className="tituloCurso">
                    <h1>{props.courseName}</h1>
                    <div className="tagCurso">
                        <h2><span>#</span>{props.courseTag}</h2>
                    </div>
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