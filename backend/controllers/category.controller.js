const Category = require("../models/category.model");

// Create Category
const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const category = new Category({ name });
    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createCategory };
