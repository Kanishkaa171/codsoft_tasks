import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ArrowRight,
  UserRound,
  Building2,
} from "lucide-react";
import { signupUser } from "../services/api.js";

function Signup() {
  const navigate = useNavigate(); 

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
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

  const handleRoleChange = (role) => {
    setFormData((current) => ({
      ...current,
      role,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signupUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-page">
      <div className="signup-card">

        <div className="signup-brand">
          <Link to="/" className="signup-logo">
            Jobly
          </Link>

          <p>Find. Apply. Grow.</p>
        </div>

        <div className="signup-heading">
          <p className="signup-label">
            CREATE ACCOUNT
          </p>

          <h1>Create your account.</h1>

          <p>
            Join Jobly and discover opportunities built
            for your next step.
          </p>
        </div>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <div className="signup-group">
            <label>
              Account type
            </label>

            <div className="signup-role-options">

              <button
                type="button"
                className={`signup-role-card ${
                  formData.role === "candidate"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleRoleChange("candidate")
                }
              >
                <UserRound size={21} />

                <div>
                  <strong>
                    Candidate
                  </strong>

                  <span>
                    Find jobs and apply
                  </span>
                </div>
              </button>

              <button
                type="button"
                className={`signup-role-card ${
                  formData.role === "employer"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleRoleChange("employer")
                }
              >
                <Building2 size={21} />

                <div>
                  <strong>
                    Employer
                  </strong>

                  <span>
                    Hire candidates and manage jobs
                  </span>
                </div>
              </button>

            </div>
          </div>

          <div className="signup-name-row">

            <div className="signup-group">
              <label htmlFor="firstName">
                First name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="signup-group">
              <label htmlFor="lastName">
                Last name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="signup-group">
            <label htmlFor="signupEmail">
              Email address
            </label>

            <input
              id="signupEmail"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-group">
            <label htmlFor="signupPassword">
              Password
            </label>

            <div className="signup-password">
              <input
                id="signupPassword"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
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

          <div className="signup-group">
            <label htmlFor="confirmPassword">
              Confirm password
            </label>

            <div className="signup-password">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="signup-error">
              {error}
            </p>
          )}

          <label className="signup-terms">
            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the Terms of Service and
              Privacy Policy.
            </span>
          </label>

          <button
            type="submit"
            className="signup-submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}

            {!loading && (
              <ArrowRight size={17} />
            )}
          </button>

        </form>

        <p className="signup-login">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}

export default Signup;