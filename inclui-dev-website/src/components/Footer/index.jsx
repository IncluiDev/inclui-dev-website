import './style.css'
import { ArrowRight, NavigationArrow, EnvelopeSimple, InstagramLogo, GithubLogo, LinkedinLogo  } from 'phosphor-react'
import {  LinktreeLogo  } from "@phosphor-icons/react"

export default function Footer() {
    return(
        <footer className='footer-container'>

                <div className="custom-shape-divider-bottom-1693432336">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

            <div className='footer-content'>

                <div>
                   <h3>Links Rápidos</h3>

                   <nav>
                        <ul>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="/home">Inicio</a></li>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="/home#about">Sobre</a></li>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="#">Participantes</a></li>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="#">Planos</a></li>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="/catalogo">Cursos</a></li>
                            <li><ArrowRight className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="/login">Dashboard</a></li>
                        </ul>
                    </nav> 
                </div>

                <div>
                   <h3>Contato</h3>

                   <nav>
                    <ul>
                        <li><NavigationArrow className='footer-icon' size={20} color="#392E2E" weight="bold" /><a href="#" target='_blank'>SENAC Lapa Tito</a></li>
                        <li><EnvelopeSimple  className='footer-icon' size={20} color="#392E2E" weight="bold" /><a className='/'>incluidev.org@gmail.com</a></li>
                    </ul>
                    </nav> 
                </div>
                
                <div>
                   <h3>Siga-nos</h3>

                   <nav>
                        <ul>
                            <li>
                                <LinktreeLogo className='footer-icon' size={20} color="#392E2E" weight="bold" />
                                <a href="https://linktr.ee/incluidev">LinkTree</a>
                            </li>

                            <li>
                                <InstagramLogo  className='footer-icon' size={20} color="#392E2E" weight="bold" />
                                <a href="https://www.instagram.com/incluidev" target='_blank'>Instagram</a>
                            </li>

                            <li>
                                <GithubLogo  className='footer-icon' size={20} color="#392E2E" weight="bold"/>
                                <a href="https://github.com/IncluiDev" target='_blank'>Github</a>
                            </li>
                            
                            <li>
                                <LinkedinLogo className='footer-icon' size={20} color="#392E2E" weight="bold" />
                                <a href="https://www.linkedin.com/company/inclui-dev">LinkedIn</a>
                            </li>
                        </ul>
                    </nav> 
                </div>
            </div>
            <p>All right by @IncluiDev 2024</p>
        </footer>
    )
}