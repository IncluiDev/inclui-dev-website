import { useState } from "react";
import "./style.css";
import logo from "../../assets/inclui-dev-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../lib/axios/axios";
import imgResponsavel from "../../assets/imgResponsavel.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisVerde from "../../assets/MaisVerde.svg";
import SwitchLanguage from '../../components/SwitchLanguage'
import { useTranslation } from 'react-i18next'

export default function CadastroResponsavelPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    perfil: "RESPONSAVEL",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      await api.post("/usuario", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container" id="responsavel-container">
      <div className="header-informations">
        <SwitchLanguage/>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />
      <div className="left-side">
        <h2>{t("cadastro-responsavel-side-subtitulo")} </h2>
        <p>
          {t("cadastro-responsavel-side-descricao")}
        </p>
        <img src={imgResponsavel} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title-responsavel">{t("cadastro-responsavel-titulo")}</h2>
            <p className="description">
              {t("cadastro-responsavel-descricao")}
            </p>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder={t("cadastro-responsavel-input-nome")}
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("cadastro-responsavel-input-email")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <input
                type="text"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>

            <div id="inputLogin" className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                id="senha"
                type="password"
                name="senha"
                placeholder={t("cadastro-responsavel-input-senha")}
                value={formData.senha}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEye} className="icon" />
              <input
                id="confirmPassword"
                type="password"
                placeholder={t("cadastro-responsavel-input-senha-verificacao")}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                id="email-user"
                name="email-user"
                placeholder={t("cadastro-responsavel-input-email-adolescente")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <p className="description">
              {t("cadastro-responsavel-descricao-login")}{" "}
              <a href="/login" id="responsavel-btn">
                {t("cadastro-responsavel-button-login")}
              </a>
            </p>

            <input
              id="btn-signUp"
              type="submit"
              className="btn-responsavel"
              value={t("cadastro-responsavel-button-cadastrar")}
            />

            <a href="/home" className="description" id="responsavel-btn">
                {t("pagina-inicial")}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
