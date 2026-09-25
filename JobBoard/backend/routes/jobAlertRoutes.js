const express = require("express");

const {
  createJobAlert,
  getJobAlerts,
  deleteJobAlert,
  toggleJobAlert,
} = require("../controllers/jobAlertController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  authorizeRoles("candidate"),
  getJobAlerts
);

router.post(
  "/",
  authenticateToken,
  authorizeRoles("candidate"),
  createJobAlert
);

router.patch(
  "/:alertId/toggle",
  authenticateToken,
  authorizeRoles("candidate"),
  toggleJobAlert
);

router.delete(
  "/:alertId",
  authenticateToken,
  authorizeRoles("candidate"),
  deleteJobAlert
);

module.exports = router;