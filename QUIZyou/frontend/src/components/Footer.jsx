import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="real-footer">
      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-brand-logo">
            QUIZ<span>you</span>
          </Link>

          <p>
            A simple place to create quizzes,
            <br />
            challenge yourself, and learn something new.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <Link to="/quizzes">Explore Quizzes</Link>
          <Link to="/create">Create a Quiz</Link>
          <Link to="/register">Get Started</Link>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
        </div>

        <div className="footer-column">
          <h4>QUIZyou</h4>
          <Link to="/">About Us</Link>
          <Link to="/quizzes">Discover</Link>
          <a href="mailto:hello@quizyou.com">Contact</a>
        </div>

        <div className="footer-highlight">
          <span>READY TO PLAY?</span>

          <h3>Make your next quiz.</h3>

          <Link to="/create" className="footer-create-btn">
            Create Quiz <span>→</span>
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 QUIZyou. All rights reserved.</span>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>

        <span className="footer-made">
          Made with ✦ for curious minds
        </span>
      </div>
    </footer>
  );
}

export default Footer;