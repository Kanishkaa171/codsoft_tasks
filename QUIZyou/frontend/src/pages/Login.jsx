import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.dispatchEvent(new Event("authChange"));

      setMessage("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration auth-pink"></div>
      <div className="auth-decoration auth-blue"></div>

      <div className="auth-card">
        <div className="auth-icon">♡</div>

        <span className="auth-label">WELCOME BACK</span>

        <h1>Good to see you!</h1>

        <p className="auth-subtitle">
          Log in to continue your quiz journey.
        </p>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          {message && <p className="auth-success">{message}</p>}

          <button type="submit" className="auth-button">
            Log In <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;