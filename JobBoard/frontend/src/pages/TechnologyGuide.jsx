import {Link} from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    ChevronRight,
    Code2,
    Database,
    Globe,
    Layers3,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import { useState} from "react";
import Footer from "../components/Footer.jsx";

function TechnologyGuide() {
    const [activeTrack, setActiveTrack] = useState("Frontend");
    const [checkedSkills, setCheckedSkills] = useState([]);

  const tracks = [
    {
      name: "Frontend",
      description:
        "Build the interfaces people interact with. Focus on creating responsive, accessible, and polished web experiences.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      name: "Backend",
      description:
        "Work behind the scenes by building APIs, handling data, managing authentication, and connecting applications to databases.",
      skills: ["Node.js", "Express", "APIs", "Databases"],
    },
    {
      name: "Full Stack",
      description:
        "Combine frontend and backend skills to understand how complete web applications are designed, built, and connected.",
      skills: ["React", "Node.js", "APIs", "PostgreSQL"],
    },
    {
      name: "AI & Emerging Tech",
      description:
        "Explore modern technologies that are changing software development while building a strong foundation in practical concepts.",
      skills: ["AI Concepts", "APIs", "LLMs", "Automation"],
    },
  ];

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "REST APIs",
    "Databases",
    "Problem Solving",
    "AI Concepts",
  ];

  const roadmap = [
    {
      number: "01",
      title: "Build the fundamentals",
      text:
        "Start with the technologies that form the foundation of the role you want. Understanding the basics makes advanced tools much easier to learn.",
      icon: <Layers3 size={19} />,
    },
    {
      number: "02",
      title: "Learn by building",
      text:
        "Projects turn theoretical knowledge into practical experience. Build small applications first, then gradually increase their complexity.",
      icon: <Code2 size={19} />,
    },
    {
      number: "03",
      title: "Understand how things connect",
      text:
        "Don't learn technologies in isolation. Understand how frontend, backend, databases, APIs, and deployment work together.",
      icon: <Globe size={19} />,
    },
    {
      number: "04",
      title: "Keep your skills current",
      text:
        "Technology changes quickly. Build a habit of exploring new tools while keeping your core programming and problem-solving skills strong.",
      icon: <TrendingUp size={19} />,
    },
  ];

  const toggleSkill = (skill) => {
    setCheckedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  };

  const currentTrack = tracks.find((track) => track.name === activeTrack);

  return (
    <>
      <main className="technology-guide-page">
        <section className="technology-guide-hero">
          <div className="technology-guide-hero-content">
            <Link to="/career-insights" className="technology-guide-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="technology-guide-hero-grid">
              <div>
                <p className="section-label">TECHNOLOGY</p>

                <h1>
                  Learn the tools
                  <br />
                  <span>that move tech forward.</span>
                </h1>

                <p className="technology-guide-intro">
                  Technology careers are built on strong fundamentals,
                  practical projects, and the ability to keep learning as
                  tools and trends evolve.
                </p>

                <div className="technology-guide-meta">
                  <span>
                    <Sparkles size={16} />
                    7 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="technology-guide-visual">
                <div className="tech-visual-core">
                  <Code2 size={30} />
                </div>

                <div className="tech-ring tech-ring-one"></div>
                <div className="tech-ring tech-ring-two"></div>

                <div className="tech-node tech-node-one">
                  <Globe size={15} />
                </div>

                <div className="tech-node tech-node-two">
                  <Database size={15} />
                </div>

                <div className="tech-node tech-node-three">
                  <Layers3 size={15} />
                </div>

                <div className="tech-visual-label">
                  <small>KEEP LEARNING</small>
                  <strong>KEEP BUILDING</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-guide-content">
          <div className="technology-guide-main">
            <div className="technology-track-section">
              <div className="technology-heading">
                <p className="section-label">CHOOSE YOUR DIRECTION</p>

                <h2>
                  Which technology
                  <br />
                  <span>path interests you?</span>
                </h2>

                <p>
                  Different roles require different combinations of
                  technical skills. Start with a direction that matches
                  your goals.
                </p>
              </div>

              <div className="technology-track-selector">
                {tracks.map((track) => (
                  <button
                    type="button"
                    key={track.name}
                    className={
                      activeTrack === track.name ? "active" : ""
                    }
                    onClick={() => setActiveTrack(track.name)}
                  >
                    <span>{track.name}</span>
                    <ChevronRight size={17} />
                  </button>
                ))}
              </div>

              <div className="technology-track-detail">
                <div className="technology-track-icon">
                  <Code2 size={23} />
                </div>

                <div>
                  <p className="section-label">YOUR DIRECTION</p>

                  <h3>{currentTrack.name}</h3>

                  <p>{currentTrack.description}</p>

                  <div className="technology-focus-tags">
                    {currentTrack.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="technology-skills-section">
              <div className="technology-heading">
                <p className="section-label">SKILL CHECK</p>

                <h2>
                  Build your
                  <br />
                  <span>technical toolkit.</span>
                </h2>

                <p>
                  Select the skills you've already started learning.
                  Use the rest as a simple roadmap for what to explore
                  next.
                </p>
              </div>

              <div className="technology-skill-grid">
                {skills.map((skill) => (
                  <button
                    type="button"
                    key={skill}
                    className={`technology-skill ${
                      checkedSkills.includes(skill) ? "checked" : ""
                    }`}
                    onClick={() => toggleSkill(skill)}
                  >
                    <span className="technology-skill-check">
                      {checkedSkills.includes(skill) && (
                        <CheckCircle size={17} />
                      )}
                    </span>

                    <span>{skill}</span>
                  </button>
                ))}
              </div>

              <div className="technology-progress">
                <div>
                  <span>Your learning progress</span>
                  <strong>
                    {Math.round(
                      (checkedSkills.length / skills.length) * 100
                    )}
                    %
                  </strong>
                </div>

                <div className="technology-progress-bar">
                  <span
                    style={{
                      width: `${
                        (checkedSkills.length / skills.length) * 100
                      }%`,
                    }}
                  ></span>
                </div>
              </div>
            </div>

            <div className="technology-roadmap-section">
              <div className="technology-heading">
                <p className="section-label">A PRACTICAL ROADMAP</p>

                <h2>
                  Learn technology
                  <br />
                  <span>by doing.</span>
                </h2>
              </div>

              <div className="technology-roadmap-list">
                {roadmap.map((item) => (
                  <div
                    className="technology-roadmap-item"
                    key={item.number}
                  >
                    <span className="technology-roadmap-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                    <span className="technology-roadmap-icon">
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="technology-guide-sidebar">
            <div className="technology-guide-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Don't chase
                <br />
                <span>every tool.</span>
              </h3>

              <p>
                Strong fundamentals usually matter more than knowing
                every new framework. Learn the basics deeply, then
                expand your toolkit when the project requires it.
              </p>
            </div>

            <div className="technology-guide-sidebar-card">
              <span>READY TO BUILD?</span>

              <h3>
                Turn your skills
                into experience.
              </h3>

              <Link to="/jobs">
                Explore Opportunities
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>

        <section className="technology-guide-cta">
          <div>
            <p className="section-label">KEEP MOVING FORWARD</p>

            <h2>
              Learn something.
              <br />
              <span>Build something.</span>
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

export default TechnologyGuide;
