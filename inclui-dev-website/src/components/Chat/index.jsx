import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./style.css";

import attendant from "../../assets/chat.png";
import close from "../../assets/close.png";
import minimize from "../../assets/minimize.png";
import open from "../../assets/open-chatv2.png";
import submit from "../../assets/submit.png";

export default function Chat() {
  // Refs
  const chatRef = useRef();
  const divMensagensRef = useRef();
  const inputMensagemRef = useRef();
  const finishChatRef = useRef();

  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  function handleClick() {
    chatRef.current.classList.toggle("active");
  }

  function handleFinishChatVisibility() {
    finishChatRef.current.classList.toggle("active");
  }

  function toggleChatVisibility() {
    setIsChatOpen(!isChatOpen);
  }

  function handleSendMessage() {
    if (userMessage.trim() === "") return;

    const newMessage = { text: userMessage, admin: false };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserMessage("");

    // Simulate receiving a response from the attendant
    setTimeout(handleReceiveMessage, 1000);
  }

  function handleReceiveMessage() {
    const responseMessage = { text: "Obrigado por sua mensagem! Como posso ajudar?", admin: true };
    setMessages((prevMessages) => [...prevMessages, responseMessage]);
  }

  useEffect(() => {
    if (divMensagensRef.current) {
      divMensagensRef.current.scrollTop = divMensagensRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div
        className={`chat-container ${isChatOpen ? "active" : ""}`}
        ref={chatRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="menu-actions">
          <button onClick={handleClick}>
            <img src={minimize} alt="Minimize icon" />
          </button>
          <button onClick={handleFinishChatVisibility}>
            <img src={close} alt="Close icon" />
          </button>
        </div>

        <div ref={finishChatRef} className="finish_chat_modal">
          <p className="finish_chat_modal--title">Encerrar Chat</p>
          <p className="finish_chat_modal--confirm-text">
            Todas as mensagens no chat serão apagadas. Deseja encerrar esta
            sessão?
          </p>
          <div className="finish_chat_modal--actions-wrapper">
            <button className="finish_chat_modal--cancel">Cancelar</button>
            <button className="finish_chat_modal--confirm">Finalizar agora</button>
          </div>
        </div>

        <div className="chat-menu">
          <div>
            <img className="chat-attendant-img" src={attendant} alt="Chat atendente" />
            <div>
              <h4>ATENDENTE</h4>
              <p>Olá! Como posso ajudar?</p>
            </div>
          </div>
        </div>

        <div className="chat-messages" ref={divMensagensRef}>
          {messages.map((message, index) => {
            const className = `chat-${!message.admin ? "user" : "attendant"}`;
            return (
              <p className={className} key={index}>
                {message.text}
              </p>
            );
          })}
          <ScrollChatToBottom />
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Olá, preciso de ajuda!"
            ref={inputMensagemRef}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <div onClick={handleSendMessage}>
            <img src={submit} alt="" />
          </div>
        </div>
      </div>

      {createPortal(
        <div className="chat-open" onClick={toggleChatVisibility}>
          <div className="chat-open--circle">
            <img src={open} alt="Open and close" />
            <div className="chat-open--polygon" />
          </div>
          <p className="chat-open--text">FALE CONOSCO</p>
        </div>,
        document.querySelector("body")
      )}
    </>
  );
}

function ScrollChatToBottom() {
  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return <div ref={ref} />;
}