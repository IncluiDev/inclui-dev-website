import React from 'react'
import './style.css'

const InputCadastro = ({ infoLabel }) => {
  return (
    <div className="container-cadastro">
        <div className="input-area">
            <input type="text" required className='input-cadastro-professor'/>
            <div className="label-line">{infoLabel}</div>
        </div>
    </div>
  )
}

export default InputCadastro
