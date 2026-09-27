import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import defaultQuizzes from "../data/defaultQuizzes";

function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    const allQuizzes = [
      ...defaultQuizzes,
      ...savedQuizzes,
    ];

    const selectedQuiz = allQuizzes.find(
      (item) => String(item.id) === String(id)
    );

    setQuiz(selectedQuiz);
  }, [id]);

  if (!quiz) {
    return (
      <div className="take-quiz-page">
        <div className="quiz-not-found">
          <div className="not-found-icon">✦</div>

          <span>QUIZ NOT FOUND</span>

          <h1>This quiz isn't available.</h1>

          <p>
            The quiz may have been removed or the link may no
            longer be valid.
          </p>

          <Link
            to="/quizzes"
            className="back-quizzes-btn"
          >
            ← Back to Quizzes
          </Link>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / quiz.questions.length) * 100;

  const selectAnswer = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion]: optionIndex,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const submitQuiz = () => {
    let score = 0;

    quiz.questions.forEach((item, index) => {
      if (
        String(answers[index]) ===
        String(item.answer)
      ) {
        score++;
      }
    });

    const result = {
      quizId: quiz.id,
      title: quiz.title,
      category: quiz.category,
      score,
      total: quiz.questions.length,
      answers,
      questions: quiz.questions,
    };

    localStorage.setItem(
      "quizResult",
      JSON.stringify(result)
    );

    navigate("/results");
  };

  return (
    <div className="take-quiz-page">

      <div className="take-quiz-top">
        <Link
          to="/quizzes"
          className="back-link"
        >
          ← Back to Quizzes
        </Link>

        <div className="quiz-progress-text">
          Question {currentQuestion + 1} of{" "}
          {quiz.questions.length}
        </div>
      </div>

      <div className="quiz-progress">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="take-quiz-header">
        <div>
          <span>{quiz.category}</span>

          <h1>{quiz.title}</h1>

          <p>{quiz.description}</p>
        </div>

        <div className="difficulty-badge">
          {quiz.difficulty}
        </div>
      </section>

      <section className="question-wrapper">

        <div className="take-question-card">

          <div className="take-question-number">
            {String(currentQuestion + 1).padStart(2, "0")}
          </div>

          <div className="take-question-content">

            <span className="question-label">
              QUESTION {currentQuestion + 1}
            </span>

            <h2>{question.question}</h2>

            <div className="answer-list">
              {question.options.map((option, index) => {

                const selected =
                  answers[currentQuestion] === index;

                return (
                  <button
                    type="button"
                    key={index}
                    className={`take-answer ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() =>
                      selectAnswer(index)
                    }
                  >
                    <span className="answer-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="answer-text">
                      {option}
                    </span>

                    <span className="answer-check">
                      {selected ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        <div className="quiz-navigation">

          <button
            type="button"
            className="previous-btn"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          {currentQuestion ===
          quiz.questions.length - 1 ? (
            <button
              type="button"
              className="submit-quiz-btn"
              onClick={submitQuiz}
              disabled={
                answers[currentQuestion] === undefined
              }
            >
              Submit Quiz
              <span>→</span>
            </button>
          ) : (
            <button
              type="button"
              className="next-question-btn"
              onClick={nextQuestion}
              disabled={
                answers[currentQuestion] === undefined
              }
            >
              Next Question
              <span>→</span>
            </button>
          )}

        </div>

        <div className="question-dots">
          {quiz.questions.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`question-dot ${
                currentQuestion === index
                  ? "active"
                  : ""
              } ${
                answers[index] !== undefined
                  ? "answered"
                  : ""
              }`}
              onClick={() =>
                setCurrentQuestion(index)
              }
            >
              {index + 1}
            </button>
          ))}
        </div>

      </section>
    </div>
  );
}

export default TakeQuiz;