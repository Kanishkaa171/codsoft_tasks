import {
  MapPin,
  Briefcase,
  Clock,
  Building2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getJobById } from "../services/api.js";
import jobs from "../data/jobs.js";
import Footer from "../components/Footer.jsx";

function JobDetail() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadJob = async () => {
      try {
        setLoading(true);
        setError("");

        /*
          First try PostgreSQL/API.
        */
        try {
          const data = await getJobById(id);

          const apiJob = data.job || data;

          if (apiJob && apiJob.id) {
            setJob(apiJob);
            return;
          }
        } catch {
          /*
            API job doesn't exist yet.
            We'll use the existing jobs.js data below.
          */
        }

        /*
          Temporary fallback:
          Use the existing 32 jobs from jobs.js
          until they are seeded into PostgreSQL.
        */
        const staticJob = jobs.find(
          (item) => String(item.id) === String(id)
        );

        if (staticJob) {
          setJob(staticJob);
          return;
        }

        setError("Job not found.");
      } catch (err) {
        setError(
          err.message || "Unable to load this job."
        );
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  if (loading) {
    return (
      <>
        <main className="job-detail-page">
          <div className="job-detail-loading">
            <div className="loading-spinner"></div>
            <p>Loading job details...</p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        <main className="job-detail-page">
          <div className="job-detail-error">

            <p className="section-label">
              JOB NOT FOUND
            </p>

            <h1>
              This opportunity is unavailable.
            </h1>

            <p>
              {error ||
                "The job you're looking for could not be found."}
            </p>

            <Link
              to="/jobs"
              className="back-to-jobs-btn"
            >
              <ArrowLeft size={17} />
              Back to Jobs
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="job-detail-page">

        {/* HERO */}

        <section className="job-detail-hero">

          <div className="job-detail-hero-inner">

            <Link
              to="/jobs"
              className="job-back-link"
            >
              <ArrowLeft size={16} />
              Back to Jobs
            </Link>

            <div className="job-detail-heading">

              <div className="job-detail-logo">
                {job.logo || (
                  <Building2 size={28} />
                )}
              </div>

              <div>

                <span className="job-detail-type">
                  {job.type}
                </span>

                <h1>
                  {job.title}
                </h1>

                <p className="job-detail-company">
                  {job.company}
                </p>

              </div>

            </div>

            <div className="job-detail-meta">

              <span>
                <MapPin size={17} />
                {job.location}
              </span>

              <span>
                <Briefcase size={17} />
                {job.experience}
              </span>

              <span>
                <Clock size={17} />
                {job.type}
              </span>

              {job.salary && (
                <span>
                  {job.salary}
                </span>
              )}

            </div>

          </div>

        </section>

        {/* MAIN CONTENT */}

        <section className="job-detail-container">

          <div className="job-detail-content">

            {/* DESCRIPTION */}

            <section className="job-detail-section">

              <p className="section-label">
                ABOUT THE ROLE
              </p>

              <h2>
                Job Description
              </h2>

              <p className="job-description">
                {job.description}
              </p>

            </section>

            {/* RESPONSIBILITIES */}

            {job.responsibilities?.length > 0 && (
              <section className="job-detail-section">

                <p className="section-label">
                  WHAT YOU'LL DO
                </p>

                <h2>
                  Responsibilities
                </h2>

                <ul className="job-detail-list">

                  {job.responsibilities.map(
                    (item, index) => (
                      <li key={index}>

                        <CheckCircle2 size={18} />

                        <span>
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </section>
            )}

            {/* REQUIREMENTS */}

            {job.requirements?.length > 0 && (
              <section className="job-detail-section">

                <p className="section-label">
                  WHAT WE'RE LOOKING FOR
                </p>

                <h2>
                  Requirements
                </h2>

                <ul className="job-detail-list">

                  {job.requirements.map(
                    (item, index) => (
                      <li key={index}>

                        <CheckCircle2 size={18} />

                        <span>
                          {item}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </section>
            )}

            {/* SKILLS */}

            {job.skills?.length > 0 && (
              <section className="job-detail-section">

                <p className="section-label">
                  SKILLS
                </p>

                <h2>
                  Skills & Technologies
                </h2>

                <div className="job-skills">

                  {job.skills.map(
                    (skill, index) => (
                      <span key={index}>
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </section>
            )}

          </div>

          {/* SIDEBAR */}

          <aside className="job-detail-sidebar">

            <div className="apply-card">

              <p className="section-label">
                READY TO APPLY?
              </p>

              <h3>
                Take the next step.
              </h3>

              <p>
                Submit your application and
                start your journey with{" "}
                {job.company}.
              </p>

              <Link
                to={`/jobs/${job.id}/apply`}
                className="apply-now-btn"
              >
                Apply Now
                <span>→</span>
              </Link>

            </div>

            {/* JOB SUMMARY */}

            <div className="job-summary-card">

              <h3>
                Job Summary
              </h3>

              <div className="summary-item">

                <MapPin size={17} />

                <div>
                  <small>
                    Location
                  </small>

                  <strong>
                    {job.location}
                  </strong>
                </div>

              </div>

              <div className="summary-item">

                <Briefcase size={17} />

                <div>
                  <small>
                    Experience
                  </small>

                  <strong>
                    {job.experience}
                  </strong>
                </div>

              </div>

              <div className="summary-item">

                <Clock size={17} />

                <div>
                  <small>
                    Job Type
                  </small>

                  <strong>
                    {job.type}
                  </strong>
                </div>

              </div>

              <div className="summary-item">

                <Building2 size={17} />

                <div>
                  <small>
                    Company
                  </small>

                  <strong>
                    {job.company}
                  </strong>
                </div>

              </div>

            </div>

          </aside>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default JobDetail;