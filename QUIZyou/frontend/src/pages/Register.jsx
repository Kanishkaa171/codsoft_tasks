import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to create account.");
        return;
      }

      setMessage("Account created successfully! Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration auth-pink"></div>
      <div className="auth-decoration auth-blue"></div>

      <div className="auth-card">
        <div className="auth-icon">✦</div>

        <span className="auth-label">JOIN QUIZyou</span>

        <h1>Let's get started!</h1>

        <p className="auth-subtitle">
          Create your account and start making quizzes.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email address</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          {message && <p className="auth-success">{message}</p>}

          <button type="submit" className="auth-button">
            Create Account <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;