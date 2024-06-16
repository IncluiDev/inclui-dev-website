import './style.css';

import { FaCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function LGPD() {
    const { t } = useTranslation();
    const [lgpd, setLgpd] = useState(false);

    const handleLgpd = () => {
        setLgpd(!lgpd);
    };

    return (
        lgpd ? null : (
            <div className="cookie-container">
                <div className="cookie-content">
                    <p>
                        Permito o uso de cookies, podendo coletar informações de navegação e oriundas de formulários submetidos.
                        <a href='/lgpd'> Saiba Mais...</a>
                    </p>
                    <button className="cookies-save-button" onClick={handleLgpd}>
                        Aceito <FaCheck />
                    </button>
                </div>
            </div>
        )
    );
}
