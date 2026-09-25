const pool = require("../config/db");

// GET ALL JOBS
const getJobs = async (req, res) => {
  try {
    const {
      search = "",
      location = "",
      type = "",
      experience = "",
      category = "",
      page = 1,
      limit = 7,
    } = req.query;

    const pageNumber = Math.max(Number(page), 1);
    const limitNumber = Math.max(Number(limit), 1);
    const offset = (pageNumber - 1) * limitNumber;

    const values = [];
    const conditions = ["j.is_active = TRUE"];

    if (search.trim()) {
      values.push(`%${search.trim()}%`);

      conditions.push(`
        (
          j.title ILIKE $${values.length}
          OR j.description ILIKE $${values.length}
          OR c.name ILIKE $${values.length}
          OR EXISTS (
            SELECT 1
            FROM unnest(j.skills) AS skill
            WHERE skill ILIKE $${values.length}
          )
        )
      `);
    }

    if (location.trim()) {
      values.push(`%${location.trim()}%`);

      conditions.push(`
        j.location ILIKE $${values.length}
      `);
    }

    if (type.trim()) {
      values.push(type.trim());

      conditions.push(`
        REPLACE(LOWER(j.type), '-', ' ')
        =
        REPLACE(LOWER($${values.length}), '-', ' ')
      `);
    }

    if (experience.trim()) {
      values.push(experience.trim());

      conditions.push(`
        LOWER(j.experience) = LOWER($${values.length})
      `);
    }

    if (category.trim()) {
      values.push(category.trim());

      conditions.push(`
        LOWER(j.category) = LOWER($${values.length})
      `);
    }

    const whereClause = conditions.join(" AND ");

    // Total count
    const countQuery = `
      SELECT COUNT(*) AS count
      FROM jobs j
      JOIN companies c
        ON c.id = j.company_id
      WHERE ${whereClause}
    `;

    const countResult = await pool.query(
      countQuery,
      values
    );

    const total = Number(countResult.rows[0].count);

    // Jobs
    const jobsQuery = `
      SELECT
        j.id,
        j.title,
        j.description,
        j.location,
        j.type,
        j.experience,
        j.salary,
        j.category,
        j.skills,
        j.responsibilities,
        j.requirements,
        j.posted_at,
        j.is_active,

        c.id AS company_id,
        c.name AS company_name,
        c.description AS company_description,
        c.website AS company_website,
        c.location AS company_location,
        c.industry AS company_industry,
        c.logo_url AS company_logo

      FROM jobs j

      JOIN companies c
        ON c.id = j.company_id

      WHERE ${whereClause}

      ORDER BY j.posted_at DESC

      LIMIT $${values.length + 1}
      OFFSET $${values.length + 2}
    `;

    const jobsResult = await pool.query(
      jobsQuery,
      [
        ...values,
        limitNumber,
        offset,
      ]
    );

    res.json({
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.max(
        1,
        Math.ceil(total / limitNumber)
      ),
      jobs: jobsResult.rows,
    });

  } catch (error) {
    console.error("Get jobs error:", error);

    res.status(500).json({
      message: "Failed to fetch jobs",
    });
  }
};


// GET SINGLE JOB
const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT
        j.id,
        j.title,
        j.description,
        j.location,
        j.type,
        j.experience,
        j.salary,
        j.category,
        j.skills,
        j.responsibilities,
        j.requirements,
        j.posted_at,
        j.is_active,

        c.id AS company_id,
        c.name AS company_name,
        c.description AS company_description,
        c.website AS company_website,
        c.location AS company_location,
        c.industry AS company_industry,
        c.logo_url AS company_logo

      FROM jobs j

      JOIN companies c
        ON c.id = j.company_id

      WHERE j.id = $1
        AND j.is_active = TRUE
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    console.error("Get job error:", error);

    res.status(500).json({
      message: "Failed to fetch job",
    });
  }
};


// CREATE JOB
const createJob = async (req, res) => {
  try {
    const {
      companyId,
      title,
      description,
      location,
      type,
      experience,
      salary,
      category,
      skills = [],
      responsibilities = [],
      requirements = [],
    } = req.body;

    if (
      !companyId ||
      !title ||
      !description ||
      !location ||
      !type
    ) {
      return res.status(400).json({
        message:
          "Company, title, description, location and type are required",
      });
    }

    const companyResult = await pool.query(
      `
      SELECT id
      FROM companies
      WHERE id = $1
        AND employer_id = $2
      `,
      [companyId, req.user.id]
    );

    if (companyResult.rows.length === 0) {
      return res.status(403).json({
        message:
          "You can only create jobs for your own company",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO jobs (
        company_id,
        title,
        description,
        location,
        type,
        experience,
        salary,
        category,
        skills,
        responsibilities,
        requirements
      )

      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
      )

      RETURNING *
      `,
      [
        companyId,
        title,
        description,
        location,
        type,
        experience || null,
        salary || null,
        category || null,
        skills,
        responsibilities,
        requirements,
      ]
    );

    res.status(201).json({
      message: "Job created successfully",
      job: result.rows[0],
    });

  } catch (error) {
    console.error("Create job error:", error);

    res.status(500).json({
      message: "Failed to create job",
    });
  }
};


module.exports = {
  getJobs,
  getJobById,
  createJob,
};