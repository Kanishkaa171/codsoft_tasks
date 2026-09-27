import { Link } from "react-router-dom";

function Results() {
  const result =
    JSON.parse(localStorage.getItem("quizResult")) || null;

  if (!result) {
    return (
      <div className="results-page">
        <div className="results-empty">
          <div className="results-icon">✦</div>

          <h1>No result yet.</h1>

          <p>
            Take a quiz first and your result will appear here.
          </p>

          <Link
            to="/quizzes"
            className="results-btn"
          >
            Explore Quizzes →
          </Link>
        </div>
      </div>
    );
  }

  const percentage = Math.round(
    (result.score / result.total) * 100
  );

  return (
    <div className="results-page">

      <section className="results-hero">

        <span>QUIZ COMPLETE</span>

        <h1>{result.title}</h1>

        <p>
          Here's how you did.
        </p>

        <div className="score-circle">

          <strong>{percentage}%</strong>

          <small>
            {result.score} / {result.total}
          </small>

        </div>

        <h2>
          {percentage === 100
            ? "Perfect score! ✦"
            : percentage >= 70
            ? "Great job!"
            : percentage >= 50
            ? "Nice try!"
            : "Keep practicing!"}
        </h2>

      </section>

      <section className="answer-review">

        <div className="review-heading">
          <span>ANSWER REVIEW</span>

          <h2>
            See what you got right.
          </h2>

          <p>
            Review every question and the correct answer.
          </p>
        </div>

        <div className="review-list">

          {result.questions.map(
            (question, index) => {

              const userAnswer =
                result.answers[index];

              const correctAnswer =
                Number(question.answer);

              const isCorrect =
                Number(userAnswer) ===
                correctAnswer;

              return (
                <div
                  className={`review-card ${
                    isCorrect
                      ? "review-correct"
                      : "review-wrong"
                  }`}
                  key={index}
                >

                  <div className="review-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="review-content">

                    <div className="review-status">
                      {isCorrect ? (
                        <>
                          <span>✓</span>
                          Correct
                        </>
                      ) : (
                        <>
                          <span>×</span>
                          Incorrect
                        </>
                      )}
                    </div>

                    <h3>
                      {question.question}
                    </h3>

                    <div className="review-answer-row">

                      <div>
                        <small>Your answer</small>

                        <p
                          className={
                            isCorrect
                              ? "answer-good"
                              : "answer-bad"
                          }
                        >
                          {userAnswer !== undefined
                            ? question.options[
                                Number(userAnswer)
                              ]
                            : "Not answered"}
                        </p>
                      </div>

                      {!isCorrect && (
                        <div>
                          <small>
                            Correct answer
                          </small>

                          <p className="answer-good">
                            {
                              question.options[
                                correctAnswer
                              ]
                            }
                          </p>
                        </div>
                      )}

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

        <div className="results-actions">

          <Link
            to="/quizzes"
            className="results-btn secondary-result-btn"
          >
            ← Explore More
          </Link>

          <Link
            to={`/quiz/${result.quizId}`}
            className="results-btn"
          >
            Try Again →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Results;