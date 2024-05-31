import './style.css'

import { useState } from 'react'
import headerPreferencia from '../../assets/inclui-dev-logo.png'
import rodape from '../../assets/rodape-curso.png';

import { FaEye } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

const PreferenciasPage = () => {
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
            <header className='header-preferencia'>
                <img src={headerPreferencia} alt="" />
                <h1>Perfis de Acessibilidade</h1>
            </header>

            <div className='container-main-preferencias'>
                <div className='container-texto-preferencias'>
                    <ul className='listaPreferencias'>
                        <li 
                            className={`item-preferencia ${isToggledCega ? 'active' : ''}`}
                            onClick={handleToggleCega}
                        >
                            <FaEye />
                            Pessoa Cega
                            <button className='option-preferencia'>
                                {isToggledCega ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia ${isToggledDaltonismo ? 'active' : ''}`}
                            onClick={handleToggleDaltonismo}
                        >
                            <FaEye />
                            Daltonismo
                            <button className='option-preferencia'>
                                {isToggledDaltonismo ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia ${isToggledBaixaVisao ? 'active' : ''}`}
                            onClick={handleToggleBaixaVisao}
                        >
                            <FaEye />
                            Baixa Visão
                            <button className='option-preferencia'>
                                {isToggledBaixaVisao ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia ${isToggledDislexia ? 'active' : ''}`}
                            onClick={handleToggleDislexia}
                        >
                            <FaBrain />
                            Dislexia
                            <button className='option-preferencia'>
                                {isToggledDislexia ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia ${isToggledEpilepsia ? 'active' : ''}`}
                            onClick={handleToggleEpilepsia}
                        >
                            <FaBrain />
                            Epilepsia
                            <button className='option-preferencia'>
                                {isToggledEpilepsia ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        
                        <a href='/home'>
                            <button className='button-preferencias'>
                                Salvar
                                <IoIosSave />
                            </button>
                        </a>
                    </ul>
                </div>
            </div>

            <footer>
                <img className='rodape' src={rodape} alt="Rodapé do curso"/>
            </footer>
        </>
    )
}

export default PreferenciasPage;
