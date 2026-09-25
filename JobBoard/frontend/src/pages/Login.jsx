import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api.js";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("jobly_token", data.token);

      localStorage.setItem(
        "jobly_user",
        JSON.stringify(data.user)
      );

      if (data.user.role === "employer") {
        navigate("/employer-dashboard");
      } else {
        navigate("/candidate-dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-visual">
        <div className="login-brand">
          <Link to="/" className="login-logo">
            Jobly
          </Link>

          <p>Find. Apply. Grow.</p>
        </div>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-wrapper">

          <div className="auth-mobile-logo">
            <Link to="/">Jobly</Link>
          </div>

          <div className="auth-heading">
            <p className="auth-label">ACCOUNT LOGIN</p>

            <h2>Welcome back.</h2>

            <p>
              Enter your details to access your account.
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">

              <div className="password-label-row">
                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    setError(
                      "Password reset will be available soon."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-input">

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="password-toggle"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}

              {!loading && <ArrowRight size={17} />}
            </button>

          </form>

          <div className="auth-divider">
            <span>New to Jobly?</span>
          </div>

          <Link
            to="/register"
            className="auth-secondary-button"
          >
            Create an account
          </Link>

          <p className="auth-footer-text">
            By continuing, you agree to Jobly's Terms of
            Service and Privacy Policy.
          </p>

        </div>
      </section>
    </main>
  );
}

export default Login;