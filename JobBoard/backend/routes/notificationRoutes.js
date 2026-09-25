const express = require("express");

const {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
} = require("../controllers/notificationController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getNotifications
);

router.patch(
  "/read-all",
  authenticateToken,
  markAllNotificationsAsRead
);

router.patch(
  "/:notificationId/read",
  authenticateToken,
  markNotificationAsRead
);

router.delete(
  "/:notificationId",
  authenticateToken,
  deleteNotification
);

module.exports = router;