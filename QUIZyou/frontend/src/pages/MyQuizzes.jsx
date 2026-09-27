import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    setQuizzes(savedQuizzes);
  }, []);

  return (
    <div className="my-quizzes-page">
      <section className="my-quizzes-header">
        <div>
          <span>MY QUIZZES</span>
          <h1>Your quiz collection.</h1>
          <p>
            Create, manage, and play the quizzes you've made.
          </p>
        </div>

        <Link to="/create" className="quiz-create-btn">
          + Create Quiz
        </Link>
      </section>

      <section className="my-quizzes-content">
        <div className="my-quizzes-heading">
          <div>
            <span>YOUR CREATIONS</span>
            <h2>
              {quizzes.length === 0
                ? "No quizzes yet."
                : `${quizzes.length} ${
                    quizzes.length === 1 ? "quiz" : "quizzes"
                  } created.`}
            </h2>
          </div>
        </div>

        {quizzes.length === 0 ? (
          <div className="my-quizzes-empty">
            <div className="empty-quiz-icon">✦</div>

            <h3>Create your first quiz.</h3>

            <p>
              Your quizzes will appear here once you create them.
            </p>

            <Link to="/create" className="empty-create-btn">
              Create Your First Quiz →
            </Link>
          </div>
        ) : (
          <div className="my-quiz-grid">
            {quizzes.map((quiz, index) => {
              const colors = ["pink", "blue", "purple", "yellow"];
              const color = colors[index % colors.length];

              return (
                <div
                  className={`my-quiz-card my-quiz-${color}`}
                  key={quiz.id}
                >
                  <div className="my-quiz-top">
                    <span>{quiz.category}</span>
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="my-quiz-icon">
                    {color === "pink" && "✦"}
                    {color === "blue" && "◈"}
                    {color === "purple" && "✧"}
                    {color === "yellow" && "♡"}
                  </div>

                  <h3>{quiz.title}</h3>

                  <p>{quiz.description}</p>

                  <div className="my-quiz-info">
                    <span>
                      {quiz.questions.length} Questions
                    </span>

                    <span>{quiz.difficulty}</span>
                  </div>

                  <Link
                    to={`/quiz/${quiz.id}`}
                    className="my-quiz-play-btn"
                  >
                    Take Quiz <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default MyQuizzes;