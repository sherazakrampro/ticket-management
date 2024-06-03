const Ticket = require("../models/ticket.model");

// Create Ticket
const createTicket = async (req, res) => {
  const { title, description, priority, status, category } = req.body;
  if (!title || !description || !priority || !status || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const ticket = new Ticket({
    title,
    description,
    priority,
    status,
    category,
  });
  try {
    await ticket.save();
    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Ticket
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json({ ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Ticket
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Ticket
const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
};
