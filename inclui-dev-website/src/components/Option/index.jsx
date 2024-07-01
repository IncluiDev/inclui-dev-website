import { QuizContext } from "../../context/quiz";
import "./style.css";

const Option = ({ option, selectOption, answer, hide }) => (
  <QuizContext.Consumer>
    {([quizState, dispatch]) => (
      <div className="option-container">
        <div
          onClick={() => selectOption()}
          className={`
            option
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