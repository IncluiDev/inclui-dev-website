import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/inclui-dev-logo.png";
import imgLogin from "../../assets/imgLogin.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisVerde from "../../assets/MaisVerde.svg";

import TiposLogin from "../../components/TiposLogin";

import SwitchLanguage from '../../components/SwitchLanguage'
import { useContext, useState } from "react";
import { Context } from "../../helpers/auth/AuthContext";

import { useTranslation } from 'react-i18next'

export default function LoginPage() {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation()

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="container" id="login-container">
      <div className="header-informations">
        <SwitchLanguage/>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />

      <div className="left-side">
        <h2>{t("login-side-subtitulo")}</h2>
        <p>
          {t("login-side-descricao")}
        </p>
        <img src={imgLogin} alt="Uma mulher fazendo autenticação" />
      </div>

      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">{t("login-titulo")}</h2>
            <p className="description">
            {t("login-legenda-cadastro")}{" "}
              <a href="/cadastro" id="sign-up-btn">
                {t("login-button-cadastro")}
              </a>
            </p>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                id="emailLogin"
                placeholder={t("login-input-email")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="passwordLogin"
                type="password"
                placeholder={t("login-input-senha")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="/recuperacao" id="forgot-password-link">
              {t("login-recuperacao")}
            </a>
            <input
              type="submit"
              value={t("login-button-enviar")}
              id="btn-login"
              className="btn-login solid"
            />

            <TiposLogin />
            <br />
            <a href="/home" id="back-to-home">
              {t("pagina-inicial")}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
