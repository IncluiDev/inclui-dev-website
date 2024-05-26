import './index.css'
import logo from '../../assets/inclui-dev-logo.png'

export default function LoginPage() {
    return(
    <div className="container">
        <img src={logo} alt="Logo" className="logo"/>

        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Login</h2>
                    
                    <p className="description">Não tem uma conta? <a href="#" id="sign-up-btn">Cadastre-se</a></p>    

                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" id="emailLogin" placeholder="E-mail ou Telefone" />
                    </div>

                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input id="passwordLogin" type="password" placeholder="Senha" />
                    </div>

                    <a href="#" id="forgot-password-link">Esqueci minha senha</a>

                    <input type="submit" value="Entrar" id="btn-login" className="btn solid" />

                    <div className="line-container">
                        <span className="line"></span>
                        <span className="text">OU</span>
                        <span className="line"></span>
                    </div>

                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                </form>

                <form action="#" className="sign-up-form">
                    <img src="img/logo.svg" alt="Logo" className="logo-signup"/>
                    <h2 className="title">Cadastre-se</h2>
                    <p className="description">Possui uma conta? <a href="#" id="sign-in-btn">Conecte-se</a></p>   
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" id="fullName" placeholder="Nome Completo" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" id="signUpEmail" placeholder="E-mail ou Telefone" />
                    </div>
                    <div id="inputLogin" className="input-field">
                        <i className="fas fa-lock"></i>
                        <input id="signUpPassword" type="password" placeholder="Senha" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-eye"></i>
                        <input id="confirmPassword" type="password" placeholder="Confirmar Senha" />
                    </div>
                    <input id="btn-signUp" type="submit" className="btn" value="Cadastre-se" />
                    <div className="line-container">
                        <span className="line"></span>
                        <span className="text">OU</span>
                        <span className="line"></span>
                      </div>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}