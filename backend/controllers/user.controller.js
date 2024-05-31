const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({
    message: "Login successful",
    token,
  });
};

module.exports = { registerUser, loginUser };
