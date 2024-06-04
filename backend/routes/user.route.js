const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  googleLogin,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/google", googleLogin);

module.exports = router;
