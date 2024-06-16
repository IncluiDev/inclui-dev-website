// src/components/Notification.jsx
import { useEffect, useState } from 'react';
import './style.css';

const Notification = ({ status, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (status) {
      setShow(true);
      
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  if (!status) return null;

  let message = '';
  switch (status) {
    case "success":
      message = "Login bem-sucedido!";
      break;
    case "error":
      message = "Falha no login. Tente novamente.";
      break;
    case "invalid-email":
      message = "Email inválido. Por favor, insira um email válido.";
      break;
    case "invalid-password":
      message = "Senha inválida. Por favor, insira uma senha.";
      break;
    default:
      message = "";
  }

  return (
    <div className={`notification ${status} ${show ? 'show' : ''}`}>
      {message}
      <button className="close-btn" onClick={() => { setShow(false); onClose(); }}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
