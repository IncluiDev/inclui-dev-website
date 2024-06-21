import './style.css';
import { useState } from 'react';
import incluiLogo from '../../assets/inclui-dev-logo.png';
import blocos from '../../assets/blocos.png';
import SwitchLanguage from '../../components/SwitchLanguage';

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { useTranslation } from 'react-i18next'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { t } = useTranslation()

  const handleItemClick = (index) => {
    setSelectedItem(index);
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className={`header ${isOpen ? 'ajusted-height' : ''}`}>
      <div className='in-logo'>
        <img src={incluiLogo} alt="Logo" id='logoInclui' />
      </div>

      <nav className='nav-bar'>
        <ul className='nav-desktop'>
          <li>
            <a href="/home" className={selectedItem === 0 ? 'selected' : ''} onClick={() => handleItemClick(0)}>{t("header-inicio")}</a>
          </li>
          <li>
            <a href="/home#sobre" className={selectedItem === 1 ? 'selected' : ''} onClick={() => handleItemClick(1)}>{t("header-sobre")}</a>
          </li>
          <li>
            <a href="/home#equipe" className={selectedItem === 2 ? 'selected' : ''} onClick={() => handleItemClick(2)}>{t("header-equipe")}</a>
          </li>
          <li>
            <a href="/home#planos" className={selectedItem === 3 ? 'selected' : ''} onClick={() => handleItemClick(3)}>{t("header-planos")}</a>
          </li>
          <li>
            <a href="/catalogo" className={selectedItem === 4 ? 'selected' : ''} onClick={() => handleItemClick(4)}>{t("header-cursos")}</a>
          </li>
          <li>
            <a href="/dashboard" className={selectedItem === 5 ? 'selected' : ''} onClick={() => handleItemClick(5)}>{t("header-perfil")}</a>
          </li>
          <li>
            <SwitchLanguage />
          </li>
        </ul>
      </nav>

      <img src={blocos} className='blocos' alt='Blocos' />

      <FaBars 
        onClick={toggleMenu} 
        className={`nav ${isOpen ? 'open' : ''} icon-navigator`} 
      />

      {isOpen &&
        <nav className='nav-bar-mobile'>
          <ul>
          <li>
            <a href="/home" onClick={() => handleItemClick(0)}>{t("header-inicio")}</a>
          </li>
          <li>
            <a href="/home#sobre" onClick={() => handleItemClick(1)}>{t("header-sobre")}</a>
          </li>
          <li>
            <a href="/home#equipe" onClick={() => handleItemClick(2)}>{t("header-equipe")}</a>
          </li>
          <li>
            <a href="/home#planos" onClick={() => handleItemClick(3)}>{t("header-planos")}</a>
          </li>
          <li>
            <a href="/catalogo" onClick={() => handleItemClick(4)}>{t("header-cursos")}</a>
          </li>
          <li>
            <a href="/dashboard" onClick={() => handleItemClick(5)}>{t("header-perfil")}</a>
          </li>
          <li>
            <SwitchLanguage />
          </li>
          </ul>

          <FaXmark 
            onClick={closeMenu}
            className={`nav ${isOpen ? 'open' : ''} icon-navigator close-icon`}
          />
        </nav>
      }
    </header>
  );
}