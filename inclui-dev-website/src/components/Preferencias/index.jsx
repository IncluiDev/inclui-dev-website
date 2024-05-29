import React, { useState } from 'react'
import PCDpessoa from '../../assets/PCDs icon.png'
import headerPreferencia from '../../assets/header-preferencias.png'
import './style.css'
import { FaEye } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

const Preferencias = () => {
    const [isToggledCega, setIsToggledCega] = useState(false);
    const [isToggledDaltonismo, setIsToggledDaltonismo] = useState(false);
    const [isToggledBaixaVisao, setIsToggledBaixaVisao] = useState(false);
    const [isToggledDislexia, setIsToggledDislexia] = useState(false);
    const [isToggledEpilepsia, setIsToggledEpilepsia] = useState(false);

    const handleToggleCega = () => {
        setIsToggledCega(!isToggledCega);
    };

    const handleToggleDaltonismo = () => {
        setIsToggledDaltonismo(!isToggledDaltonismo);
    };

    const handleToggleBaixaVisao = () => {
        setIsToggledBaixaVisao(!isToggledBaixaVisao);
    };

    const handleToggleDislexia = () => {
        setIsToggledDislexia(!isToggledDislexia);
    };

    const handleToggleEpilepsia = () => {
        setIsToggledEpilepsia(!isToggledEpilepsia);
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
                            <button onClick={handleToggleCega} className='option-preferencia'>
                                {isToggledCega ? <BsToggleOff  size={30}/> : <BsToggleOn size={30}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaEye />
                            Daltonismo
                            <button onClick={handleToggleDaltonismo} className='option-preferencia'>
                                {isToggledDaltonismo ? <BsToggleOff  size={30}/> : <BsToggleOn size={30}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaEye />
                            Baixa Visão
                            <button onClick={handleToggleBaixaVisao} className='option-preferencia'>
                                {isToggledBaixaVisao ? <BsToggleOff  size={30}/> : <BsToggleOn size={30}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaBrain />
                            Dislexia
                            <button onClick={handleToggleDislexia} className='option-preferencia'>
                                {isToggledDislexia ? <BsToggleOff  size={30}/> : <BsToggleOn size={30}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaBrain />
                            Epilepsia
                            <button onClick={handleToggleEpilepsia} className='option-preferencia'>
                                {isToggledEpilepsia ? <BsToggleOff  size={30}/> : <BsToggleOn size={30}/>}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Preferencias;
