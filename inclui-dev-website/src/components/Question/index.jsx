import { QuizContext } from "../../context/quiz";
import questionImg from "../../assets/questionImg.svg";
import Option from "../Option";

import "./style.css";

const Question = () => (
  <QuizContext.Consumer>
    {([quizState, dispatch]) => {
      const currentQuestion = quizState.questions[quizState.currentQuestion];

      const onSelectOption = (option) => {
        dispatch({
          type: "CHECK_ANSWER",
          payload: { answer: currentQuestion.answer, option },
        });
      };

      return (
        <div className="question">
          <p>
            Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
          </p>
          <h2>{currentQuestion.question}</h2>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <Option
                option={option}
                key={option}
                answer={currentQuestion.answer}
                selectOption={() => onSelectOption(option)}
                hide={quizState.optionToHide === option ? "hide" : null}
              />
            ))}
          </div>
          <div className="questions-container">
            {!quizState.answerSelected && !quizState.help && (
              <>
                {currentQuestion.tip && (
                  <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
                )}
                <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
                  Excluir uma
                </button>
              </>
            )}
            {!quizState.answerSelected && quizState.help === "tip" && (
              <p>{currentQuestion.tip}</p>
            )}
            {quizState.answerSelected && (
              <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                Continuar
              </button>
            )}
          </div>
        </div>
      );
    }}
  </QuizContext.Consumer>
);

export default Question;