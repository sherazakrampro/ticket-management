const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Login User
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if all fields are provided
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // Generate JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Exclude password from user object
    const { password: pwd, ...userWithoutPassword } = user._doc;

    // Set cookie with token
    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
      })
      .status(200)
      .json({
        message: "Login successful",
        user: userWithoutPassword,
      });
  } catch (error) {
    next(error);
  }
};

// Logout User
const logoutUser = async (req, res) => {
  res.clearCookie("token", { httpOnly: true }).status(200).json({
    message: "Logout successful",
  });
};

module.exports = { registerUser, loginUser, logoutUser };
