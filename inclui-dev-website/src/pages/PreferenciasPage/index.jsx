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
                        <li className='item-preferencia'>
                            <FaEye />
                            Pessoa Cega
                            <button onClick={handleToggleCega} className='option-preferencia'>
                                {isToggledCega ? <BsToggleOff  size={40}/> : <BsToggleOn size={40}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaEye />
                            Daltonismo
                            <button onClick={handleToggleDaltonismo} className='option-preferencia'>
                                {isToggledDaltonismo ? <BsToggleOff  size={40}/> : <BsToggleOn size={40}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaEye />
                            Baixa Visão
                            <button onClick={handleToggleBaixaVisao} className='option-preferencia'>
                                {isToggledBaixaVisao ? <BsToggleOff  size={40}/> : <BsToggleOn size={40}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaBrain />
                            Dislexia
                            <button onClick={handleToggleDislexia} className='option-preferencia'>
                                {isToggledDislexia ? <BsToggleOff  size={40}/> : <BsToggleOn size={40}/>}
                            </button>
                        </li>
                        <li className='item-preferencia'>
                            <FaBrain />
                            Epilepsia
                            <button onClick={handleToggleEpilepsia} className='option-preferencia'>
                                {isToggledEpilepsia ? <BsToggleOff  size={40}/> : <BsToggleOn size={40}/>}
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
