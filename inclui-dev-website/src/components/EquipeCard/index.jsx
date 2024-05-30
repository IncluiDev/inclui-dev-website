import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function EquipeCard(props) {
    return (
        <div className="EquipeCard">
            <div className='container-img-card'>
                <img src={props.foto} />
            </div>
            
            <p>{props.nome}</p>
            <p>{props.funcao}</p>
            
                <div className="redes-sociais">
                    <a href={props.github}><FontAwesomeIcon color={"#AB6EFF"} icon={faGithub} className='icons'/></a>
                    <a href={props.linkedin}><FontAwesomeIcon color={"#AB6EFF"} icon={faLinkedin} className='icons'/></a>
                    <a href={props.instagram}><FontAwesomeIcon color={"#AB6EFF"} icon={faInstagram}inkedin className='icons'/></a>
                </div>
        </div>

    )
}




