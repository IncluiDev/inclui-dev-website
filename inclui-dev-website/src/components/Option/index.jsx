import { QuizContext } from "../../context/QuizProvider";
import "./style.css";

const Option = ({ option, selectOption, answer, hide }) => (
  <QuizContext.Consumer>
    {([quizState, dispatch]) => (
      <div className="opcao-container">
        <div
          onClick={() => selectOption()}
          className={`
            opcao
            ${quizState.answerSelected && option === answer ? "correct" : ""}
            ${quizState.answerSelected && option !== answer ? "wrong" : ""}
            ${hide ? "hide" : ""}
          `}
        >
          <p>{option}</p>
        </div>
      </div>
    )}
  </QuizContext.Consumer>
);

export default Option;