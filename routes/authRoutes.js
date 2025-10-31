const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { id, username, password, role } = req.body;

  // In real apps, you'd validate against a DB
  if (!username || !password || !role) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  const token = jwt.sign(
    { id, username, role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});

module.exports = router;
