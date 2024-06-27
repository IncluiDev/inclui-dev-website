import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './style.css';

export default function EquipeCard(props) {
    return (
        <div className="EquipeCard">
            <div className='container-img-card' style={{ backgroundColor: props.cor }}>
                <img src={props.foto} alt={props.nome} />
            </div>

            <div className='card-below'>
                <p className='equipe-nome'>{props.nome}</p>
                <p>{props.funcao}</p>

                <div className="redes-sociais">
                    {props.github && (
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub color={"#FF725E"} id='githubIcon' className='icons' />
                        </a>
                    )}
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color={"#4D8F9A"} id='linkedinIcon' className='icons' />
                    </a>
                    <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram color={"#63AB72"} id='instagramIcon' className='icons' />
                    </a>
                </div>
            </div>
        </div>
    )
}