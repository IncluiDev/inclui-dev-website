import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from "react-icons/fa";
import { WebClient } from '../../helpers/api/WebClient';

export default function FormRecuperacaoEmail({ onRecuperacaoEmail }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await WebClient.exchange("/recuperacao", "POST", { email });
            onRecuperacaoEmail();
        } catch (error) {
            console.error("Exception:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="password-recovery-form">
            <h2 className="title">{t("recuperacao-titulo")}</h2>
            <p className="description">
                {t("recuperacao-legenda")}
            </p>

            <div className="input-field">
                <FaEnvelope className="icon" />
                <input
                    type="email"
                    id="recoveryEmail"
                    placeholder={t("recuperacao-input-email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
    );
}