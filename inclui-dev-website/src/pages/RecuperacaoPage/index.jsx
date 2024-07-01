import "./style.css";
import { useState } from "react";
import logo from "../../assets/inclui-dev-logo.png";
import imgRecuperarSenha from "../../assets/imgRecuperarSenha.svg";
import blocosRodape from "../../assets/blocosCentro.png";
import blocoMais from "../../assets/blocoMais.png";
import blocoMaisAzul from "../../assets/MaisAzul.svg";
import SwitchLanguage from '../../components/SwitchLanguage'
import { useTranslation } from 'react-i18next'
import FormRecuperacaoEmail from "../../components/FormRecuperacaoEmail";
import FormRecuperacao from "../../components/FormRecuperacao";

export default function RecuperacaoPage() {
  const { t } = useTranslation()
  const [emailRecuperado, setEmailRecuperado] = useState(false);

  const handleRecuperacaoEmail = () => {
    setEmailRecuperado(true);
  };

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
        {emailRecuperado ? 
          <FormRecuperacao/> :
          <FormRecuperacaoEmail onRecuperacaoEmail={handleRecuperacaoEmail} /> 
        }
      </div>
    </div>
  );
}
