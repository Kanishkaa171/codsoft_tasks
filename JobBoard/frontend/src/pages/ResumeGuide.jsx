import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function ResumeGuide() {
  const [openSection, setOpenSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const checklist = [
    "Clear contact information",
    "Relevant professional summary",
    "Technical and professional skills",
    "Projects or practical experience",
    "Education and certifications",
    "Consistent formatting",
  ];

  const toggleChecklist = (item) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const sections = [
    {
      number: "01",
      title: "Keep it clear and focused",
      text: "A good resume should communicate your most relevant skills and experience quickly. Avoid unnecessary information and focus on what supports the role you are applying for.",
      points: [
        "Use clear section headings",
        "Keep descriptions short and relevant",
        "Highlight your strongest skills first",
      ],
    },
    {
      number: "02",
      title: "Show what you can do",
      text: "Instead of simply listing responsibilities, explain what you worked on and what you achieved. Projects, internships, certifications, and practical experience can all help demonstrate your abilities.",
      points: [
        "Use specific examples",
        "Mention technologies and tools",
        "Focus on results where possible",
      ],
    },
    {
      number: "03",
      title: "Tailor your resume",
      text: "Avoid sending exactly the same resume for every position. Review the job description and highlight the skills and experience that are most relevant to that particular opportunity.",
      points: [
        "Read the job description carefully",
        "Match relevant keywords naturally",
        "Prioritize role-specific experience",
      ],
    },
    {
      number: "04",
      title: "Keep the design professional",
      text: "Your resume should be easy to read. Use consistent spacing, readable fonts, clear headings, and a simple layout. The goal is to make your information easier to understand.",
      points: [
        "Use consistent spacing",
        "Avoid unnecessary graphics",
        "Keep the overall layout clean",
      ],
    },
  ];

  const progress = Math.round(
    (checkedItems.length / checklist.length) * 100
  );

  return (
    <>
      <main className="guide-page">
        <section className="guide-hero">
          <div className="guide-hero-content">
            <Link to="/career-insights" className="guide-back">
              <ArrowLeft size={16} />
              Back to Career Insights
            </Link>

            <div className="guide-hero-grid">
              <div>
                <p className="section-label">RESUME GUIDE</p>

                <h1>
                  Build a resume
                  <br />
                  <span>that gets noticed.</span>
                </h1>

                <p className="guide-intro">
                  Your resume is often the first impression an employer
                  gets. Learn how to present your skills, projects, and
                  experience clearly and professionally.
                </p>

                <div className="guide-meta">
                  <span>
                    <FileText size={16} />
                    5 min read
                  </span>
                  <span>Career Resource</span>
                </div>
              </div>

              <div className="guide-hero-card">
                <div className="guide-hero-card-top">
                  <span>RESUME</span>
                  <FileText size={22} />
                </div>

                <div className="resume-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <strong>Make your first impression count.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-content">
          <div className="guide-main">
            <div className="guide-progress">
              <div>
                <span>YOUR RESUME CHECKLIST</span>
                <strong>{progress}% complete</strong>
              </div>

              <div className="guide-progress-track">
                <span style={{ width: `${progress}%` }}></span>
              </div>
            </div>

            <div className="guide-checklist">
              <div className="guide-checklist-heading">
                <div>
                  <p className="section-label">QUICK CHECK</p>
                  <h2>Is your resume ready?</h2>
                </div>

                <Lightbulb size={22} />
              </div>

              <p>
                Check each point as you review your resume. You can
                use this as a quick final review before applying.
              </p>

              <div className="guide-check-items">
                {checklist.map((item) => (
                  <button
                    type="button"
                    className={`guide-check-item ${
                      checkedItems.includes(item) ? "checked" : ""
                    }`}
                    key={item}
                    onClick={() => toggleChecklist(item)}
                  >
                    <span className="guide-check-box">
                      {checkedItems.includes(item) && (
                        <CheckCircle2 size={18} />
                      )}
                    </span>

                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="guide-sections">
              {sections.map((section) => (
                <div className="guide-section" key={section.number}>
                  <button
                    type="button"
                    className="guide-section-header"
                    onClick={() =>
                      setOpenSection(
                        openSection === section.number
                          ? null
                          : section.number
                      )
                    }
                  >
                    <div>
                      <span className="guide-number">
                        {section.number}
                      </span>

                      <h2>{section.title}</h2>
                    </div>

                    <ChevronDown
                      size={20}
                      className={
                        openSection === section.number
                          ? "rotate"
                          : ""
                      }
                    />
                  </button>

                  <div
                    className={`guide-section-body ${
                      openSection === section.number ? "open" : ""
                    }`}
                  >
                    <p>{section.text}</p>

                    <div className="guide-point-list">
                      {section.points.map((point) => (
                        <div key={point}>
                          <CheckCircle2 size={17} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="guide-sidebar">
            <div className="guide-tip">
              <p className="section-label">QUICK TIP</p>

              <h3>
                Make every line
                <br />
                <span>earn its place.</span>
              </h3>

              <p>
                If a piece of information doesn't help show why
                you're a good fit for the role, consider removing it.
              </p>
            </div>

            <div className="guide-sidebar-card">
              <span>READY?</span>
              <h3>Find your next opportunity.</h3>

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

export default ResumeGuide;