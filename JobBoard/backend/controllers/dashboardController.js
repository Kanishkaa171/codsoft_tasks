const pool = require("../config/db");


// ==============================
// CANDIDATE DASHBOARD
// ==============================

const getCandidateDashboard = async (req, res) => {
  try {
    const candidateId = req.user.id;

    const [
      applicationStats,
      savedJobsCount,
      jobAlertsCount,
      unreadNotifications,
      recentApplications,
    ] = await Promise.all([

      pool.query(
        `
        SELECT
          COUNT(*)::INTEGER AS total,
          COUNT(*) FILTER (
            WHERE status = 'Applied'
          )::INTEGER AS applied,
          COUNT(*) FILTER (
            WHERE status = 'Shortlisted'
          )::INTEGER AS shortlisted,
          COUNT(*) FILTER (
            WHERE status = 'Rejected'
          )::INTEGER AS rejected,
          COUNT(*) FILTER (
            WHERE status = 'Hired'
          )::INTEGER AS hired
        FROM applications
        WHERE candidate_id = $1
        `,
        [candidateId]
      ),

      pool.query(
        `
        SELECT COUNT(*)::INTEGER AS count
        FROM saved_jobs
        WHERE candidate_id = $1
        `,
        [candidateId]
      ),

      pool.query(
        `
        SELECT COUNT(*)::INTEGER AS count
        FROM job_alerts
        WHERE candidate_id = $1
          AND is_active = TRUE
        `,
        [candidateId]
      ),

      pool.query(
        `
        SELECT COUNT(*)::INTEGER AS count
        FROM notifications
        WHERE user_id = $1
          AND is_read = FALSE
        `,
        [candidateId]
      ),

      pool.query(
        `
        SELECT
          applications.id,
          applications.status,
          applications.applied_at,

          jobs.id AS job_id,
          jobs.title AS job_title,

          companies.name AS company_name,
          companies.logo_url AS company_logo

        FROM applications

        JOIN jobs
          ON applications.job_id = jobs.id

        JOIN companies
          ON jobs.company_id = companies.id

        WHERE applications.candidate_id = $1

        ORDER BY applications.applied_at DESC

        LIMIT 5
        `,
        [candidateId]
      ),
    ]);

    const stats = applicationStats.rows[0];

    res.json({
      dashboard: {
        applications: {
          total: stats.total,
          applied: stats.applied,
          shortlisted: stats.shortlisted,
          rejected: stats.rejected,
          hired: stats.hired,
        },

        savedJobs: savedJobsCount.rows[0].count,

        activeJobAlerts: jobAlertsCount.rows[0].count,

        unreadNotifications: unreadNotifications.rows[0].count,

        recentApplications: recentApplications.rows,
      },
    });
  } catch (error) {
    console.error("Candidate dashboard error:", error);

    res.status(500).json({
      message: "Server error while loading candidate dashboard",
    });
  }
};


// ==============================
// EMPLOYER DASHBOARD
// ==============================

const getEmployerDashboard = async (req, res) => {
  try {
    const employerId = req.user.id;

    const [
      jobStats,
      applicationStats,
      recentApplications,
    ] = await Promise.all([

      pool.query(
        `
        SELECT
          COUNT(*)::INTEGER AS total_jobs,

          COUNT(*) FILTER (
            WHERE jobs.is_active = TRUE
          )::INTEGER AS active_jobs,

          COUNT(*) FILTER (
            WHERE jobs.is_active = FALSE
          )::INTEGER AS inactive_jobs

        FROM jobs

        JOIN companies
          ON jobs.company_id = companies.id

        WHERE companies.employer_id = $1
        `,
        [employerId]
      ),

      pool.query(
        `
        SELECT
          COUNT(applications.id)::INTEGER AS total_applications,

          COUNT(applications.id) FILTER (
            WHERE applications.status = 'Applied'
          )::INTEGER AS applied,

          COUNT(applications.id) FILTER (
            WHERE applications.status = 'Shortlisted'
          )::INTEGER AS shortlisted,

          COUNT(applications.id) FILTER (
            WHERE applications.status = 'Rejected'
          )::INTEGER AS rejected,

          COUNT(applications.id) FILTER (
            WHERE applications.status = 'Hired'
          )::INTEGER AS hired

        FROM applications

        JOIN jobs
          ON applications.job_id = jobs.id

        JOIN companies
          ON jobs.company_id = companies.id

        WHERE companies.employer_id = $1
        `,
        [employerId]
      ),

      pool.query(
        `
        SELECT
          applications.id,
          applications.status,
          applications.applied_at,

          jobs.id AS job_id,
          jobs.title AS job_title,

          users.id AS candidate_id,
          users.first_name,
          users.last_name,
          users.email

        FROM applications

        JOIN jobs
          ON applications.job_id = jobs.id

        JOIN companies
          ON jobs.company_id = companies.id

        JOIN users
          ON applications.candidate_id = users.id

        WHERE companies.employer_id = $1

        ORDER BY applications.applied_at DESC

        LIMIT 8
        `,
        [employerId]
      ),
    ]);

    const jobs = jobStats.rows[0];
    const applications = applicationStats.rows[0];

    res.json({
      dashboard: {
        jobs: {
          total: jobs.total_jobs,
          active: jobs.active_jobs,
          inactive: jobs.inactive_jobs,
        },

        applications: {
          total: applications.total_applications,
          applied: applications.applied,
          shortlisted: applications.shortlisted,
          rejected: applications.rejected,
          hired: applications.hired,
        },

        recentApplications: recentApplications.rows,
      },
    });
  } catch (error) {
    console.error("Employer dashboard error:", error);

    res.status(500).json({
      message: "Server error while loading employer dashboard",
    });
  }
};


module.exports = {
  getCandidateDashboard,
  getEmployerDashboard,
};