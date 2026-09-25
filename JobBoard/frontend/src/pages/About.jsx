import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer.jsx";

import missionImage from "../images/candidates.avif";
import candidatesImage from "../images/employees.avif";
import employersImage from "../images/our mission.webp";

function About() {
  return (
    <>
      <main className="about-page">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-copy">
              <p className="section-label">ABOUT JOBLY</p>

              <h1>
                Connecting talent
                <br />
                <span>with opportunity.</span>
              </h1>

              <p className="about-intro">
                Jobly is a modern job platform built to make finding the
                right opportunity simpler, clearer, and more accessible.
                We bring candidates and employers together in one focused
                space.
              </p>

              <div className="about-hero-details">
                <div>
                  <strong>01</strong>
                  <span>For Candidates</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>For Employers</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Better Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="about-story about-story-first">
          <div className="about-image">
            <img
              src={missionImage}
              alt="People working together"
            />
          </div>

          <div className="about-story-copy">
            <p className="section-label">OUR MISSION</p>

            <h2>
              Making the search
              <br />
              <span>feel simpler.</span>
            </h2>

            <p>
              Finding the right job can often feel overwhelming. Too many
              listings, unclear information, and complicated application
              processes can make the journey harder than it needs to be.
            </p>

            <p>
              Jobly focuses on creating a straightforward experience where
              candidates can discover relevant opportunities and employers
              can connect with the people they need.
            </p>

            <div className="about-check-list">
              <div>
                <CheckCircle2 size={18} />
                <span>Simple job discovery</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Clear opportunities</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Focused application experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates */}
        <section className="about-story about-story-reverse">
          <div className="about-story-copy">
            <p className="section-label">FOR CANDIDATES</p>

            <h2>
              Find work that
              <br />
              <span>moves you forward.</span>
            </h2>

            <p>
              Your next opportunity should match more than just a job title.
              Jobly helps candidates explore roles based on their skills,
              experience, interests, and career goals.
            </p>

            <p>
              Browse opportunities, explore job details, and take the next
              step toward a career that fits where you want to go.
            </p>

            <Link to="/jobs" className="about-link">
              Explore Jobs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-image">
            <img
              src={candidatesImage}
              alt="Professional exploring career opportunities"
            />
          </div>
        </section>

        {/* Employers */}
        <section className="about-story about-story-first">
          <div className="about-image">
            <img
              src={employersImage}
              alt="Professional team working together"
            />
          </div>

          <div className="about-story-copy">
            <p className="section-label">FOR EMPLOYERS</p>

            <h2>
              Build teams with
              <br />
              <span>the right people.</span>
            </h2>

            <p>
              Great companies are built by great people. Jobly gives
              employers a simple way to publish opportunities and connect
              with candidates who have the skills they are looking for.
            </p>

            <p>
              From posting a position to managing applications, the platform
              is designed to keep the hiring journey organized and efficient.
            </p>

            <Link to="/register" className="about-link">
              Get Started
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* How Jobly Works */}
        <section className="about-process">
          <div className="about-process-heading">
            <p className="section-label">HOW JOBLY WORKS</p>

            <h2>
              From search to
              <br />
              <span>your next step.</span>
            </h2>

            <p>
              A straightforward process designed to keep job searching
              focused and easy to navigate.
            </p>
          </div>

          <div className="about-process-grid">

            <div className="about-process-card">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Search and explore opportunities that match your skills and
                career interests.
              </p>
            </div>

            <div className="about-process-card">
              <span>02</span>
              <h3>Explore</h3>
              <p>
                Review job details, requirements, responsibilities, and
                company information.
              </p>
            </div>

            <div className="about-process-card">
              <span>03</span>
              <h3>Apply</h3>
              <p>
                Submit your application and take the next step toward the
                opportunity you want.
              </p>
            </div>

            <div className="about-process-card">
              <span>04</span>
              <h3>Grow</h3>
              <p>
                Connect with the right opportunities and keep moving your
                career forward.
              </p>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="about-cta">
          <div className="about-cta-content">
            <p className="section-label">YOUR NEXT MOVE</p>

            <h2>
              Your next opportunity
              <br />
              <span>could be closer than you think.</span>
            </h2>

            <p>
              Explore available jobs and take the next step toward building
              the career you want.
            </p>

            <Link to="/jobs" className="about-cta-button">
              Browse Jobs
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;