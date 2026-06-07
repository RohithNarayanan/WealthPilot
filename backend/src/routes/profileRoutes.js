const express = require("express");

const {
  createProfile,
  getProfile,
} = require(
  "../controllers/profileController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.post(
  "/",
  protect,
  createProfile
);

router.get(
  "/",
  protect,
  getProfile
);

module.exports = router;