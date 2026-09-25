const express = require("express");
const { createCompany } = require("../controllers/companyController");
const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  authorizeRoles("employer"),
  createCompany
);

module.exports = router;