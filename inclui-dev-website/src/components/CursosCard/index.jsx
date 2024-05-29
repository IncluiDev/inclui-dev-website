import React from 'react';
import './style.css';

const CursosCard = (props) => {
    return (
        <div className="containerCardCursoPrincipal">        
            <img src={props.imgSrc} alt="" />
            <div className="infoCursoCard">
                <div className="tituloCurso">
                    <h1>{props.courseName}</h1>
                    <div className="tagCurso">
                        <h2>{props.courseTag}</h2>
                    </div>
                </div>
                <div className='descricaoCurso'>
                    <h4>Descrição Curso</h4>
                    <p>{props.descricaoCurso}</p>
                </div>
                <div className="porcentagemCurso">
                    <h4>Termine seu curso</h4>
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