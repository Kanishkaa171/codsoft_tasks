import {
  Briefcase,
  Bookmark,
  Bell,
  Clock3,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getCandidateDashboard,
  getCandidateApplications,
} from "../services/api.js";


function CandidateDashboard() {
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
          getCandidateDashboard(),
          getCandidateApplications(),
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
              CANDIDATE DASHBOARD
            </p>

            <h1>
              Welcome back.
            </h1>

            <p>
              Track your applications and
              manage your job search.
            </p>
          </div>

          <Link
            to="/jobs"
            className="dashboard-primary-btn"
          >
            Find Jobs
          </Link>

        </div>


        <div className="dashboard-stats">

          <DashboardStat
            icon={<Briefcase size={20} />}
            label="Applications"
            value={
              data?.applications ??
              applications.length
            }
          />

          <DashboardStat
            icon={<Bookmark size={20} />}
            label="Saved Jobs"
            value={
              data?.savedJobs ?? 0
            }
          />

          <DashboardStat
            icon={<Bell size={20} />}
            label="Job Alerts"
            value={
              data?.activeJobAlerts ?? 0
            }
          />

          <DashboardStat
            icon={<Clock3 size={20} />}
            label="Notifications"
            value={
              data?.unreadNotifications ?? 0
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
                Keep track of your latest
                applications.
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
                  Start exploring jobs and
                  submit your first application.
                </p>

                <Link to="/jobs">
                  Browse Jobs →
                </Link>

              </div>

            ) : (

              applications
                .slice(0, 8)
                .map((application) => (

                  <div
                    className="dashboard-application"
                    key={application.id}
                  >

                    <div>

                      <strong>
                        {application.job_title ||
                          application.title ||
                          "Job"}
                      </strong>

                      <span>
                        {application.company_name ||
                          "Company"}
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


export default CandidateDashboard;