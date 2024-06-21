import { MdSubject, MdMessage } from 'react-icons/md';
import newsletterImage from '../../assets/newsletterImage.png';
import './style.css';

const NewsletterDashboard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = "b3duZXI6SkxFZFREdWhEcnZDanBPN2JNcVlFWk1KeGx3SGdkMHlBRUQ2dlhiYzlCTDJreHYyeFE=";

    const payload = {
      assunto: event.target.assunto.value,
      texto: event.target.texto.value,
    };

    fetch("http://localhost:8085/newsletter", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        "Authorization": `Basic ${credentials}`
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <main className="main-dashboard">
      <section className="newsletter-section">
        <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <h2 className="newsletter-title">ENVIE <span className='text-highlight'>NEWSLETTER</span> AOS USUÁRIOS</h2>

          <div className="input-container">
            <input className="textarea-field" placeholder='Digite o assunto do e-mail' name='assunto' id='assunto' type="text" required />
            <MdSubject className="icon" />
          </div>

          <div className="input-container">
            <textarea className="textarea-field" placeholder='Digite a mensagem do e-mail' name='texto' id='texto' type="text" required />
            <MdMessage className="icon" />
          </div>

          <button className="submit-button" type='submit'>Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default NewsletterDashboard;