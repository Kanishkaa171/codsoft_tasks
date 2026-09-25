const pool = require("../config/db");
const { sendEmail } = require("../utils/emailService");

const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { coverLetter } = req.body;

    const jobCheck = await pool.query(
      `
      SELECT
        jobs.id,
        jobs.title,
        companies.name AS company_name,
        users.id AS employer_id,
        users.email AS employer_email
      FROM jobs
      JOIN companies
        ON jobs.company_id = companies.id
      JOIN users
        ON companies.employer_id = users.id
      WHERE jobs.id = $1
        AND jobs.is_active = TRUE
      `,
      [jobId]
    );

    if (jobCheck.rows.length === 0) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const existingApplication = await pool.query(
      `
      SELECT id
      FROM applications
      WHERE job_id = $1
        AND candidate_id = $2
      `,
      [jobId, req.user.id]
    );

    if (existingApplication.rows.length > 0) {
      return res.status(409).json({
        message: "You have already applied for this job",
      });
    }

    const resumeUrl = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const result = await pool.query(
      `
      INSERT INTO applications
      (
        job_id,
        candidate_id,
        resume_url,
        cover_letter
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [
        jobId,
        req.user.id,
        resumeUrl,
        coverLetter || null,
      ]
    );

    const candidateResult = await pool.query(
      `
      SELECT
        first_name,
        last_name,
        email
      FROM users
      WHERE id = $1
      `,
      [req.user.id]
    );

    const candidate = candidateResult.rows[0];

    if (candidate) {
      await sendEmail({
        to: candidate.email,
        subject: "Application submitted successfully — Jobly",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Application Submitted</h2>

            <p>
              Hi ${candidate.first_name},
            </p>

            <p>
              Your application for
              <strong>${jobCheck.rows[0].title}</strong>
              at
              <strong>${jobCheck.rows[0].company_name}</strong>
              has been submitted successfully.
            </p>

            <p>
              You can track your application status from your Jobly dashboard.
            </p>

            <p>
              Best,<br />
              <strong>Jobly</strong>
            </p>
          </div>
        `,
      });
    }

    res.status(201).json({
      message: "Application submitted successfully",
      application: result.rows[0],
    });
  } catch (error) {
    console.error("Apply to job error:", error);

    res.status(500).json({
      message: "Server error while applying for job",
    });
  }
};


const getCandidateApplications = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        applications.id,
        applications.status,
        applications.resume_url,
        applications.cover_letter,
        applications.applied_at,

        jobs.id AS job_id,
        jobs.title AS job_title,
        jobs.location,
        jobs.type,
        jobs.experience,
        jobs.salary,
        jobs.category,

        companies.id AS company_id,
        companies.name AS company_name,
        companies.logo_url AS company_logo

      FROM applications

      JOIN jobs
        ON applications.job_id = jobs.id

      JOIN companies
        ON jobs.company_id = companies.id

      WHERE applications.candidate_id = $1

      ORDER BY applications.applied_at DESC
      `,
      [req.user.id]
    );

    res.json({
      applications: result.rows,
    });
  } catch (error) {
    console.error("Get candidate applications error:", error);

    res.status(500).json({
      message: "Server error while fetching applications",
    });
  }
};


const getEmployerApplications = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        applications.id,
        applications.status,
        applications.resume_url,
        applications.cover_letter,
        applications.applied_at,

        jobs.id AS job_id,
        jobs.title AS job_title,

        users.id AS candidate_id,
        users.first_name,
        users.last_name,
        users.email,
        users.phone

      FROM applications

      JOIN jobs
        ON applications.job_id = jobs.id

      JOIN companies
        ON jobs.company_id = companies.id

      JOIN users
        ON applications.candidate_id = users.id

      WHERE companies.employer_id = $1

      ORDER BY applications.applied_at DESC
      `,
      [req.user.id]
    );

    res.json({
      applications: result.rows,
    });
  } catch (error) {
    console.error("Get employer applications error:", error);

    res.status(500).json({
      message: "Server error while fetching applications",
    });
  }
};


const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "Applied",
      "Shortlisted",
      "Rejected",
      "Hired",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid application status",
      });
    }

    const result = await pool.query(
      `
      UPDATE applications
      SET status = $1
      WHERE id = $2
        AND job_id IN (
          SELECT jobs.id
          FROM jobs

          JOIN companies
            ON jobs.company_id = companies.id

          WHERE companies.employer_id = $3
        )
      RETURNING *
      `,
      [status, applicationId, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

     const candidateResult = await pool.query(
      `
      SELECT
        users.id AS candidate_id,
        users.first_name,
        users.email,
        jobs.title,
        companies.name AS company_name
      FROM applications
      JOIN users
        ON applications.candidate_id = users.id
      JOIN jobs
        ON applications.job_id = jobs.id
      JOIN companies
        ON jobs.company_id = companies.id
      WHERE applications.id = $1
      `,
      [applicationId]
    );

    const candidate = candidateResult.rows[0];

    if (candidate) {
      await pool.query(
        `
        INSERT INTO notifications
        (
          user_id,
          title,
          message,
          type
        )
        VALUES ($1, $2, $3, $4)
        `,
        [
          candidate.candidate_id,
          "Application status updated",
          `Your application status for ${candidate.title} has been changed to ${status}.`,
          "application",
        ]
      );

      await sendEmail({
        to: candidate.email,
        subject: `Application update — ${candidate.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Application Status Updated</h2>

            <p>
              Hi ${candidate.first_name},
            </p>

            <p>
              Your application for
              <strong>${candidate.title}</strong>
              at
              <strong>${candidate.company_name}</strong>
              has been updated.
            </p>

            <p>
              New status:
              <strong>${status}</strong>
            </p>

            <p>
              Log in to Jobly to view your application details.
            </p>

            <p>
              Best,<br />
              <strong>Jobly</strong>
            </p>
          </div>
        `,
      });
    }

    res.json({
      message: "Application status updated successfully",
      application: result.rows[0],
    });
  } catch (error) {
    console.error("Update application status error:", error);

    res.status(500).json({
      message: "Server error while updating application status",
    });
  }
};


module.exports = {
  applyToJob,
  getCandidateApplications,
  getEmployerApplications,
  updateApplicationStatus,
};