import './style.css';
import newsletter from '../../assets/newsletter.png';

import { EnvelopeSimple, WarningCircle } from 'phosphor-react'

import { useTranslation } from 'react-i18next'

export default function Newsletter() {
    const { t } = useTranslation()

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const payload = {
          email: event.target.email.value,
        };
    
        fetch("https://inclui-dev-email-api-production.up.railway.app/usuario", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error);
        });
      };

    return(
        <section className="newsletter">
            <form onSubmit={handleSubmit} className="newsletter-flex">
                <div className='content-newsletter'>
                    <h1 className="title">
                    {t("newsletter-titulo-01")} <span className="strong-newsletter">{t("newsletter-titulo-02")}</span>
                    </h1>
                    
                    <p>{t("newsletter-subtitulo")}</p>

                    <div className="flex-input">
                        <EnvelopeSimple size={32} color="#CA1BB4" className="position-input-icon" weight="bold" /> 
                        <input id="email" name="" type="email" placeholder={t("newsletter-placeholder")} required /> <br />
                        <input type="submit" value={t("newsletter-inscrever")}/>
                    </div>
                </div>
                
                <img src={newsletter} className="newsletter-img"/>
            </form>

            <div id="newsletterNotification">
                <div>
                    <EnvelopeSimple size={32} color="#CA1BB4" weight='bold'/>
                    <h2>Email enviado!</h2>
                </div>

                <p>Seu email foi enviado e está pronto para receber atualizações.</p>
            </div>

            <div id="errorNewsletterNotification">
                <div>
                    <WarningCircle size={32} color="#ff7b00" />
                        <h2>Erro ao cadastrar o email!</h2>
                </div>
                <p>Verifique se as informações cadastradas estão corretas ou tente novamente mais tarde.</p>
            </div>
        </section>
    )
}
