const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicket,
} = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/create", createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicket);

module.exports = router;
