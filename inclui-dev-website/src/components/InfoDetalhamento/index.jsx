import React from 'react'
import './style.css'
import tutorIcon from '../../assets/tutorIcon.png'
import profProfile from '../../assets/profProfile.png'
import blocosCentro from '../../assets/chao-blocos.png'
import pessoaPC from '../../assets/pessoaMexendoPc.png'

const InfoDetalhamento = () => {
  return (
    <>
        <div className='infoDetalhamentoContainer'>
            <div className='container-titulo-desc-detalhamento'>
                <div className='titulo-desc-detalhamento'>
                    <h3>Nome do Curso</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, amet. Hic tempora exercitationem deserunt in, aliquam corrupti perspiciatis? Voluptatem dolorem, blanditiis cum reiciendis maxime ipsa voluptate mollitia nulla possimus expedita!</p>
                </div>
                <div className='aulasCurso'>
                    <h3>Aulas</h3>
                    <ul>
                        <li>Instalando a IDE</li>
                        <li>Primeiros passos em Java</li>
                        <li>Finalizando sua primeira aplicação</li>
                    </ul>
                </div>
            </div>
            <div className='tutor'>
                <div className='tutor-titulo'>
                    <span className='tutorIcon'><img src={tutorIcon} alt="" /></span>
                    <h2>SEU TUTOR</h2>
                </div>
                <div className='tutor-nome'>
                    <span className='tutorProfile'><img src={profProfile} alt="" /></span>
                    <h4>Nome do Tutor <br />Professor da  <span id='spanI'> I</span><span id='spanN'>n</span><span id='spanC'>c</span><span id='spanI'>l</span><span id='spanN'>u</span><span id='spanC'>i</span><span id='spanM'>+</span></h4>
                </div>
                <span className='imgPessoaPC'><img src={pessoaPC} alt="" /></span>
            </div>
        </div>
        <div className='blocos1'>
            <img src={blocosCentro} alt="blocosCentro"/>
        </div>
    </>
    
  )
}

export default InfoDetalhamento