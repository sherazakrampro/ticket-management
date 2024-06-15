const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory);

module.exports = router;
