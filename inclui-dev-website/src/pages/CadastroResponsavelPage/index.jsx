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

export default function CadastroResponsavelPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    perfil: "RESPONSAVEL",
    dataNascimento: "",
    senha: "",
  });

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
      <img src={logo} alt="Logo" className="logo" />
      <img src={blocosRodape} alt="" className="blocos-rodape" />
      <img src={blocoMais} alt="" className="bloco-mais" />
      <img src={blocoMaisVerde} alt="" className="icone-mais" />
      <div className="left-side">
        <h2>Já possui uma conta? </h2>
        <p>
          Caso você já tenha uma conta, aperte em conecte-se, e preencha os
          dados pedidos.
        </p>
        <img src={imgResponsavel} alt="Uma mulher fazendo autenticação" />
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title-responsavel">Cadastro de Responsável</h2>
            <p className="description">
              Associe-se e receba informativos de seu adolescente 
            </p>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
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
                placeholder="E-mail"
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
                placeholder="Data de Nascimento"
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
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEye} className="icon" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirmar Senha"
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                id="email-user"
                name="email-user"
                placeholder="E-mail do adolescente"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <p className="description">
              Possui uma conta?{" "}
              <a href="/login" id="responsavel-btn">
                Conecte-se
              </a>
            </p>

            <input
              id="btn-signUp"
              type="submit"
              className="btn-responsavel"
              value="Cadastre-se"
            />

            <a href="/home" className="description" id="responsavel-btn">
                Página incial
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
