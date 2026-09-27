import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const updateAuth = () => {
      const savedUser = localStorage.getItem("user");

      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("authChange", updateAuth);

    return () => {
      window.removeEventListener("authChange", updateAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        QUIZ<span>you</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/my-quizzes">My Quizzes</Link>
        <Link to="/create">Create Quiz</Link>

        {user ? (
          <>
            <span className="nav-user">
              Hi, {user.name} 👋
            </span>

            <button
              onClick={handleLogout}
              className="nav-logout"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;