const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
} = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/create", createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicket);
router.put("/:id", updateTicket);

module.exports = router;
