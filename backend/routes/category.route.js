const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);

module.exports = router;
