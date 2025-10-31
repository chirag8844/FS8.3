const express = require("express");
const { verifyToken, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.get("/admin-dashboard", verifyToken, authorizeRoles("Admin"), (req, res) => {
  res.status(200).json({
    message: "Welcome to the Admin dashboard",
    user: req.user,
  });
});

router.get("/moderator-panel", verifyToken, authorizeRoles("Moderator"), (req, res) => {
  res.status(200).json({
    message: "Welcome to the Moderator panel",
    user: req.user,
  });
});

router.get("/user-profile", verifyToken, (req, res) => {
  res.status(200).json({
    message: `Welcome to your profile, ${req.user.username}`,
    user: req.user,
  });
});

module.exports = router;
