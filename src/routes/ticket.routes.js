const express = require("express");
const TicketController = require("../controllers/ticket.controller.js");
const ticketRouter = express.Router();

// Route to get all tickets
ticketRouter.get("/", TicketController.getAllTickets);

// Route to change status
ticketRouter.put("/:id", TicketController.updateTicket)

module.exports = ticketRouter;
