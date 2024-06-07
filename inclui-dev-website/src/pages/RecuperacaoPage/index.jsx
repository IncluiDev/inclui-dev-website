import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/inclui-dev-logo.png";
import imgRecuperarSenha from "../../assets/imgRecuperarSenha.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisAzul from "../../assets/MaisAzul.svg";
import SwitchLanguage from '../../components/SwitchLanguage'
import { useTranslation } from 'react-i18next'

export default function RecuperacaoPage() {
  const { t } = useTranslation()

  return (
    <div className="container" id="recuperacao-container">
      <div className="header-informations">
        <SwitchLanguage/>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisAzul} alt="" className="icone-mais" />
      
      <div className="left-side">
        <h2>{t("recuperacao-side-subtitulo")}</h2>
        <p>{t("recuperacao-side-descricao")}</p>
        <img src={imgRecuperarSenha} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="password-recovery-container">
        <form action="#" className="password-recovery-form">
          <h2 className="title">{t("recuperacao-titulo")}</h2>
          <p className="description">
            {t("recuperacao-legenda")}
          </p>

          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              id="recoveryEmail"
              placeholder={t("recuperacao-input-email")}
              required
            />
          </div>

          <input
            type="submit"
            value={t("recuperacao-button-enviar")}
            className="btn-recuperacao solid"
          />
          <a href="/login" id="back-to-login">
            {t("recuperacao-button-login")}
          </a>
        </form>
      </div>
    </div>
  );
}
