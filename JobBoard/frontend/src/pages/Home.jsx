import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import {
  Search,
  MapPin,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  Code2,
  Palette,
  BarChart3,
  Megaphone,
  Database,
  Settings,
  CheckCircle2,
} from "lucide-react";

import teamImage from "../images/prof team.avif";
import collaborationImage from "../images/collab.avif";
import candidateImage from "../images/prof candidate.avif";
import officeImage from "../images/office building.avif";

function Home() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) {
      params.set("q", searchTerm.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    navigate(`/jobs?${params.toString()}`);
  };

  const categories = [
    {
      icon: <Code2 size={20} />,
      name: "Software & Technology",
      jobs: "1,240 jobs",
    },
    {
      icon: <Palette size={20} />,
      name: "Design & Creative",
      jobs: "480 jobs",
    },
    {
      icon: <BarChart3 size={20} />,
      name: "Finance & Business",
      jobs: "620 jobs",
    },
    {
      icon: <Megaphone size={20} />,
      name: "Marketing",
      jobs: "350 jobs",
    },
    {
      icon: <Database size={20} />,
      name: "Data & Analytics",
      jobs: "410 jobs",
    },
    {
      icon: <Settings size={20} />,
      name: "Engineering",
      jobs: "570 jobs",
    },
  ];

  const featuredJobs = [
    {
      company: "TechNova",
      initials: "TN",
      title: "Frontend Developer",
      location: "Kolkata",
      type: "Full Time",
      salary: "₹6–10 LPA",
      posted: "2 days ago",
    },
    {
      company: "PixelWorks",
      initials: "PW",
      title: "Product Designer",
      location: "Bengaluru",
      type: "Full Time",
      salary: "₹8–12 LPA",
      posted: "3 days ago",
    },
    {
      company: "CloudCore",
      initials: "CC",
      title: "Backend Developer",
      location: "Pune",
      type: "Full Time",
      salary: "₹7–12 LPA",
      posted: "5 days ago",
    },
    {
      company: "CodeSphere",
      initials: "CS",
      title: "Software Engineering Intern",
      location: "Bengaluru",
      type: "Internship",
      salary: "₹20–30K / month",
      posted: "1 week ago",
    },
  ];

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-copy">

            <p className="hero-label">
              <span></span>
              YOUR NEXT OPPORTUNITY STARTS HERE
            </p>

            <h1>
              Find work that
              <br />
              <span>moves you forward.</span>
            </h1>

            <p className="hero-description">
              Discover meaningful opportunities from companies
              looking for people like you.
            </p>

          </div>

          <div className="hero-visual">

            <div className="career-orbit orbit-one"></div>
            <div className="career-orbit orbit-two"></div>

            <div className="career-center">
              <span>JOBLY</span>
              <strong>Find. Apply. Grow.</strong>
            </div>

            <div className="career-step career-find">
              <span className="step-number">01</span>
              <div>
                <small>Discover</small>
                <strong>FIND</strong>
              </div>
            </div>

            <div className="career-step career-apply">
              <span className="step-number">02</span>
              <div>
                <small>Connect</small>
                <strong>APPLY</strong>
              </div>
           </div>

          <div className="career-step career-grow">
            <span className="step-number">03</span>
            <div>
              <small>Move Forward</small>
              <strong>GROW</strong>
            </div>
          </div>

          <div className="career-dot dot-one"></div>
          <div className="career-dot dot-two"></div>
          <div className="career-dot dot-three"></div>

      </div>
    </div>

        <div className="hero-bottom">

          <p>Trusted by growing teams and ambitious professionals.</p>

          <div className="hero-line"></div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stat">
          <strong>10K+</strong>
          <span>Open Positions</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat">
          <strong>2K+</strong>
          <span>Companies Hiring</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat">
          <strong>50K+</strong>
          <span>Active Candidates</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat">
          <strong>95%</strong>
          <span>Candidate Satisfaction</span>
        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-heading-large">

          <div>
            <p className="section-label">EXPLORE CATEGORIES</p>

            <h2>
              Find your place in
              <br />
              the right industry.
            </h2>
          </div>

          <Link to="/jobs" className="section-link">
            View all categories
            <ArrowRight size={16} />
          </Link>

        </div>


        <div className="category-grid">

          {categories.map((category, index) => (
            <Link
              to={`/jobs?category=${encodeURIComponent(category.name)}`}
              className="category-card"
              key={index}
            >
              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.jobs}</p>
              </div>

              <ArrowRight
                size={17}
                className="category-arrow"
              />

            </Link>
          ))}

        </div>

      </section>


      {/* ================= FEATURED JOBS ================= */}

      <section className="featured-section">

        <div className="section-heading-large">

          <div>
            <p className="section-label">LATEST OPPORTUNITIES</p>

            <h2>
              Roles worth
              <br />
              taking a closer look at.
            </h2>
          </div>

          <Link to="/jobs" className="section-link">
            Browse all jobs
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="featured-image">

          <img
            src={officeImage}
            alt="Modern office building"
          />

          <div className="featured-image-overlay">
            <span>OPPORTUNITIES</span>
            <strong>Where careers take shape.</strong>
          </div>

        </div>


        <div className="featured-jobs">

          {featuredJobs.map((job, index) => (
            <div className="featured-job" key={index}>

              <div className="company-logo">
                {job.initials}
              </div>

              <div className="featured-job-main">

                <div className="job-top-line">

                  <span className="job-tag">
                    {job.type.toUpperCase()}
                  </span>

                  <span className="job-posted">
                    {job.posted}
                  </span>

                </div>

                <h3>{job.title}</h3>

                <p className="job-company">
                  {job.company}
                </p>

                <div className="job-meta">

                  <span>
                    <MapPin size={14} />
                    {job.location}
                  </span>

                  <span>
                    <Briefcase size={14} />
                    {job.type}
                  </span>

                </div>

              </div>

              <div className="featured-job-side">

                <strong>{job.salary}</strong>

                <Link to="/jobs" className="job-arrow">
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CANDIDATE / EMPLOYER ================= */}

      <section className="audience-section">

        <div className="audience-card candidate-card">

          <div className="audience-image">
            <img src={candidateImage} alt="Professional candidate" />
          </div>

          <div className="audience-content">

          <div className="audience-icon">
            <Users size={22} />
          </div>

          <p className="section-label">FOR CANDIDATES</p>

          <h2>
            Your next opportunity
            <br />
            could be closer than you think.
          </h2>

          <p>
            Build your profile, discover relevant opportunities,
            and apply to roles that match where you want to go.
          </p>

          <Link to="/jobs" className="audience-link">
            Explore opportunities
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>


      <div className="audience-card employer-card">

        <div className="audience-image">
          <img src={teamImage} alt="Professional team working together" />
        </div>

        <div className="audience-content">

        <div className="audience-icon">
          <Building2 size={22} />
        </div>

        <p className="section-label">FOR EMPLOYERS</p>

        <h2>
          Find people who
          <br />
          can move your company forward.
        </h2>

        <p>
          Post your open roles, reach qualified candidates,
          and manage applications from one place.
        </p>

        <Link to="/register" className="audience-link">
          Start hiring
          <ArrowRight size={16} />
        </Link>

        </div>

      </div>

    </section>

  

      {/* ================= HOW IT WORKS ================= */}

      <section className="process-section">

        <div className="process-heading">

          <p className="section-label">HOW JOBLY WORKS</p>

          <h2>
            From searching to
            <br />
            getting hired.
          </h2>

          <p>
            A simpler way to move from discovering an opportunity
            to taking the next step in your career.
          </p>

        </div>

        <div className="process-image">

        <img
          src={collaborationImage}
          alt="Professional collaboration"
        />

        <div className="process-image-content">
          <span>CONNECT</span>
          <strong>Good opportunities start with good connections.</strong>
        </div>

      </div>


        <div className="process-steps">

          <div className="process-step">

            <span>01</span>

            <div>
              <h3>Discover</h3>
              <p>
                Search thousands of opportunities using
                roles, skills, companies, and locations.
              </p>
            </div>

          </div>


          <div className="process-step">

            <span>02</span>

            <div>
              <h3>Evaluate</h3>
              <p>
                Explore job details, requirements,
                salary information, and company details.
              </p>
            </div>

          </div>


          <div className="process-step">

            <span>03</span>

            <div>
              <h3>Apply</h3>
              <p>
                Submit your application and take
                the next step toward your career goals.
              </p>
            </div>

          </div>


          <div className="process-step">

            <span>04</span>

            <div>
              <h3>Grow</h3>
              <p>
                Connect with the right teams and
                move forward with confidence.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div className="final-cta-content">

          <p className="section-label">YOUR NEXT MOVE</p>

          <h2>
            The right opportunity
            <br />
            is waiting.
          </h2>

          <p>
            Start exploring jobs and take one step closer
            to the career you want.
          </p>

          <Link to="/jobs" className="final-cta-btn">
            Explore Jobs
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="final-cta-mark">
          <CheckCircle2 size={90} strokeWidth={1} />
        </div>

      </section>

      <Footer />


      

    </div>
  );
}

export default Home;