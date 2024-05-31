import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

import './style.css'


export default function Planos(){
    return(
        <section className="Planos">
            <div className='card-planos'>
                <div className="card-title-planos">
                    <h2>Gratuito</h2>
                    <p></p>
                </div>
                <div className="card-content-plano">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} size="sm" /></li>
                        <li><FontAwesomeIcon icon={faCheck} size="sm" /></li>
                        <li><FontAwesomeIcon icon={faCheck} size="sm" /></li>
                        <li><FontAwesomeIcon icon={faXmark} size="sm"/></li>
                        <li><FontAwesomeIcon icon={faXmark} size="sm"/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}