import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function EquipeCard(props) {
    return (
        <div className="EquipeCard">
            <div className='container-img-card' style={{ backgroundColor: props.cor }}>
                <img src={props.foto} />
            </div>
            <div className='card-below'>
                <p>{props.nome}</p>
                <p>{props.funcao}</p>
                <p>{props.description}</p>
                <div className="redes-sociais">
                    <a href={props.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color={"#FF725E"} id='githubIcon' icon={faGithub} className='icons' /></a>
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color={"#4D8F9A"} id='linkedinIcon' icon={faLinkedin} className='icons'/></a>
                    <a href={props.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon color={"#63AB72"} id='instagramIcon' icon={faInstagram} className='icons'/></a>
                </div>
               
            </div>
        </div>
    )
}
