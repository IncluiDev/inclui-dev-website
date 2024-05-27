import './style.css'
import logo from '../../assets/inclui-dev-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';

import TiposLogin from '../../components/TiposLogin'

export default function CadastroPage() {
    return(
        <div className="container" id='cadastro-container'>
            <img src={logo} alt="Logo" className="logo" />
            
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Cadastre-se</h2>
                        <p className="description">Possui uma conta? <a href="/login" id="sign-in-btn">Conecte-se</a></p>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className='icon' />
                            <input type="text" id="fullName" placeholder="Nome Completo" />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            <input type="email" id="signUpEmail" placeholder="E-mail ou Telefone" />
                        </div>
                        <div id="inputLogin" className="input-field">
                            <FontAwesomeIcon icon={faLock} className='icon' />
                            <input id="signUpPassword" type="password" placeholder="Senha" />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEye} className='icon' />
                            <input id="confirmPassword" type="password" placeholder="Confirmar Senha" />
                        </div>

                        <input id="btn-signUp" type="submit" className="btn-cadastro" value="Cadastre-se"/>

                        <TiposLogin/>
                    </form>
                </div>
            </div>
        </div>
    );
}