import {
  Briefcase,
  Users,
  UserCheck,
  Plus,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getEmployerDashboard,
  getEmployerApplications,
} from "../services/api.js";


function EmployerDashboard() {
  const [data, setData] =
    useState(null);

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {
    const load = async () => {
      try {
        const [
          dashboard,
          applicationData,
        ] = await Promise.all([
          getEmployerDashboard(),
          getEmployerApplications(),
        ]);

        setData(dashboard);

        setApplications(
          Array.isArray(applicationData)
            ? applicationData
            : applicationData.applications ||
              []
        );

      } catch (err) {
        setError(
          err.message ||
          "Unable to load dashboard."
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);


  if (loading) {
    return (
      <div className="dashboard-state">
        Loading dashboard...
      </div>
    );
  }


  if (error) {
    return (
      <div className="dashboard-state">
        {error}
      </div>
    );
  }


  return (
    <main className="dashboard-page">

      <div className="dashboard-wrapper">

        <div className="dashboard-heading">

          <div>

            <p className="section-label">
              EMPLOYER DASHBOARD
            </p>

            <h1>
              Manage your hiring.
            </h1>

            <p>
              Publish opportunities and
              manage candidate applications.
            </p>

          </div>

          <Link
            to="/employer-dashboard/create-job"
            className="dashboard-primary-btn"
          >
            <Plus size={17} />
            Post a Job
          </Link>

        </div>


        <div className="dashboard-stats">

          <DashboardStat
            icon={<Briefcase size={20} />}
            label="Active Jobs"
            value={
              data?.activeJobs ?? 0
            }
          />

          <DashboardStat
            icon={<Users size={20} />}
            label="Applications"
            value={
              data?.totalApplications ?? 0
            }
          />

          <DashboardStat
            icon={<UserCheck size={20} />}
            label="Shortlisted"
            value={
              data?.shortlistedApplications ??
              0
            }
          />

          <DashboardStat
            icon={<Users size={20} />}
            label="Hired"
            value={
              data?.hiredApplications ?? 0
            }
          />

        </div>


        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>

              <h2>
                Recent applications
              </h2>

              <p>
                Review candidates who recently
                applied to your jobs.
              </p>

            </div>

          </div>


          <div className="dashboard-table">

            {applications.length === 0 ? (

              <div className="dashboard-empty">

                <h3>
                  No applications yet
                </h3>

                <p>
                  Applications will appear here
                  when candidates apply.
                </p>

              </div>

            ) : (

              applications
                .slice(0, 10)
                .map((application) => (

                  <div
                    className="dashboard-application"
                    key={application.id}
                  >

                    <div>

                      <strong>
                        {application.candidate_name ||
                          application.first_name ||
                          "Candidate"}
                      </strong>

                      <span>
                        {application.job_title ||
                          "Job"}
                      </span>

                    </div>

                    <span
                      className={`application-status ${
                        String(
                          application.status ||
                          "Applied"
                        ).toLowerCase()
                      }`}
                    >
                      {application.status ||
                        "Applied"}
                    </span>

                    <span>
                      {formatDate(
                        application.applied_at
                      )}
                    </span>

                  </div>

                ))

            )}

          </div>

        </section>

      </div>

    </main>
  );
}


function DashboardStat({
  icon,
  label,
  value,
}) {
  return (
    <div className="dashboard-stat">

      <div className="dashboard-stat-icon">
        {icon}
      </div>

      <div>

        <strong>
          {value}
        </strong>

        <span>
          {label}
        </span>

      </div>

    </div>
  );
}


function formatDate(date) {
  if (!date) return "";

  return new Date(date)
    .toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
}


export default EmployerDashboard;