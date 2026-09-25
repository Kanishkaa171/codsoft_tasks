import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Jobly
          </Link>

          <p className="footer-tagline">
            Find opportunities. Build your future.
          </p>

          <p className="footer-description">
            Jobly connects talented people with companies
            looking for their next great hire.
          </p>
        </div>

        <div className="footer-column">
          <h4>For Job Seekers</h4>
          <Link to="/jobs">Browse Jobs</Link>
          <Link to="/jobs">Search Jobs</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/login">Candidate Login</Link>
        </div>

        <div className="footer-column">
          <h4>For Employers</h4>
          <Link to="/register">Post a Job</Link>
          <Link to="/register">Create Company Profile</Link>
          <Link to="/login">Employer Login</Link>
          <Link to="/about">Why Jobly</Link>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/about">Our Mission</Link>
          <Link to="/about">Contact</Link>
          <Link to="/about">Help Center</Link>
        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 Jobly. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

        <p>Built for better opportunities.</p>

      </div>
    </footer>
  );
}

export default Footer;