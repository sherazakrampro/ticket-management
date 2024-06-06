const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Open",
      enum: ["Open", "In Progress", "Closed"],
    },
    priority: {
      type: String,
      required: true,
      default: "Medium",
      enum: ["Low", "Medium", "High"],
    },
    category: {
      type: String,
      required: true,
      enum: ["Bug", "Feature Request", "Support", "Improvement"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
