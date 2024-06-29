import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "../../helpers/component/Prompt.Gemini";

import "./style.css";

import attendant from "../../assets/chat.png";
import close from "../../assets/close.png";
import minimize from "../../assets/minimize.png";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const genAI = new GoogleGenerativeAI("AIzaSyACfcC5-nZb_9_MezNHOURbYKWsVlrufHI");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default function Chat() {
  const chatRef = useRef();
  const divMensagensRef = useRef();
  const inputMensagemRef = useRef();
  const finishChatRef = useRef();

  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    chatRef.current.classList.toggle("active");
  }

  function handleFinishChatVisibility() {
    finishChatRef.current.classList.toggle("active");
  }

  function toggleChatVisibility() {
    setIsChatOpen(!isChatOpen);
  }

  async function handleSendMessage() {
    if (userMessage.trim() === "") return;

    const newMessage = { text: userMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserMessage("");
    setLoading(true);

    try {
      const result = await model.generateContent(prompt + userMessage);
      const text = await result.response.text();

      const isCode = text.includes("```");

      const aiMessage = { text: text, sender: "ai", isCode: isCode };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setLoading(false);
    } catch (error) {
      console.error("Error generating content:", error);
      setLoading(false);
    }
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
            <button className="finish_chat_modal--cancel" onClick={handleFinishChatVisibility}>Cancelar</button>
            <button className="finish_chat_modal--confirm" onClick={
              () => {
                setMessages([]);
                toggleChatVisibility()
                handleFinishChatVisibility()
              }
              }>Finalizar agora</button>
          </div>
        </div>

        <div className="chat-menu">
          <div>
            <img className="chat-attendant-img" src={attendant} alt="Chat atendente" />
            <div>
              <h4>IncluIA</h4>
              <p>Olá! Como posso ajudar?</p>
            </div>
          </div>
        </div>

        <div className="chat-messages" ref={divMensagensRef}>
          {messages.map((message, index) => {
            const className = `chat-${message.sender === "user" ? "user" : "attendant"}`;

            return (
              <p className={className} key={index}>
                {message.text}
              </p>
            );
          })}
          <ScrollChatToBottom />
        </div>

        <div className="input-container-chat">
          <input
            type="text"
            placeholder="Olá, preciso de ajuda!"
            ref={inputMensagemRef}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            disabled={loading}
          />
          <div onClick={handleSendMessage}>
            <IoSend className="icon-send-chat" />
          </div>
        </div>
      </div>

      {createPortal(
        <div className="chat-open" onClick={toggleChatVisibility}>
          <p className="chat-open-text"><IoMdChatbubbles /></p>
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