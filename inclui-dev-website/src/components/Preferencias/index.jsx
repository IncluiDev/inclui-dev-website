import React from 'react'
import PCDpessoa from '../../assets/PCDs icon.png'
import headerPreferencia from '../../assets/header-preferencias.png'
import './style.css'
import { FaEye } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { useState } from 'react'
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";




const Preferencias = () => {
    
    
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


  return (
    <>
        <span className='header-preferencia'><img src={headerPreferencia} alt="" /></span>
        <div className='container-main-preferencias'>
            <div className='container-img-preferencias'>
                <img src={PCDpessoa} alt="" />
            </div>
            <div className='container-texto-preferencias'>
                <ul className='listaPreferencias'>
                    <h1>Perfis de Acessibilidade</h1>
                    <li className='item-preferencia'>
                        <FaEye />
                        Pessoa Cega
                        <button onClick={handleToggle} className='option-preferencia'>
                            {isToggled ? <BsToggleOff /> : <BsToggleOn />}
                        </button>    
                    </li>
                    <li className='item-preferencia'>
                        <FaEye />
                        Daltonismo
                        <button onClick={handleToggle} className='option-preferencia'>
                            {isToggled ? <BsToggleOff /> : <BsToggleOn />}
                        </button>          
                    </li>
                    <li className='item-preferencia'>
                        <FaEye />
                        Baixa Visão
                        <button onClick={handleToggle} className='option-preferencia'>
                            {isToggled ? <BsToggleOff /> : <BsToggleOn />}
                        </button>    
                    </li>
                    <li className='item-preferencia'>
                        <FaBrain />
                        Dislexia
                        <button onClick={handleToggle} className='option-preferencia'>
                            {isToggled ? <BsToggleOff /> : <BsToggleOn />}
                        </button>    
                    </li>
                    <li className='item-preferencia'>
                        <FaBrain />
                        Epilepsia
                        <button onClick={handleToggle} className='option-preferencia'>
                            {isToggled ? <BsToggleOff /> : <BsToggleOn />}
                        </button>        
                    </li>
                </ul>
            </div>
        </div>
    </>
    
  )
}

export default Preferencias;