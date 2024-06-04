import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/inclui-dev-logo.png";
import imgLogin from "../../assets/imgLogin.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisVerde from "../../assets/MaisVerde.svg";

import TiposLogin from "../../components/TiposLogin";

export default function LoginPage() {
  return (
    <div className="container" id="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />
      <div className="left-side">
        <h2>NOVO AQUI?</h2>
        <p>Caso seja novo aqui, aperte em cadastre-se, e preencha os dados pedidos.</p>
        <img src={imgLogin} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Login</h2>
            <p className="description">
              Não tem uma conta?{" "}
              <a href="/cadastro" id="sign-up-btn">
                Cadastre-se
              </a>
            </p>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                id="emailLogin"
                placeholder="E-mail ou Telefone"
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input id="passwordLogin" type="password" placeholder="Senha" />
            </div>

            <a href="/recuperacao" id="forgot-password-link">
              Esqueci minha senha
            </a>
            <input
              type="submit"
              value="Entrar"
              id="btn-login"
              className="btn-login solid"
            />

            <TiposLogin />
          </form>
        </div>
      </div>
    </div>
  );
}
