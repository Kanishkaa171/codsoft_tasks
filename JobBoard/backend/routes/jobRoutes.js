const express = require("express");
const { getJobs, createJob, getJobById } = require("../controllers/jobController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getJobs);
router.post(
  "/",
  authenticateToken,
  authorizeRoles("employer"),
  createJob
);
router.get("/:id", getJobById);

module.exports = router;