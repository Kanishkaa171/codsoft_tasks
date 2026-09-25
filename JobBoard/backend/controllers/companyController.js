const pool = require("../config/db");

const createCompany = async (req, res) => {
  try {
    const {
      name,
      description,
      website,
      location,
      industry,
      logoUrl,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Company name is required",
      });
    }

    const result = await pool.query(
      `INSERT INTO companies
       (name, description, website, location, industry, logo_url, employer_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        name,
        description || null,
        website || null,
        location || null,
        industry || null,
        logoUrl || null,
        req.user.id,
      ]
    );

    res.status(201).json({
      message: "Company created successfully",
      company: result.rows[0],
    });
  } catch (error) {
    console.error("Create company error:", error);

    res.status(500).json({
      message: "Server error while creating company",
    });
  }
};

module.exports = {
  createCompany,
};