import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);

  const [created, setCreated] = useState(false);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    if (questions.length === 1) return;

    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestion = (index, value) => {
    const updated = [...questions];

    updated[index].question = value;

    setQuestions(updated);
  };

  const updateOption = (questionIndex, optionIndex, value) => {
    const updated = [...questions];

    updated[questionIndex].options[optionIndex] = value;

    setQuestions(updated);
  };

  const updateAnswer = (index, value) => {
    const updated = [...questions];

    updated[index].answer = value;

    setQuestions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const quiz = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      difficulty: form.difficulty.value,
      questions: questions,
    };

    // Get previously created quizzes
    const existingQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    // Save the new quiz
    const updatedQuizzes = [...existingQuizzes, quiz];

    localStorage.setItem(
      "quizzes",
      JSON.stringify(updatedQuizzes)
    );

    // Show success message
    setCreated(true);

    // Move to quizzes page after the message
    setTimeout(() => {
      navigate("/quizzes");
    }, 1600);
  };

  return (
    <div className="create-page">

      {/* Success Message */}

      {created && (
        <div className="quiz-success-overlay">
          <div className="quiz-success-box">
            <div className="success-icon">✓</div>

            <h2>Quiz successfully created!</h2>

            <p>
              Your quiz has been saved.
              <br />
              Taking you to your quizzes...
            </p>

            <div className="success-loader"></div>
          </div>
        </div>
      )}

      {/* Header */}

      <div className="create-header">
        <div>
          <span>CREATE A QUIZ</span>

          <h1>Build something fun.</h1>

          <p>
            Add your questions, choose the answers, and create your own
            challenge.
          </p>
        </div>
      </div>

      <form
        className="quiz-form"
        onSubmit={handleSubmit}
      >

        {/* Quiz Details */}

        <section className="quiz-details-card">

          <div className="form-section-heading">

            <div className="form-icon pink-form-icon">
              ✦
            </div>

            <div>
              <h2>Quiz details</h2>

              <p>
                Start with the basics.
              </p>
            </div>

          </div>

          <div className="create-field">

            <label>
              Quiz title
            </label>

            <input
              name="title"
              type="text"
              placeholder="e.g. Amazing Science Facts"
              required
            />

          </div>

          <div className="create-field">

            <label>
              Description
            </label>

            <textarea
              name="description"
              placeholder="Tell people what this quiz is about..."
              rows="3"
              required
            />

          </div>

          <div className="create-row">

            <div className="create-field">

              <label>
                Category
              </label>

              <select
                name="category"
                defaultValue="Knowledge"
              >
                <option>Knowledge</option>
                <option>Science</option>
                <option>Technology</option>
                <option>Culture</option>
                <option>Fun</option>
                <option>Challenge</option>
              </select>

            </div>

            <div className="create-field">

              <label>
                Difficulty
              </label>

              <select
                name="difficulty"
                defaultValue="Easy"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

            </div>

          </div>

        </section>

        {/* Questions */}

        <section className="questions-section">

          <div className="questions-heading">

            <div>
              <span>QUESTIONS</span>

              <h2>
                Add your questions.
              </h2>
            </div>

            <span className="question-count">
              {questions.length}{" "}
              {questions.length === 1
                ? "Question"
                : "Questions"}
            </span>

          </div>

          <div className="question-list">

            {questions.map((item, index) => (

              <div
                className="question-card"
                key={index}
              >

                <div className="question-card-top">

                  <div className="question-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {questions.length > 1 && (
                    <button
                      type="button"
                      className="remove-question"
                      onClick={() =>
                        removeQuestion(index)
                      }
                    >
                      Remove
                    </button>
                  )}

                </div>

                {/* Question */}

                <div className="create-field">

                  <label>
                    Question
                  </label>

                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) =>
                      updateQuestion(
                        index,
                        e.target.value
                      )
                    }
                    placeholder="Write your question here..."
                    required
                  />

                </div>

                {/* Options */}

                <div className="options-heading">

                  <span>
                    ANSWER OPTIONS
                  </span>

                  <small>
                    Select the correct answer below
                  </small>

                </div>

                <div className="options-grid">

                  {item.options.map(
                    (option, optionIndex) => (

                      <div
                        className="option-field"
                        key={optionIndex}
                      >

                        <span>
                          {String.fromCharCode(
                            65 + optionIndex
                          )}
                        </span>

                        <input
                          type="text"
                          value={option}
                          onChange={(e) =>
                            updateOption(
                              index,
                              optionIndex,
                              e.target.value
                            )
                          }
                          placeholder={`Option ${
                            optionIndex + 1
                          }`}
                          required
                        />

                      </div>

                    )
                  )}

                </div>

                {/* Correct Answer */}

                <div className="correct-answer">

                  <label>
                    Correct answer
                  </label>

                  <select
                    value={item.answer}
                    onChange={(e) =>
                      updateAnswer(
                        index,
                        e.target.value
                      )
                    }
                    required
                  >

                    <option value="">
                      Select the correct option
                    </option>

                    <option value="0">
                      Option A
                    </option>

                    <option value="1">
                      Option B
                    </option>

                    <option value="2">
                      Option C
                    </option>

                    <option value="3">
                      Option D
                    </option>

                  </select>

                </div>

              </div>

            ))}

          </div>

          {/* Add Question */}

          <button
            type="button"
            className="add-question-btn"
            onClick={addQuestion}
          >
            <span>+</span>
            Add Another Question
          </button>

        </section>

        {/* Submit */}

        <div className="create-submit">

          <p>
            Your quiz will be saved when you create it.
          </p>

          <button
            type="submit"
            className="publish-btn"
            disabled={created}
          >
            Create Quiz
            <span>→</span>
          </button>

        </div>

      </form>

    </div>
  );
}

export default CreateQuiz;