const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticket.controller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/create", authMiddleware, createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
