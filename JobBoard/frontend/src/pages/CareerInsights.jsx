import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  TrendingUp,
  Search,
  Code2,
  Briefcase,
} from "lucide-react";
import Footer from "../components/Footer.jsx";

import codingImage from "../images/person coding.webp";
import workingImage from "../images/woking person.jpg";
import teamImage from "../images/team planning.jpg";

function CareerInsights() {
  const insights = [
    {
      icon: <FileText size={21} />,
      category: "RESUME",
      title: "Build a Resume That Gets Noticed",
      description:
        "Learn how to present your skills, experience, and projects clearly to potential employers.",
    },
    {
      icon: <MessageSquare size={21} />,
      category: "INTERVIEWS",
      title: "Prepare for Your Next Interview",
      description:
        "Practical ways to prepare, communicate confidently, and handle common interview questions.",
    },
    {
      icon: <TrendingUp size={21} />,
      category: "CAREER GROWTH",
      title: "Build Skills That Move You Forward",
      description:
        "Understand which skills can help you stay competitive and grow in your career.",
    },
    {
      icon: <Search size={21} />,
      category: "JOB SEARCH",
      title: "Search Smarter, Not Harder",
      description:
        "Improve your job search strategy and find opportunities that actually match your goals.",
    },
    {
      icon: <Code2 size={21} />,
      category: "TECHNOLOGY",
      title: "Skills Employers Look For",
      description:
        "Explore technical and professional skills that are increasingly valued across industries.",
    },
    {
      icon: <Briefcase size={21} />,
      category: "FIRST JOB",
      title: "Starting Your Career",
      description:
        "A practical guide to approaching internships, entry-level roles, and your first professional opportunity.",
    },
  ];

  return (
    <>
      <main className="insights-page">
        <section className="insights-hero">
          <div className="insights-hero-content">
            <div className="insights-hero-copy">
              <p className="section-label">CAREER INSIGHTS</p>

              <h1>
                Build your career
                <br />
                <span>with better direction.</span>
              </h1>

              <p>
                Practical advice, useful resources, and career guidance
                to help you make smarter decisions at every stage of
                your professional journey.
              </p>
            </div>

            <div className="insights-hero-image">
              <img src={codingImage} alt="Person working on a computer" />
            </div>
          </div>
        </section>

        <section className="insights-section">
          <div className="insights-heading">
            <div>
              <p className="section-label">EXPLORE INSIGHTS</p>

              <h2>
                Guidance for your
                <br />
                <span>next career move.</span>
              </h2>
            </div>

            <div className="insights-heading-image">
              <img
                src={workingImage}
                alt="Professional working"
              />
            </div>
          </div>

          <div className="insights-grid">
            {insights.map((insight, index) => (
              <article className="insight-card" key={index}>
                <div className="insight-card-top">
                  <div className="insight-icon">{insight.icon}</div>
                  <span>{insight.category}</span>
                </div>

                <h3>{insight.title}</h3>

                <p>{insight.description}</p>

                <Link
                  to={
                   insight.category === "RESUME"
                    ? "/career-insights/resume"
                    : insight.category === "INTERVIEWS"
                    ? "/career-insights/interview"
                    : insight.category === "CAREER GROWTH"
                    ? "/career-insights/growth"
                    : insight.category === "JOB SEARCH"
                    ? "/career-insights/job-search"
                    : insight.category === "TECHNOLOGY"
                    ? "/career-insights/technology"
                    : insight.category === "FIRST JOB"
                    ? "/career-insights/first-job"
                    : "/jobs"
                  }
                  className="insight-link"
                >
                  {insight.category === "RESUME" ||
                  insight.category === "INTERVIEWS" ||
                  insight.category === "CAREER GROWTH" ||
                  insight.category === "JOB SEARCH" ||
                  insight.category === "TECHNOLOGY" ||
                  insight.category === "FIRST JOB"
                    ? "Read Guide"
                    : "Explore Jobs"}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="insights-feature">
          <div className="insights-feature-image">
            <img
              src={teamImage}
              alt="Team planning together"
            />
          </div>

          <div className="insights-feature-copy">
            <p className="section-label">MAKE YOUR NEXT MOVE</p>

            <h2>
              Your career is built
              <br />
              <span>one decision at a time.</span>
            </h2>

            <p>
              Whether you're searching for your first opportunity,
              changing direction, or looking for your next challenge,
              having the right information can make the journey easier.
            </p>

            <Link to="/jobs" className="insights-feature-link">
              Find Your Next Opportunity
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="insights-cta">
          <p className="section-label">READY FOR YOUR NEXT STEP?</p>

          <h2>
            Turn insight into
            <br />
            <span>opportunity.</span>
          </h2>

          <p>
            Explore jobs that match your skills and take the next
            step toward the career you want.
          </p>

          <Link to="/jobs" className="insights-cta-button">
            Browse Jobs
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CareerInsights;