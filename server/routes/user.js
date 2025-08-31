const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// GET /api/users/me  (protected)
router.get("/me", auth, async (req, res) => {
  const me = await User.findById(req.user.id).select("-password");
  res.json(me);
});

module.exports = router;
