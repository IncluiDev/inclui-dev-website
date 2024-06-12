import React from 'react';
import { MdSubject, MdMessage } from 'react-icons/md';
import newsletterImage from '../../assets/newsletterImage.png';
import './style.css';

const NewsletterDashboard = () => {
  return (
    <main className="main-dashboard">
      <section className="newsletter-section">
        <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />
        <form className="newsletter-form" method="">
          <h2 className="newsletter-title">ENVIE <span className='text-highlight'>NEWSLETTER</span> AOS USUÁRIOS</h2>
          <div className="input-container">
            <MdSubject className="icon" />
            <input className="textarea-field" placeholder='Digite o assunto do e-mail' type="text" required />
          </div>
          <div className="input-container">
            <MdMessage className="icon" />
            <input className="textarea-field" placeholder='Digite a mensagem do e-mail' type="text" required />
          </div>
          <button className="submit-button">ENVIAR</button>
        </form>
      </section>
    </main>
  );
}

export default NewsletterDashboard;
