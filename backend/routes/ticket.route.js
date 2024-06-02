const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/create", createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
