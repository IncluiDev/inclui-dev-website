import './style.css';
import { useNavigate } from 'react-router-dom';

const CursosCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detalhamento?id=${props.id}`); 
    };

    return (
        <div className="container-card-curso-principal" onClick={handleClick}>
            <img src={props.imgSrc} alt={props.courseName} />

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
            </div>
        </div>
    );
};

export default CursosCard;