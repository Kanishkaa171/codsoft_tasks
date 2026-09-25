import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const token = localStorage.getItem("jobly_token");

  const user = JSON.parse(
    localStorage.getItem("jobly_user") || "null"
  );

  const handleDashboard = () => {
    setMenuOpen(false);

    if (user?.role === "employer") {
      navigate("/employer-dashboard");
    } else {
      navigate("/candidate-dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jobly_token");
    localStorage.removeItem("jobly_user");

    setMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Jobly
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/career-insights">
          Career Insights
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="nav-actions" ref={menuRef}>
        <button
          type="button"
          className={`nav-user-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Account menu"
          aria-expanded={menuOpen}
        >
          <UserRound size={20} />
        </button>

        {menuOpen && (
          <div className="account-dropdown">
            {token ? (
              <>
                <div className="account-dropdown-header">
                  <span>
                    {user?.first_name}{" "}
                    {user?.last_name}
                  </span>

                  <small>
                    {user?.role === "employer"
                      ? "Employer"
                      : "Candidate"}
                  </small>
                </div>

                <div className="dropdown-divider"></div>

                <button
                  type="button"
                  onClick={handleDashboard}
                  className="dropdown-item"
                >
                  <LayoutDashboard size={17} />
                  <span>Dashboard</span>
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="dropdown-item logout-item"
                >
                  <LogOut size={17} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="dropdown-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <LogIn size={17} />
                  <span>Login</span>
                </Link>

                <Link
                  to="/register"
                  className="dropdown-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <UserPlus size={17} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;