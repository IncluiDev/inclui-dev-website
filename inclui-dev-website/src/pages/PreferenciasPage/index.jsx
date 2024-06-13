import { useState } from 'react'
import headerPreferencia from '../../assets/inclui-dev-logo.png'
import rodape from '../../assets/rodape-curso.png';

import { FaRibbon } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaGlasses } from "react-icons/fa";
import { MdHearingDisabled } from "react-icons/md";
import { PiEyedropperSampleFill } from "react-icons/pi";

import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import { useTranslation } from 'react-i18next'

import './style.css';

const PreferenciasPage = () => {
    const [isToggledCega, setIsToggledCega] = useState(false);
    const [isToggledDaltonismo, setIsToggledDaltonismo] = useState(false);
    const [isToggledBaixaVisao, setIsToggledBaixaVisao] = useState(false);
    const [isToggledDislexia, setIsToggledDislexia] = useState(false);
    const [isToggledEpilepsia, setIsToggledEpilepsia] = useState(false);

    const { t } = useTranslation()

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
                <h1>{t("preferencias-titulo")}</h1>
            </header>

            <div className='container-main-preferencias'>
                <div className='container-texto-preferencias'>
                    <ul className='listaPreferencias'>
                        <li 
                            className={`item-preferencia cega ${isToggledCega ? 'active' : ''}`}
                            onClick={handleToggleCega}
                        >
                            <FaGlasses />
                            {t("preferencias-opcao-01")}
                            <button className={`option-preferencia ${isToggledCega ? 'active' : ''}`}>
                                {isToggledCega ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia daltonismo ${isToggledDaltonismo ? 'active' : ''}`}
                            onClick={handleToggleDaltonismo}
                        >
                            <FaEyeSlash />
                            {t("preferencias-opcao-02")}
                            <button className={`option-preferencia ${isToggledDaltonismo ? 'active' : ''}`}>
                                {isToggledDaltonismo ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia baixa-visao ${isToggledBaixaVisao ? 'active' : ''}`}
                            onClick={handleToggleBaixaVisao}
                        >
                            <FaRibbon />
                            {t("preferencias-opcao-03")}
                            <button className={`option-preferencia ${isToggledBaixaVisao ? 'active' : ''}`}>
                                {isToggledBaixaVisao ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia dislexia ${isToggledDislexia ? 'active' : ''}`}
                            onClick={handleToggleDislexia}
                        >
                            <MdHearingDisabled />
                            {t("preferencias-opcao-04")}
                            <button className={`option-preferencia ${isToggledDislexia ? 'active' : ''}`}>
                                {isToggledDislexia ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        <li 
                            className={`item-preferencia epilepsia ${isToggledEpilepsia ? 'active' : ''}`}
                            onClick={handleToggleEpilepsia}
                        >
                            <PiEyedropperSampleFill />
                            {t("preferencias-opcao-05")}
                            <button className={`option-preferencia ${isToggledEpilepsia ? 'active' : ''}`}>
                                {isToggledEpilepsia ? <BsToggleOn size={40}/> : <BsToggleOff size={40}/>}
                            </button>
                        </li>
                        
                        <a href='/home'>
                            <button className='button-preferencias'>
                                {t("preferencias-continuar")}
                                <FaArrowRight />
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