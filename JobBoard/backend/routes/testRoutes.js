const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});
router.get(
  "/candidate-only",
  authenticateToken,
  authorizeRoles("candidate"),
  (req, res) => {
    res.json({
      message: "Candidate access granted!",
      user: req.user,
    });
  }
);

module.exports = router;