const pool = require("../config/db");

const saveJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const jobCheck = await pool.query(
      `
      SELECT id
      FROM jobs
      WHERE id = $1
        AND is_active = TRUE
      `,
      [jobId]
    );

    if (jobCheck.rows.length === 0) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const existingSave = await pool.query(
      `
      SELECT id
      FROM saved_jobs
      WHERE candidate_id = $1
        AND job_id = $2
      `,
      [req.user.id, jobId]
    );

    if (existingSave.rows.length > 0) {
      return res.status(409).json({
        message: "Job is already saved",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO saved_jobs
      (candidate_id, job_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [req.user.id, jobId]
    );

    res.status(201).json({
      message: "Job saved successfully",
      savedJob: result.rows[0],
    });
  } catch (error) {
    console.error("Save job error:", error);

    res.status(500).json({
      message: "Server error while saving job",
    });
  }
};


const removeSavedJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const result = await pool.query(
      `
      DELETE FROM saved_jobs
      WHERE candidate_id = $1
        AND job_id = $2
      RETURNING *
      `,
      [req.user.id, jobId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Saved job not found",
      });
    }

    res.json({
      message: "Job removed from saved jobs",
    });
  } catch (error) {
    console.error("Remove saved job error:", error);

    res.status(500).json({
      message: "Server error while removing saved job",
    });
  }
};


const getSavedJobs = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        saved_jobs.id AS saved_job_id,
        saved_jobs.saved_at,

        jobs.id AS job_id,
        jobs.title,
        jobs.description,
        jobs.location,
        jobs.type,
        jobs.experience,
        jobs.salary,
        jobs.category,
        jobs.skills,
        jobs.posted_at,

        companies.id AS company_id,
        companies.name AS company_name,
        companies.logo_url AS company_logo

      FROM saved_jobs

      JOIN jobs
        ON saved_jobs.job_id = jobs.id

      JOIN companies
        ON jobs.company_id = companies.id

      WHERE saved_jobs.candidate_id = $1

      ORDER BY saved_jobs.saved_at DESC
      `,
      [req.user.id]
    );

    res.json({
      savedJobs: result.rows,
    });
  } catch (error) {
    console.error("Get saved jobs error:", error);

    res.status(500).json({
      message: "Server error while fetching saved jobs",
    });
  }
};


module.exports = {
  saveJob,
  removeSavedJob,
  getSavedJobs,
};