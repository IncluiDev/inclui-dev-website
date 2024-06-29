import { useState } from "react";
import "./style.css";
import logo from "../../assets/inclui-dev-logo.png";

import { FaUser } from "react-icons/fa6";
import { FaEnvelope, FaLock, FaCalendarAlt, FaEye } from "react-icons/fa";

import imgCadastro from "../../assets/imgCadastro.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisVerde from "../../assets/MaisVerde.svg";
import SwitchLanguage from '../../components/SwitchLanguage'
import { useTranslation } from 'react-i18next'

import { WebClient } from '../../helpers/api/WebClient';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    perfil: "USUARIO",
    dataNascimento: "",
    senha: "",
  });
  const { t } = useTranslation()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    WebClient.exchange("/usuario", "POST", formData)
      .then(() => console.log("Success"))
      .catch(() => console.log("Error"))
  };

  return (
    <div className="container" id="cadastro-container">
      <div className="header-informations">
        <SwitchLanguage/>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />
      <div className="left-side">
        <h2>{t("cadastro-side-subtitulo")} </h2>
        <p>
          {t("cadastro-side-descricao")}
        </p>
        <img src={imgCadastro} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">{t("cadastro-titulo")}</h2>
            <p className="description">
              {t("cadastro-descricao-login")}{" "}
              <a href="/login" id="sign-in-btn">
                {t("cadastro-button-login")}
              </a>
            </p>

            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder={t("cadastro-input-nome")}
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("cadastro-input-email")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                placeholder="Data de nascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>

            <div id="inputLogin" className="input-field">
              <FaLock className="icon" />
              <input
                id="senha"
                type="password"
                name="senha"
                placeholder={t("cadastro-input-senha")}
                value={formData.senha}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FaEye className="icon" />
              <input
                id="confirmPassword"
                type="password"
                placeholder={t("cadastro-input-senha-verificacao")}
              />
            </div>
            
            <p className="description">
              {t("cadastro-descricao-responsavel")}{" "}
              <a href="/responsavel" id="sign-in-btn">
                {t("cadastro-button-responsavel")}
              </a>
            </p>

            <input
              id="btn-signUp"
              type="submit"
              className="btn-cadastro"
              value={t("cadastro-button-cadastrar")}
            />
              <a href="/home" className="description" id="sign-in-btn">
                {t("pagina-inicial")}
              </a>
          </form>
        </div>
      </div>
    </div>
  );
}
