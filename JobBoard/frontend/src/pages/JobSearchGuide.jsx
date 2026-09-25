import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function JobSearchGuide() {
  const [activeGoal, setActiveGoal] = useState("First Job");
  const [checkedHabits, setCheckedHabits] = useState([]);

  const goals = [
    {
      name: "First Job",
      description:
        "Focus on entry-level roles, internships, and opportunities where you can grow while gaining professional experience.",
      focus: ["Internships", "Entry-level roles", "Skill building"],
    },
    {
      name: "Career Switch",
      description:
        "Identify transferable skills and target roles where your existing experience can create value.",
      focus: ["Transferable skills", "Relevant roles", "Networking"],
    },
    {
      name: "Next Opportunity",
      description:
        "Use your existing experience strategically and focus on roles that move your career in the direction you want.",
      focus: ["Better roles", "Career growth", "Industry fit"],
    },
  ];

  const habits = [
    "Use specific job titles",
    "Search by relevant skills",
    "Check the location and work mode",
    "Read the full job description",
    "Tailor your application",
    "Track the jobs you apply for",
  ];

  const strategies = [
    {
      number: "01",
      title: "Know what you're looking for",
      text:
        "Start with a clear target. Define the type of role, industry, location, and work arrangement that make sense for your current career stage.",
    },
    {
      number: "02",
      title: "Search with better keywords",
      text:
        "Broad searches can produce too many irrelevant results. Use specific job titles, technologies, skills, and experience levels to narrow your results.",
    },
    {
      number: "03",
      title: "Quality over quantity",
      text:
        "Applying to every job you see is rarely the best strategy. Prioritize opportunities where your skills and experience genuinely match the requirements.",
    },
    {
      number: "04",
      title: "Keep improving your approach",
      text:
        "Track what you apply for, review responses, and adjust your strategy. A job search becomes more effective when you learn from each attempt.",
    },
  ];

  const toggleHabit = (habit) => {
    setCheckedHabits((current) =>
      current.includes(habit)
        ? current.filter((item) => item !== habit)
        : [...current, habit]
    );
  };

  const currentGoal = goals.find((goal) => goal.name === activeGoal);

  return (
    <>
      <main className="search-guide-page">
        <section className="search-guide-hero">
          <div className="search-guide-hero-content">
            <Link to="/career-insights" className="search-guide-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="search-guide-hero-grid">
              <div>
                <p className="section-label">JOB SEARCH</p>

                <h1>
                  Search smarter,
                  <br />
                  <span>not harder.</span>
                </h1>

                <p className="search-guide-intro">
                  A focused job search can save time and help you find
                  opportunities that actually fit your skills, goals,
                  and experience.
                </p>

                <div className="search-guide-meta">
                  <span>
                    <Search size={16} />
                    6 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="search-guide-visual">
                <div className="search-visual-circle">
                  <Search size={30} />
                </div>

                <div className="search-visual-line search-line-one"></div>
                <div className="search-visual-line search-line-two"></div>
                <div className="search-visual-line search-line-three"></div>

                <div className="search-visual-label">
                  <small>SEARCH WITH</small>
                  <strong>INTENTION</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="search-guide-content">
          <div className="search-guide-main">
            <div className="search-goal-section">
              <div className="search-heading">
                <p className="section-label">DEFINE YOUR GOAL</p>

                <h2>
                  What are you
                  <br />
                  <span>looking for?</span>
                </h2>

                <p>
                  Choose the situation closest to where you are right
                  now.
                </p>
              </div>

              <div className="search-goal-selector">
                {goals.map((goal) => (
                  <button
                    type="button"
                    key={goal.name}
                    className={
                      activeGoal === goal.name ? "active" : ""
                    }
                    onClick={() => setActiveGoal(goal.name)}
                  >
                    <span>{goal.name}</span>
                    <ChevronRight size={17} />
                  </button>
                ))}
              </div>

              <div className="search-goal-detail">
                <div className="search-goal-icon">
                  <Target size={23} />
                </div>

                <div>
                  <p className="section-label">YOUR FOCUS</p>

                  <h3>{currentGoal.name}</h3>

                  <p>{currentGoal.description}</p>

                  <div className="search-focus-tags">
                    {currentGoal.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="search-habits">
              <div className="search-heading">
                <p className="section-label">SMART SEARCH HABITS</p>

                <h2>
                  Small changes can
                  <br />
                  <span>improve your search.</span>
                </h2>

                <p>
                  Check the habits you already use. The remaining ones
                  can become your next improvements.
                </p>
              </div>

              <div className="search-habit-grid">
                {habits.map((habit) => (
                  <button
                    type="button"
                    key={habit}
                    className={`search-habit ${
                      checkedHabits.includes(habit) ? "checked" : ""
                    }`}
                    onClick={() => toggleHabit(habit)}
                  >
                    <span className="search-habit-check">
                      {checkedHabits.includes(habit) && (
                        <CheckCircle2 size={17} />
                      )}
                    </span>

                    <span>{habit}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="search-strategy">
              <div className="search-heading">
                <p className="section-label">THE BETTER APPROACH</p>

                <h2>
                  Build a search
                  <br />
                  <span>that works for you.</span>
                </h2>
              </div>

              <div className="search-strategy-list">
                {strategies.map((strategy) => (
                  <div className="search-strategy-item" key={strategy.number}>
                    <span className="search-strategy-number">
                      {strategy.number}
                    </span>

                    <div>
                      <h3>{strategy.title}</h3>
                      <p>{strategy.text}</p>
                    </div>

                    <TrendingUp size={19} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="search-guide-sidebar">
            <div className="search-guide-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Don't just apply
                <br />
                <span>— evaluate.</span>
              </h3>

              <p>
                Before applying, ask yourself whether the role matches
                your skills, goals, and preferred working conditions.
              </p>
            </div>

            <div className="search-guide-sidebar-card">
              <span>READY TO SEARCH?</span>

              <h3>
                Find roles that
                match your goals.
              </h3>

              <Link to="/jobs">
                Search Jobs
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>

        <section className="search-guide-cta">
          <div>
            <p className="section-label">MAKE YOUR NEXT MOVE</p>

            <h2>
              Search with purpose.
              <br />
              <span>Apply with confidence.</span>
            </h2>
          </div>

          <Link to="/jobs">
            Explore Job Opportunities
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default JobSearchGuide;