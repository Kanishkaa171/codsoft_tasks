import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  MessageSquare,
  Target,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function InterviewGuide() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [openQuestion, setOpenQuestion] = useState(null);

  const preparation = [
    "Research the company",
    "Understand the job description",
    "Prepare your introduction",
    "Review your projects and experience",
    "Prepare questions to ask",
    "Test your setup before a virtual interview",
  ];

  const questions = [
    {
      question: "Tell me about yourself.",
      answer:
        "Keep your answer focused on your current background, relevant skills, projects, and what you are looking for next. Avoid turning it into a complete personal history.",
    },
    {
      question: "Why do you want this role?",
      answer:
        "Connect the role with your skills, interests, and career direction. Show that you understand what the position involves and explain why it is relevant to you.",
    },
    {
      question: "What are your strengths?",
      answer:
        "Choose strengths that are relevant to the position and support them with a short example. Specific evidence is more convincing than simply listing qualities.",
    },
    {
      question: "Why should we hire you?",
      answer:
        "Focus on the value you can bring. Connect your strongest skills, experience, projects, and willingness to learn with what the employer needs.",
    },
  ];

  const togglePreparation = (item) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const readiness = Math.round(
    (checkedItems.length / preparation.length) * 100
  );

  return (
    <>
      <main className="interview-page">
        <section className="interview-hero">
          <div className="interview-hero-content">
            <Link to="/career-insights" className="interview-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="interview-hero-grid">
              <div className="interview-hero-copy">
                <p className="section-label">INTERVIEW GUIDE</p>

                <h1>
                  Prepare with
                  <br />
                  <span>more confidence.</span>
                </h1>

                <p>
                  Interviews are an opportunity to show how you think,
                  communicate, and solve problems. Prepare properly and
                  walk into your next conversation with a clearer plan.
                </p>

                <div className="interview-meta">
                  <span>
                    <MessageSquare size={16} />
                    7 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="interview-hero-visual">
                <div className="interview-target">
                  <Target size={28} />
                  <span>READY</span>
                </div>

                <div className="interview-visual-line line-one"></div>
                <div className="interview-visual-line line-two"></div>
                <div className="interview-visual-line line-three"></div>

                <div className="interview-visual-label">
                  <small>YOUR NEXT</small>
                  <strong>INTERVIEW</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="interview-content">
          <div className="interview-main">
            <div className="interview-readiness">
              <div className="interview-readiness-top">
                <div>
                  <p className="section-label">INTERVIEW READINESS</p>
                  <h2>How prepared are you?</h2>
                </div>

                <strong>{readiness}%</strong>
              </div>

              <div className="interview-progress">
                <span style={{ width: `${readiness}%` }}></span>
              </div>

              <p>
                Complete the preparation checklist below to see your
                readiness score.
              </p>
            </div>

            <div className="interview-checklist">
              <div className="interview-checklist-heading">
                <div>
                  <p className="section-label">BEFORE THE INTERVIEW</p>
                  <h2>Prepare your essentials.</h2>
                </div>

                <Lightbulb size={22} />
              </div>

              <div className="interview-check-items">
                {preparation.map((item) => (
                  <button
                    type="button"
                    className={`interview-check-item ${
                      checkedItems.includes(item) ? "checked" : ""
                    }`}
                    key={item}
                    onClick={() => togglePreparation(item)}
                  >
                    <span className="interview-check-box">
                      {checkedItems.includes(item) && (
                        <CheckCircle2 size={17} />
                      )}
                    </span>

                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="interview-questions">
              <div className="interview-heading">
                <p className="section-label">COMMON QUESTIONS</p>

                <h2>
                  Know what you might
                  <br />
                  <span>be asked.</span>
                </h2>

                <p>
                  Review these common questions and think about how
                  your own experience could answer them.
                </p>
              </div>

              <div className="interview-question-list">
                {questions.map((item, index) => (
                  <div className="interview-question" key={index}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenQuestion(
                          openQuestion === index ? null : index
                        )
                      }
                    >
                      <span>
                        0{index + 1}
                      </span>

                      <strong>{item.question}</strong>

                      <ChevronDown
                        size={19}
                        className={
                          openQuestion === index ? "rotate" : ""
                        }
                      />
                    </button>

                    <div
                      className={`interview-answer ${
                        openQuestion === index ? "open" : ""
                      }`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="interview-sidebar">
            <div className="interview-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Don't memorize
                <br />
                <span>your answers.</span>
              </h3>

              <p>
                Prepare key points instead. Natural answers usually
                sound more confident than rehearsed speeches.
              </p>
            </div>

            <div className="interview-sidebar-card">
              <span>YOUR NEXT STEP</span>

              <h3>Find opportunities worth preparing for.</h3>

              <Link to="/jobs">
                Browse Jobs
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default InterviewGuide;