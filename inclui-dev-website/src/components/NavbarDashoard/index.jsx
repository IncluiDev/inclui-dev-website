import './style.css';
import incluiDevLogo from '../../assets/incluiDevLogo.png';
import navbarImg from '../../assets/navbarImg.png';
import { MdDashboardCustomize } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar(props) {
    return (
        <aside className="aside-dashboard">
            <header className="header-dashboard">
                <img src={incluiDevLogo} alt="IncluiDev Logo" />
            </header>

            <nav className="nav-dashboard">
                <a className="navLink" href="/dashboard">
                    <span className="navText">
                        <MdDashboardCustomize /> Dashboard
                    </span>
                </a>
                <a className="navLink" href="/tarifa">
                    <span className="navText">
                        <FaUser /> Perfil Usuário
                    </span>
                </a>
                <a className="navLink" href="/newsletterDashboard">
                    <span className="navText">
                        <MdEmail /> Newsletter
                    </span>
                </a>
                <a className="navbar-img-container" href="">
                    <img src={navbarImg} alt="Navbar Image" />
                </a>
            </nav>

            <a className="navLink botao-dashboard" href="/">
                <span className="navText">Go Premium</span>
            </a>
        </aside>
    );
}
