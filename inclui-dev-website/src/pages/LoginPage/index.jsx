// src/pages/LoginPage/index.jsx
import "./style.css";

import { FaUser, FaLock } from "react-icons/fa6";
import logo from "../../assets/inclui-dev-logo.png";
import imgLogin from "../../assets/imgLogin.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisVerde from "../../assets/MaisVerde.svg";
import TiposLogin from "../../components/TiposLogin";
import SwitchLanguage from '../../components/SwitchLanguage';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useAuth } from "../../helpers/auth/hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/Notification/Notification';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); 
  const { handleLogin } = useAuth()
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setLoginStatus("invalid-email");
      return;
    }

    if (password.length === 0) {
      setLoginStatus("invalid-password");
      return;
    }

    if (await handleLogin(email, password)) {
      setLoginStatus("success");
      navigate("/dashboard");
    } else {
      setLoginStatus("error");
    }

    setTimeout(() => setLoginStatus(""), 3000);
  };

  return (
    <div className="container" id="login-container">
      <Notification status={loginStatus} />
      
      <div className="header-informations">
        <SwitchLanguage />
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />

      <div className="left-side">
        <h2>{t("login-side-subtitulo")}</h2>
        <p>{t("login-side-descricao")}</p>
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
              <FaUser className="icon" />
              <input
                type="text"
                id="emailLogin"
                placeholder={t("login-input-email")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <FaLock className="icon" />
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
