import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  Upload,
  ArrowLeft,
} from "lucide-react";

import { applyToJob } from "../services/api.js";


function Application() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem(
      "jobly_user"
    ) || "null"
  );

  const [form, setForm] = useState({
    firstName:
      user?.first_name || "",
    lastName:
      user?.last_name || "",
    email:
      user?.email || "",
    phone:
      user?.phone || "",
    coverLetter: "",
  });

  const [resume, setResume] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!localStorage.getItem("jobly_token")) {
      navigate("/login");
      return;
    }

    if (!resume) {
      setError(
        "Please upload your resume."
      );
      return;
    }

    try {
      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "firstName",
        form.firstName
      );

      formData.append(
        "lastName",
        form.lastName
      );

      formData.append(
        "email",
        form.email
      );

      formData.append(
        "phone",
        form.phone
      );

      formData.append(
        "coverLetter",
        form.coverLetter
      );

      formData.append(
        "resume",
        resume
      );

      await applyToJob(
        id,
        formData
      );

      setSuccess(
        "Application submitted successfully."
      );

      setTimeout(() => {
        navigate(
          "/candidate-dashboard"
        );
      }, 1200);

    } catch (err) {
      setError(
        err.message ||
        "Unable to submit application."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="application-page">

      <div className="application-wrapper">

        <Link
          to={`/jobs/${id}`}
          className="job-back-link"
        >
          <ArrowLeft size={16} />
          Back to job
        </Link>


        <div className="application-header">

          <p className="section-label">
            JOB APPLICATION
          </p>

          <h1>
            Apply for this position.
          </h1>

          <p>
            Submit your details and resume
            to complete your application.
          </p>

        </div>


        <form
          className="application-form"
          onSubmit={handleSubmit}
        >

          <div className="application-grid">

            <div className="form-field">

              <label>
                First Name
              </label>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-field">

              <label>
                Last Name
              </label>

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-field">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-field">

              <label>
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

            </div>

          </div>


          <div className="form-field">

            <label>
              Resume
            </label>

            <label className="resume-upload">

              <Upload size={20} />

              <span>
                {resume
                  ? resume.name
                  : "Upload PDF, DOC or DOCX"}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResume(
                    e.target.files?.[0] ||
                    null
                  )
                }
                required
              />

            </label>

          </div>


          <div className="form-field">

            <label>
              Cover Letter
            </label>

            <textarea
              name="coverLetter"
              rows="8"
              value={
                form.coverLetter
              }
              onChange={handleChange}
              placeholder="Tell the employer why you're a good fit..."
            />

          </div>


          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          {success && (
            <p className="form-success">
              {success}
            </p>
          )}


          <button
            className="application-submit"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Application"}
          </button>

        </form>

      </div>

    </main>
  );
}


export default Application;