import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function FirstJobGuide() {
  const [activeStage, setActiveStage] = useState("Before Applying");
  const [checkedSteps, setCheckedSteps] = useState([]);

  const stages = [
    {
      name: "Before Applying",
      description:
        "Build a clear foundation before you start sending applications. A focused resume, useful projects, and a clear target role can make your search much stronger.",
      focus: ["Resume", "Projects", "Target roles"],
    },
    {
      name: "During the Search",
      description:
        "Stay consistent without applying randomly. Look for roles that match your current skills and keep improving your approach as you gain experience.",
      focus: ["Job search", "Applications", "Networking"],
    },
    {
      name: "Preparing for Interviews",
      description:
        "Prepare to explain what you've built, what you've learned, and how you approach problems. Confidence comes from understanding your own work.",
      focus: ["Projects", "Questions", "Communication"],
    },
  ];

  const steps = [
    "Create a focused resume",
    "Build 2–3 practical projects",
    "Keep your GitHub updated",
    "Prepare a short introduction",
    "Practice common interview questions",
    "Research every company before interviewing",
  ];

  const roadmap = [
    {
      number: "01",
      title: "Show what you can do",
      text:
        "For your first role, practical proof can be just as valuable as experience. Projects, coursework, internships, and personal work can demonstrate your skills.",
      icon: <Briefcase size={19} />,
    },
    {
      number: "02",
      title: "Make your resume relevant",
      text:
        "Keep your resume focused on the role you're applying for. Highlight relevant technologies, projects, achievements, and experience instead of adding everything you've ever done.",
      icon: <FileText size={19} />,
    },
    {
      number: "03",
      title: "Prepare to talk about your work",
      text:
        "Interviewers may ask why you chose a technology, how your project works, or what problem you faced. Know your own projects well enough to explain them clearly.",
      icon: <MessageSquare size={19} />,
    },
    {
      number: "04",
      title: "Treat the process as learning",
      text:
        "Not every application will lead to an interview. Use each experience to improve your resume, communication, technical preparation, and understanding of the roles you want.",
      icon: <Sparkles size={19} />,
    },
  ];

  const toggleStep = (step) => {
    setCheckedSteps((current) =>
      current.includes(step)
        ? current.filter((item) => item !== step)
        : [...current, step]
    );
  };

  const currentStage = stages.find(
    (stage) => stage.name === activeStage
  );

  return (
    <>
      <main className="first-job-guide-page">
        <section className="first-job-guide-hero">
          <div className="first-job-guide-hero-content">
            <Link to="/career-insights" className="first-job-guide-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="first-job-guide-hero-grid">
              <div>
                <p className="section-label">FIRST JOB</p>

                <h1>
                  Start your career
                  <br />
                  <span>with intention.</span>
                </h1>

                <p className="first-job-guide-intro">
                  Your first job doesn't have to be perfect. It should
                  give you an opportunity to learn, contribute, and
                  build experience that helps shape your next move.
                </p>

                <div className="first-job-guide-meta">
                  <span>
                    <Search size={16} />
                    7 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="first-job-guide-visual">
                <div className="first-job-visual-core">
                  <Briefcase size={30} />
                </div>

                <div className="first-job-ring first-job-ring-one"></div>
                <div className="first-job-ring first-job-ring-two"></div>

                <div className="first-job-node first-job-node-one">
                  <FileText size={15} />
                </div>

                <div className="first-job-node first-job-node-two">
                  <MessageSquare size={15} />
                </div>

                <div className="first-job-node first-job-node-three">
                  <Sparkles size={15} />
                </div>

                <div className="first-job-visual-label">
                  <small>YOUR FIRST STEP</small>
                  <strong>START HERE</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="first-job-guide-content">
          <div className="first-job-guide-main">
            <div className="first-job-stage-section">
              <div className="first-job-heading">
                <p className="section-label">WHERE ARE YOU NOW?</p>

                <h2>
                  Build your
                  <br />
                  <span>next step.</span>
                </h2>

                <p>
                  Choose the stage you're currently working through.
                  You can come back and explore the others whenever
                  you're ready.
                </p>
              </div>

              <div className="first-job-stage-selector">
                {stages.map((stage) => (
                  <button
                    type="button"
                    key={stage.name}
                    className={
                      activeStage === stage.name ? "active" : ""
                    }
                    onClick={() => setActiveStage(stage.name)}
                  >
                    <span>{stage.name}</span>
                    <ChevronRight size={17} />
                  </button>
                ))}
              </div>

              <div className="first-job-stage-detail">
                <div className="first-job-stage-icon">
                  <Briefcase size={23} />
                </div>

                <div>
                  <p className="section-label">YOUR CURRENT FOCUS</p>

                  <h3>{currentStage.name}</h3>

                  <p>{currentStage.description}</p>

                  <div className="first-job-focus-tags">
                    {currentStage.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="first-job-checklist-section">
              <div className="first-job-heading">
                <p className="section-label">FIRST JOB CHECKLIST</p>

                <h2>
                  Get the basics
                  <br />
                  <span>in place.</span>
                </h2>

                <p>
                  Tick off the steps you've already completed. Use the
                  remaining ones as a simple preparation checklist.
                </p>
              </div>

              <div className="first-job-checklist">
                {steps.map((step) => (
                  <button
                    type="button"
                    key={step}
                    className={`first-job-check ${
                      checkedSteps.includes(step) ? "checked" : ""
                    }`}
                    onClick={() => toggleStep(step)}
                  >
                    <span className="first-job-check-icon">
                      {checkedSteps.includes(step) && (
                        <CheckCircle2 size={17} />
                      )}
                    </span>

                    <span>{step}</span>
                  </button>
                ))}
              </div>

              <div className="first-job-progress">
                <div>
                  <span>Preparation progress</span>
                  <strong>
                    {Math.round(
                      (checkedSteps.length / steps.length) * 100
                    )}
                    %
                  </strong>
                </div>

                <div className="first-job-progress-bar">
                  <span
                    style={{
                      width: `${
                        (checkedSteps.length / steps.length) * 100
                      }%`,
                    }}
                  ></span>
                </div>
              </div>
            </div>

            <div className="first-job-roadmap-section">
              <div className="first-job-heading">
                <p className="section-label">BUILDING YOUR START</p>

                <h2>
                  What matters
                  <br />
                  <span>in your first role.</span>
                </h2>
              </div>

              <div className="first-job-roadmap-list">
                {roadmap.map((item) => (
                  <div
                    className="first-job-roadmap-item"
                    key={item.number}
                  >
                    <span className="first-job-roadmap-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                    <span className="first-job-roadmap-icon">
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="first-job-guide-sidebar">
            <div className="first-job-guide-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Your first job is
                <br />
                <span>a starting point.</span>
              </h3>

              <p>
                Focus on learning, building useful skills, working with
                good people, and gaining experience that makes your next
                opportunity stronger.
              </p>
            </div>

            <div className="first-job-guide-sidebar-card">
              <span>READY TO START?</span>

              <h3>
                Find opportunities
                built for your next step.
              </h3>

              <Link to="/jobs">
                Explore Jobs
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>

        <section className="first-job-guide-cta">
          <div>
            <p className="section-label">YOUR CAREER STARTS SOMEWHERE</p>

            <h2>
              Take the first step.
              <br />
              <span>Then keep growing.</span>
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

export default FirstJobGuide;