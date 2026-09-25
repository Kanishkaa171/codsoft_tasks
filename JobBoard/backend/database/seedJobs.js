const fs = require("fs");
const path = require("path");
const vm = require("vm");
const pool = require("../config/db");

const jobsFilePath = path.join(
  __dirname,
  "../../frontend/src/data/jobs.js"
);

function loadJobsFile() {
  const source = fs.readFileSync(jobsFilePath, "utf8");

  const jobsMatch = source.match(
    /const jobs\s*=\s*(\[[\s\S]*?\]);\s*\n\s*const categoryMap/
  );

  const categoryMatch = source.match(
    /const categoryMap\s*=\s*(\{[\s\S]*?\});\s*\n\s*const categorizedJobs/
  );

  if (!jobsMatch || !categoryMatch) {
    throw new Error("Could not read jobs.js correctly.");
  }

  const jobs = vm.runInNewContext(`(${jobsMatch[1]})`);
  const categoryMap = vm.runInNewContext(`(${categoryMatch[1]})`);

  return { jobs, categoryMap };
}

async function seedJobs() {
  const client = await pool.connect();

  try {
    console.log("\nStarting Jobly job migration...\n");

    const { jobs, categoryMap } = loadJobsFile();

    console.log(`Found ${jobs.length} jobs in jobs.js`);

    const employerResult = await client.query(`
      SELECT id, email
      FROM users
      WHERE role = 'employer'
      ORDER BY id
      LIMIT 1
    `);

    if (employerResult.rows.length === 0) {
      throw new Error(
        "No employer account found. Create an employer account first."
      );
    }

    const employer = employerResult.rows[0];

    console.log(`Using employer: ${employer.email}\n`);

    await client.query("BEGIN");

    let insertedJobs = 0;
    let existingJobs = 0;

    for (const job of jobs) {
      const category = categoryMap[job.id] || "Other";

      // Find or create company
      const companyResult = await client.query(
        `
        SELECT id
        FROM companies
        WHERE name = $1
          AND employer_id = $2
        LIMIT 1
        `,
        [job.company, employer.id]
      );

      let companyId;

      if (companyResult.rows.length > 0) {
        companyId = companyResult.rows[0].id;
      } else {
        const newCompany = await client.query(
          `
          INSERT INTO companies
          (
            name,
            description,
            location,
            industry,
            employer_id
          )
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id
          `,
          [
            job.company,
            `${job.company} is hiring talented professionals to join its growing team.`,
            job.location,
            category,
            employer.id,
          ]
        );

        companyId = newCompany.rows[0].id;
      }

      // Prevent duplicate jobs
      const existingJob = await client.query(
        `
        SELECT id
        FROM jobs
        WHERE company_id = $1
          AND title = $2
          AND location = $3
        LIMIT 1
        `,
        [
          companyId,
          job.title,
          job.location,
        ]
      );

      if (existingJob.rows.length > 0) {
        existingJobs++;

        console.log(
          `Already exists: ${job.title} — ${job.company}`
        );

        continue;
      }

      // Insert job
      await client.query(
        `
        INSERT INTO jobs
        (
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
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `,
        [
          companyId,
          job.title,
          job.description,
          job.location,
          job.type,
          job.experience,
          job.salary,
          category,
          job.skills,
          job.responsibilities,
          job.requirements,
        ]
      );

      insertedJobs++;

      console.log(
        `Inserted: ${job.title} — ${job.company}`
      );
    }

    await client.query("COMMIT");

    console.log("\n================================");
    console.log("JOB MIGRATION COMPLETED");
    console.log("================================");
    console.log(`Jobs found:       ${jobs.length}`);
    console.log(`Jobs inserted:    ${insertedJobs}`);
    console.log(`Already existed:  ${existingJobs}`);
    console.log("================================\n");

  } catch (error) {
    await client.query("ROLLBACK");

    console.error("\nMigration failed:");
    console.error(error);

    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seedJobs();