import React from 'react'
import newsletterImage from '../../assets/newsletterImage.png'
import './style.css'

const NewsletterDashboard = () => {
  return (
    <main className="main-dashboard">
        <section className="newsletter-section">
            <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />
            <form className="newsletter-form" method="">
                <h2 className="newsletter-title">ENVIE <span className='text-highlight'>NEWSLETTER</span> AOS USUÁRIOS</h2>
                <input className="input-field" placeholder='Digite o assunto do e-mail' type="text" required />
                <input className="textarea-field" placeholder='Digite a mensagem do e-mail' type="text" required />
                <input className="submit-button" value="ENVIAR" type="submit" />
            </form>
        </section>
    </main>
  )
}

export default NewsletterDashboard
