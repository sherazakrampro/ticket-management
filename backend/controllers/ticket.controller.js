const Ticket = require("../models/ticket.model");

// Create Ticket
const createTicket = async (req, res) => {
  const { title, description, priority, status } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "title & description must be provided" });
  }
  const ticket = new Ticket({
    title,
    description,
    priority,
    status,
  });
  try {
    await ticket.save();
    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createTicket };
