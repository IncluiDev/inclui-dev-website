import newsletterImage from '../../assets/newsletterImage.png';
import './style.css';
import { useState } from "react";

const NewsletterDashboard = () => {
  const [formData, setFormData] = useState({
    texto: "",
    assunto: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8085/newsletter", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Basic b3duZXI6SkxFZFREdWhEcnZDanBPN2JNcVlFWk1KeGx3SGdkMHlBRUQ2dlhiYzlCTDJreHYyeFE=`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="main-dashboard">
      <section className="newsletter-section">
        <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <h2 className="newsletter-title">ENVIE <span className='text-highlight'>NEWSLETTER</span> AOS USUÁRIOS</h2>

          <div className="input-container">
            <input 
            className="textarea-field" 
            placeholder='Digite o assunto do e-mail' 
            name='assunto' 
            id='assunto' 
            type="text" 
            value={formData.assunto}
            onChange={handleChange}
            required />
          </div>

          <div className="input-container">
            <textarea 
            className="textarea-field2" 
            placeholder='Digite a mensagem do e-mail' 
            name='texto' 
            id='texto' 
            type="text"
            value={formData.texto}
            onChange={handleChange} 
            required />
          </div>

          <button className="submit-button" type='submit'>Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default NewsletterDashboard;