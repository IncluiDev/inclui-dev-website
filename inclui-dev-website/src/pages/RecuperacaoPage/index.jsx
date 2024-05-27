import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/inclui-dev-logo.png'

export default function RecuperacaoPage() {
    return(
        <div className="container" id='recuperacao-container'>
            <img src={logo} alt="Logo" className="logo" />
            
            <div className="password-recovery-container">
                <form action="#" className="password-recovery-form">
                    <h2 className="title">Recuperação de Senha</h2>
                    <p className="description">Por favor, insira seu e-mail cadastrado para recuperar sua senha.</p>
                    
                    <div className="input-field">
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <input type="email" id="recoveryEmail" placeholder="E-mail cadastrado" required />
                    </div>

                    <input type="submit" value="Enviar" className="btn-recuperacao solid" />
                    <a href="/login" id="back-to-login">Conecte-se</a>
                </form>
            </div>
        </div>
    );
}