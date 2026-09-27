import { useState } from "react";
import { Link } from "react-router-dom";
import defaultQuizzes from "../data/defaultQuizzes";

function Quizzes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Knowledge",
    "Science",
    "Technology",
    "Programming",
    "Geography",
    "History",
    "Culture",
    "Sports",
    "Fun",
    "Space",
  ];

  const filteredQuizzes = defaultQuizzes.filter((quiz) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      quiz.title.toLowerCase().includes(searchText) ||
      quiz.description.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || quiz.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="quizzes-page">

      {/* Header */}
      <section className="quizzes-header">
        <div>
          <span>DISCOVER QUIZZES</span>

          <h1>Find your next challenge.</h1>

          <p>
            Pick a quiz, test yourself, and see what you know.
          </p>
        </div>

        <Link to="/my-quizzes" className="quiz-create-btn">
          My Quizzes →
        </Link>
      </section>

      {/* Search + Filters */}
      <div className="quiz-tools">

        <div className="quiz-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search quizzes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="quiz-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Quiz Library */}
      <section className="quiz-list">

        <div className="quiz-list-heading">

          <div>
            <span>QUIZ LIBRARY</span>

            <h2>
              {filteredQuizzes.length}{" "}
              {filteredQuizzes.length === 1
                ? "quiz"
                : "quizzes"}{" "}
              to explore.
            </h2>
          </div>

          <p>Choose one and start playing.</p>

        </div>

        {filteredQuizzes.length === 0 ? (

          <div className="empty-quizzes">

            <div className="empty-quiz-icon">
              ⌕
            </div>

            <h3>No quizzes found.</h3>

            <p>
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="quiz-grid">

            {filteredQuizzes.map((quiz, index) => {

              const colors = [
                "pink",
                "blue",
                "purple",
                "yellow",
              ];

              const color =
                colors[index % colors.length];

              return (
                <div
                  className={`quiz-card quiz-${color}`}
                  key={quiz.id}
                >

                  <div className="quiz-card-top">

                    <span className="quiz-category">
                      {quiz.category}
                    </span>

                    <span className="quiz-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="quiz-card-icon">

                    {color === "pink" && "✦"}
                    {color === "blue" && "◈"}
                    {color === "purple" && "✧"}
                    {color === "yellow" && "♡"}

                  </div>

                  <h3>{quiz.title}</h3>

                  <p>{quiz.description}</p>

                  <div className="quiz-card-info">

                    <span>
                      {quiz.questions.length} Questions
                    </span>

                    <span>
                      {quiz.difficulty}
                    </span>

                  </div>

                  <Link
                    to={`/quiz/${quiz.id}`}
                    className="take-quiz-btn"
                  >
                    Take Quiz →
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

export default Quizzes;