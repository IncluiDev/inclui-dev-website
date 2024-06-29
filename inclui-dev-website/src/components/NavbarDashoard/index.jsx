import { useState } from 'react';
import './style.css'
import avatar from '../../assets/logo-dashboard.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUser, 
  faBell, 
  faChevronRight, 
  faRightFromBracket 
} from '@fortawesome/free-solid-svg-icons';

const NavbarDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav id="sidebar" className={sidebarOpen ? 'open-sidebar' : ''}>
      <div id="sidebar_content">
        <div id="user">
          <img src={avatar} id="user_avatar" alt="Avatar" />
        </div>

        <ul id="side_items">
          <li className="side-item active">
            <a href="/dashboard">
              <FontAwesomeIcon icon={faChartLine} />

              <span className="item-description">
                Dashboard
              </span>
            </a>
          </li>

          <li className="side-item">
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
              <span className="item-description">
                Perfil
              </span>
            </a>
          </li>

          <li className="side-item">
            <a href="/newsletter">
              <FontAwesomeIcon icon={faBell} />
              <span className="item-description">
                Newsletter
              </span>
            </a>
          </li>
        </ul>

        <button id="open_btn" onClick={toggleSidebar}>
          <FontAwesomeIcon id="open_btn_icon" icon={faChevronRight} />
        </button>
      </div>

      <div id="logout">
        <button id="logout_btn">
          <FontAwesomeIcon icon={faRightFromBracket} className='icon-exit'/>
          <a href="/home" className='item-description'>
              Sair
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
