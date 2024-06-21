import React from 'react'
import InputCadastro from '../../components/InputCadastro'
import './style.css'

const CadastroProfessor = () => {
  return (
    <div className='main-cadastro-professor'>
        <InputCadastro infoLabel="Digite seu nome"/>
        <InputCadastro infoLabel="Digite seu e-mail"/>
    </div>
  )
}

export default CadastroProfessor