import './style.css';
import { FaFacebookF, FaGoogle } from "react-icons/fa";

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
                    <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                    <FaGoogle />
                </a>
            </div>
        </section>
    )
}