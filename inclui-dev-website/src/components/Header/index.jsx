import './style.css';
import { useState } from 'react';
import incluiLogo from '../../assets/inclui-dev-logo.png';
import blocos from '../../assets/blocos.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
      setSelectedItem(index);
      setIsOpen(false);
      document.body.style.overflowY = "scroll";
  };

  const toggleMenu = () => {
      setIsOpen(!isOpen);
      document.body.style.overflowY = isOpen ? "scroll" : "hidden";
  };

  const closeMenu = () => {
      setIsOpen(false);
      document.body.style.overflowY = "scroll";
  };

  return (
      <header className={isOpen ? 'ajustedHeight' : ''}>
          <div>
              <img src={incluiLogo} className='InLogo' alt="Logo" />
          </div>
          <nav className='nav-bar'>
              <ul>
                  <li>
                      <a href="/" className={selectedItem === 0 ? 'selected' : ''} onClick={() => handleItemClick(0)}> Inicio </a>
                  </li>
                  <li>
                      <a href="/#about" className={selectedItem === 1 ? 'selected' : ''} onClick={() => handleItemClick(1)}> Sobre </a>
                  </li>
                  <li>
                      <a href="/#feedback" className={selectedItem === 2 ? 'selected' : ''} onClick={() => handleItemClick(2)}> Participantes </a>
                  </li>
                  <li>
                      <a href="/#preco" className={selectedItem === 3 ? 'selected' : ''} onClick={() => handleItemClick(3)}> Planos</a>
                  </li>
                  <li>
                      <a href="/#newsletter" className={selectedItem === 4 ? 'selected' : ''} onClick={() => handleItemClick(4)}> Newsletter </a>
                  </li>
                  <li>
                      <a href="/" className={selectedItem === 5 ? 'selected' : ''} onClick={() => handleItemClick(5)}> Contato </a>
                  </li>
                  <img src={blocos} className='blocos' alt='Blocos' />
              </ul>
          </nav>

          <div onClick={toggleMenu} className={`nav ${isOpen ? 'open' : ''}`}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>

          {isOpen &&
              <nav className='nav-bar-mobile' onClick={closeMenu}>
                  <ul>
                      <li><a href="#" onClick={() => handleItemClick(0)}>Inicio</a></li>
                      <li><a href="#about" onClick={() => handleItemClick(1)}>Sobre</a></li>
                      <li><a href="#feedback" onClick={() => handleItemClick(2)}>Participantes</a></li>
                      <li><a href="#preco" onClick={() => handleItemClick(3)}>Planos</a></li>
                      <li><a href="#newsletter" onClick={() => handleItemClick(4)}>Newsletter</a></li>
                      <li><a href="/" onClick={() => handleItemClick(5)}>Contato</a></li>
                  </ul>
              </nav>
          }
      </header>
  );
}