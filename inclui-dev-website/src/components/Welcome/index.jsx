import { QuizContext } from "../../context/quiz";
import "./style.css";
import Quiz from "../../assets/quizShow.svg";
import fundoIncluiDev from '../../assets/fundoIncluiDev.png';
import { CircleArrowLeft } from 'lucide-react';

const Welcome = () => (
  <QuizContext.Consumer>
    {([quizState, dispatch]) => (
      <section className="welcome" style={{backgroundImage: `url(${fundoIncluiDev})`}}>
        
        <button className="back-button" onClick={() => window.history.back()}>
          <CircleArrowLeft name="chevron-left" size="50" />
        </button>

        <div className="card-welcome">
          <h2 className="welcome-title">Seja bem-vindo</h2>
          <div className="welcome-content">
            <p className="welcome-text">Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
              Iniciar
            </button>
          </div>
          <img src={Quiz} alt="Início do Quiz" className="quizImg" />
        </div>
      </section>
    )}
  </QuizContext.Consumer>
);

export default Welcome;