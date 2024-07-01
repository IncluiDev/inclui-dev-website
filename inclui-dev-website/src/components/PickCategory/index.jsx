import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Category from "../../assets/category.svg";
import "./style.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-content">
          <div className="category-text">
            <h2 id="text-h2">Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
            {quizState.questions.map((question) => (
              <button
                onClick={() => chooseCategoryAndReorderQuestions(question.category)}
                key={question.category}
              >
                {question.category}
              </button>
            ))}
          </div>
          <img src={Category} alt="Category" className="category-image" />
        </div>
      </div>
    </section>
  );
};

export default PickCategory;