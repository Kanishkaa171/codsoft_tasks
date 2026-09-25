import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function CareerGrowthGuide() {
  const [activeStage, setActiveStage] = useState("Developing");
  const [activeSkill, setActiveSkill] = useState("Technical Skills");

  const stages = [
    {
      name: "Starting Out",
      description:
        "Build your foundation, explore different areas, and start gaining practical experience.",
      skills: ["Fundamentals", "Communication", "Projects"],
    },
    {
      name: "Developing",
      description:
        "Strengthen your technical abilities and begin working on more realistic projects.",
      skills: ["Technical Skills", "Problem Solving", "Collaboration"],
    },
    {
      name: "Job Ready",
      description:
        "Turn your skills into professional experience and prepare yourself for real opportunities.",
      skills: ["Specialization", "Portfolio", "Interview Skills"],
    },
  ];

  const skillData = {
    "Technical Skills": {
      level: "Developing",
      progress: 68,
      description:
        "Build deeper knowledge in the technologies and tools that are relevant to the career path you want.",
      actions: [
        "Strengthen your core fundamentals",
        "Build projects using your skills",
        "Learn tools used in real workplaces",
      ],
    },
    "Problem Solving": {
      level: "Developing",
      progress: 61,
      description:
        "Practice breaking larger problems into smaller, manageable steps and finding practical solutions.",
      actions: [
        "Practice coding or analytical problems",
        "Study different approaches to problems",
        "Review and improve your solutions",
      ],
    },
    Collaboration: {
      level: "Developing",
      progress: 55,
      description:
        "Learn how to communicate clearly, work with others, and contribute effectively to team projects.",
      actions: [
        "Work on collaborative projects",
        "Practice explaining your ideas",
        "Learn Git and team workflows",
      ],
    },
    Specialization: {
      level: "Job Ready",
      progress: 76,
      description:
        "Develop deeper expertise in a specific area instead of trying to learn everything at once.",
      actions: [
        "Choose a career direction",
        "Study advanced concepts",
        "Build projects around your specialization",
      ],
    },
    Portfolio: {
      level: "Job Ready",
      progress: 82,
      description:
        "Create practical work that gives employers evidence of what you can actually build and contribute.",
      actions: [
        "Build 2–3 strong projects",
        "Document your work clearly",
        "Keep your GitHub profile organized",
      ],
    },
    "Interview Skills": {
      level: "Job Ready",
      progress: 72,
      description:
        "Prepare to communicate your skills, experience, and problem-solving approach clearly during interviews.",
      actions: [
        "Practice common interview questions",
        "Prepare project explanations",
        "Practice communicating your thought process",
      ],
    },
  };

  const activeSkillData = skillData[activeSkill];

  const currentStage = stages.find(
    (stage) => stage.name === activeStage
  );

  return (
    <>
      <main className="growth-page">
        <section className="growth-hero">
          <div className="growth-hero-content">
            <Link to="/career-insights" className="growth-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="growth-hero-grid">
              <div className="growth-hero-copy">
                <p className="section-label">CAREER GROWTH</p>

                <h1>
                  Build skills that
                  <br />
                  <span>move you forward.</span>
                </h1>

                <p>
                  Career growth is not about learning everything at
                  once. Build the right skills, gain practical
                  experience, and keep moving toward the opportunities
                  you want.
                </p>

                <div className="growth-meta">
                  <span>
                    <TrendingUp size={16} />
                    8 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="growth-hero-visual">
                <div className="growth-ring growth-ring-one"></div>
                <div className="growth-ring growth-ring-two"></div>

                <div className="growth-center">
                  <TrendingUp size={28} />
                  <span>GROW</span>
                </div>

                <div className="growth-node node-one">
                  <span>01</span>
                  <strong>LEARN</strong>
                </div>

                <div className="growth-node node-two">
                  <span>02</span>
                  <strong>BUILD</strong>
                </div>

                <div className="growth-node node-three">
                  <span>03</span>
                  <strong>GROW</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="growth-content">
          <div className="growth-main">
            <div className="growth-intro">
              <p className="section-label">YOUR CAREER PATH</p>

              <h2>
                Where are you
                <br />
                <span>right now?</span>
              </h2>

              <p>
                Select a stage to explore what you should focus on at
                that point in your career.
              </p>
            </div>

            <div className="growth-stage-selector">
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

            <div className="growth-stage-detail">
              <div className="growth-stage-number">
                0{stages.findIndex(
                  (stage) => stage.name === activeStage
                ) + 1}
              </div>

              <div>
                <p className="section-label">CURRENT FOCUS</p>

                <h3>{currentStage.name}</h3>

                <p>{currentStage.description}</p>

                <div className="growth-stage-skills">
                  {currentStage.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="growth-skills">
              <div className="growth-heading">
                <div>
                  <p className="section-label">SKILL PROGRESSION</p>

                  <h2>
                    Focus on skills that
                    <br />
                    <span>create momentum.</span>
                  </h2>
                </div>

                <Code2 size={24} />
              </div>

              <div className="growth-skill-layout">
                <div className="growth-skill-list">
                  {Object.keys(skillData).map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      className={
                        activeSkill === skill ? "active" : ""
                      }
                      onClick={() => setActiveSkill(skill)}
                    >
                      <span>{skill}</span>
                      <ChevronRight size={17} />
                    </button>
                  ))}
                </div>

                <div className="growth-skill-detail">
                  <div className="growth-skill-top">
                    <div>
                      <span className="growth-skill-label">
                        {activeSkillData.level}
                      </span>

                      <h3>{activeSkill}</h3>
                    </div>

                    <strong>{activeSkillData.progress}%</strong>
                  </div>

                  <div className="growth-progress">
                    <span
                      style={{
                        width: `${activeSkillData.progress}%`,
                      }}
                    ></span>
                  </div>

                  <p>{activeSkillData.description}</p>

                  <div className="growth-action-list">
                    {activeSkillData.actions.map((action) => (
                      <div key={action}>
                        <CheckCircle2 size={17} />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="growth-sidebar">
            <div className="growth-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Progress beats
                <br />
                <span>perfection.</span>
              </h3>

              <p>
                You don't need to master everything before moving
                forward. Consistent improvement compounds over time.
              </p>
            </div>

            <div className="growth-sidebar-card">
              <Lightbulb size={21} />

              <span>KEEP BUILDING</span>

              <h3>
                Turn your skills into
                real opportunities.
              </h3>

              <Link to="/jobs">
                Explore Jobs
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>

        <section className="growth-cta">
          <div>
            <p className="section-label">YOUR NEXT MOVE</p>

            <h2>
              Keep learning.
              <br />
              <span>Keep moving.</span>
            </h2>
          </div>

          <Link to="/jobs">
            Find Your Next Opportunity
            <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CareerGrowthGuide;