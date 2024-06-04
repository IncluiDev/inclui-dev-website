import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/inclui-dev-logo.png";
import imgRecuperarSenha from "../../assets/imgRecuperarSenha.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisAzul from "../../assets/MaisAzul.svg";

export default function RecuperacaoPage() {
  return (
    <div className="container" id="recuperacao-container">
      <img src={logo} alt="Logo" className="logo" />
      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisAzul} alt="" className="icone-mais" />
      
      <div className="left-side">
        <h2>NOVA SENHA</h2>
        <p>Informe o email para o qual deseja redefinir sua senha.</p>
        <img src={imgRecuperarSenha} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="password-recovery-container">
        <form action="#" className="password-recovery-form">
          <h2 className="title">Recuperação de Senha</h2>
          <p className="description">
            Por favor, insira seu e-mail cadastrado para recuperar sua senha.
          </p>

          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              id="recoveryEmail"
              placeholder="E-mail cadastrado"
              required
            />
          </div>

          <input
            type="submit"
            value="Enviar"
            className="btn-recuperacao solid"
          />
          <a href="/login" id="back-to-login">
            Conecte-se
          </a>
        </form>
      </div>
    </div>
  );
}
