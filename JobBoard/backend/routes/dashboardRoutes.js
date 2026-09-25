const express = require("express");

const {
  getCandidateDashboard,
  getEmployerDashboard,
} = require("../controllers/dashboardController");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/candidate",
  authenticateToken,
  authorizeRoles("candidate"),
  getCandidateDashboard
);

router.get(
  "/employer",
  authenticateToken,
  authorizeRoles("employer"),
  getEmployerDashboard
);

module.exports = router;