import tutorIcon from '../../assets/tutorIcon.png';
import pessoaPC from '../../assets/pessoaMexendoPc.png';
import './style.css';
import { useEffect, useState } from 'react';
import baseURL from '../../helpers/api/api'

const DetalhamentoTutor = (props) => {
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/usuario?id=${props.professor}`)
      .then(response => 
        response.json()
      )
      .then(data => 
        setProfessor(data)
      )
      .catch(error => {
        console.error('Error fetching professor:', error);
      });
  }, [props.professor]);

  return (
    <div className='tutor'>
      <div className='tutor-titulo'>
        <span className='tutorIcon'><img src={tutorIcon} alt="Tutor Icon" /></span>
        <h2>SEU TUTOR</h2>
      </div>
      {professor && (
        <div className='tutor-nome'>
          <span className='tutorProfile'><img src={professor.referenciaFoto} alt="Professor Profile" /></span>
          <div className='tutor-nomeclaturas'>
            <h4>{professor.nome} </h4>
            <p>
              Professor da <span id='spanI'>I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanL'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>Dev</span>
            </p>
          </div>
        </div>
      )}
      <span className='imgPessoaPC'><img src={pessoaPC} alt="Pessoa usando PC" /></span>
    </div>
  );
}

export default DetalhamentoTutor;