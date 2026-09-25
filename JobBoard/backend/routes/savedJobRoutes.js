const express = require("express");

const {
  saveJob,
  removeSavedJob,
  getSavedJobs,
} = require("../controllers/savedJobController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  authorizeRoles("candidate"),
  getSavedJobs
);

router.post(
  "/:jobId",
  authenticateToken,
  authorizeRoles("candidate"),
  saveJob
);

router.delete(
  "/:jobId",
  authenticateToken,
  authorizeRoles("candidate"),
  removeSavedJob
);

module.exports = router;