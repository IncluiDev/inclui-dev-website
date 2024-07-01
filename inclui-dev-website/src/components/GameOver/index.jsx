import { QuizContext } from "../../context/quiz";
import WellDone from "../../assets/welldone.svg";
import "./style.css";

const GameOver = () => (
  <QuizContext.Consumer>
    {([quizState, dispatch]) => (
      <div className="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>
          Você acertou {quizState.score} de {quizState.questions.length}{" "}
          perguntas.
        </p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      </div>
    )}
  </QuizContext.Consumer>
);

export default GameOver;