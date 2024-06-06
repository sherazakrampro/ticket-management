const Ticket = require("../models/ticket.model");

async function checkOwnership(req, res, next) {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    if (ticket.createdBy.toString() !== req.user) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = checkOwnership;
