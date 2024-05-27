import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function TiposLogin() {
    return (
        <section>
            <div className="line-container">
                <span className="line"></span>
                <span className="text">OU</span>
                <span className="line"></span>
            </div>

            <div className="social-media">
                <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
            </div>
        </section>
    )
}