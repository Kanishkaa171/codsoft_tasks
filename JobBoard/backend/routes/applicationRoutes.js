const express = require("express");

const {
  applyToJob,
  getCandidateApplications,
  getEmployerApplications,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const uploadResume = require("../middleware/uploadMiddleware");

const router = express.Router();

// Candidate submits an application
router.post(
  "/:jobId",
  authenticateToken,
  authorizeRoles("candidate"),
  uploadResume.single("resume"),
  applyToJob
);

// Candidate views their own applications
router.get(
  "/candidate",
  authenticateToken,
  authorizeRoles("candidate"),
  getCandidateApplications
);

// Employer views applications for their jobs
router.get(
  "/employer",
  authenticateToken,
  authorizeRoles("employer"),
  getEmployerApplications
);

// Employer updates application status
router.patch(
  "/:applicationId/status",
  authenticateToken,
  authorizeRoles("employer"),
  updateApplicationStatus
);

module.exports = router;