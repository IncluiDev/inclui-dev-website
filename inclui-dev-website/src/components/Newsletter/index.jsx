import './style.css';
import newsletter from '../../assets/newsletter.png';

import { EnvelopeSimple, WarningCircle } from 'phosphor-react'

export default function Newsletter() {

    async function newsletterAPI() {
       event.preventDefault()
    }

    return(
        <section className="newsletter">
            <form onSubmit={newsletterAPI} className="newsletter-flex">
                <div className='content-newsletter'>
                    <h1 className="title">
                        Se inscreva em nosso <span className="strong-newsletter">Newsletter!</span>
                    </h1>
                    
                    <p>Cadastre-se em nossa newsletter e receba conteúdos incríveis diretamente no seu e-mail. Não perca a oportunidade de estar sempre por dentro das nossas novidades!</p>

                    <div className="flex-input">
                        <EnvelopeSimple size={32} color="#CA1BB4" className="position-input-icon" weight="bold" /> <input id="email" name="" type="email" placeholder="Digite seu email" required /> <br />
                         <input type="submit" value="ENVIAR"/>
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
