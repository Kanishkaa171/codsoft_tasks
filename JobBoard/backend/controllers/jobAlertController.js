const pool = require("../config/db");

const createJobAlert = async (req, res) => {
  try {
    const {
      keyword,
      location,
      category,
      jobType,
    } = req.body;

    if (!keyword && !location && !category && !jobType) {
      return res.status(400).json({
        message: "Please provide at least one alert preference",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO job_alerts
      (
        candidate_id,
        keyword,
        location,
        category,
        job_type
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [
        req.user.id,
        keyword || null,
        location || null,
        category || null,
        jobType || null,
      ]
    );

    res.status(201).json({
      message: "Job alert created successfully",
      alert: result.rows[0],
    });
  } catch (error) {
    console.error("Create job alert error:", error);

    res.status(500).json({
      message: "Server error while creating job alert",
    });
  }
};


const getJobAlerts = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM job_alerts
      WHERE candidate_id = $1
      ORDER BY created_at DESC
      `,
      [req.user.id]
    );

    res.json({
      alerts: result.rows,
    });
  } catch (error) {
    console.error("Get job alerts error:", error);

    res.status(500).json({
      message: "Server error while fetching job alerts",
    });
  }
};


const deleteJobAlert = async (req, res) => {
  try {
    const { alertId } = req.params;

    const result = await pool.query(
      `
      DELETE FROM job_alerts
      WHERE id = $1
        AND candidate_id = $2
      RETURNING *
      `,
      [alertId, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Job alert not found",
      });
    }

    res.json({
      message: "Job alert deleted successfully",
    });
  } catch (error) {
    console.error("Delete job alert error:", error);

    res.status(500).json({
      message: "Server error while deleting job alert",
    });
  }
};


const toggleJobAlert = async (req, res) => {
  try {
    const { alertId } = req.params;

    const result = await pool.query(
      `
      UPDATE job_alerts
      SET is_active = NOT is_active
      WHERE id = $1
        AND candidate_id = $2
      RETURNING *
      `,
      [alertId, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Job alert not found",
      });
    }

    res.json({
      message: "Job alert status updated",
      alert: result.rows[0],
    });
  } catch (error) {
    console.error("Toggle job alert error:", error);

    res.status(500).json({
      message: "Server error while updating job alert",
    });
  }
};


module.exports = {
  createJobAlert,
  getJobAlerts,
  deleteJobAlert,
  toggleJobAlert,
};