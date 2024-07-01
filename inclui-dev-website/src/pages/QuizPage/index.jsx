import './style.css'

import { QuizContext } from "../../context/Quiz";
import GameOver from "../../components/GameOver";
import PickCategory from "../../components/PickCategory";
import Question from "../../components/Question";
import Welcome from "../../components/Welcome";

export default function QuizPage() {
    return (
      <QuizContext.Consumer>
        {([quizState, dispatch]) => (
          <div className="quiz">
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Category" && <PickCategory />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}
          </div>
        )}
      </QuizContext.Consumer>
    );
  }