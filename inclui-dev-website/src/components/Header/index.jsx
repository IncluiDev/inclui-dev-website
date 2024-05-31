import './style.css';
import { useState } from 'react';
import incluiLogo from '../../assets/inclui-dev-logo.png';
import blocos from '../../assets/blocos.png';
import SwitchLanguage from '../../components/SwitchLanguage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <header className={`header ${isOpen ? 'ajustedHeight' : ''}`}>
      <div className='InLogo'>
        <img src={incluiLogo} alt="Logo" />
      </div>

      <nav className='nav-bar'>
        <ul>
          <li>
            <a href="/home" className={selectedItem === 0 ? 'selected' : ''} onClick={() => handleItemClick(0)}>Inicio</a>
          </li>
          <li>
            <a href="/home#about" className={selectedItem === 1 ? 'selected' : ''} onClick={() => handleItemClick(1)}>Sobre</a>
          </li>
          <li>
            <a href="/home" className={selectedItem === 2 ? 'selected' : ''} onClick={() => handleItemClick(2)}>Participantes</a>
          </li>
          <li>
            <a href="/home#preco" className={selectedItem === 3 ? 'selected' : ''} onClick={() => handleItemClick(3)}>Planos</a>
          </li>
          <li>
            <a href="/catalogo" className={selectedItem === 4 ? 'selected' : ''} onClick={() => handleItemClick(4)}>Cursos</a>
          </li>
          <li>
            <a href="/login" className={selectedItem === 5 ? 'selected' : ''} onClick={() => handleItemClick(4)}>Dashboard</a>
          </li>
          <li>
            <SwitchLanguage />
          </li>
        </ul>
      </nav>

      <img src={blocos} className='blocos' alt='Blocos' />

      <FontAwesomeIcon 
        icon={faBars}
        onClick={toggleMenu} 
        className={`nav ${isOpen ? 'open' : ''} icon-navigator`} 
      />

      {isOpen &&
        <nav className='nav-bar-mobile'>
          <ul>
            <li><a href="#" onClick={() => handleItemClick(0)}>Inicio</a></li>
            <li><a href="#about" onClick={() => handleItemClick(1)}>Sobre</a></li>
            <li><a href="#feedback" onClick={() => handleItemClick(2)}>Participantes</a></li>
            <li><a href="#preco" onClick={() => handleItemClick(3)}>Planos</a></li>
            <li><a href="#newsletter" onClick={() => handleItemClick(4)}>Newsletter</a></li>
            <li><a href="/" onClick={() => handleItemClick(5)}>Contato</a></li>
            <li>
              <SwitchLanguage />
            </li>
          </ul>

          <FontAwesomeIcon 
            icon={faXmark}
            onClick={closeMenu}
            className={`nav ${isOpen ? 'open' : ''} icon-navigator`}
          />
        </nav>
      }
    </header>
  );
}
