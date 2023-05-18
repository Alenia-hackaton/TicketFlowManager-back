const express = require("express");
const TicketController = require("../controllers/ticket.controller.js");
const ticketRouter = express.Router();

// Route to get all tickets
ticketRouter.get("/", TicketController.getAllTickets);

// Route to change status
ticketRouter.put("/:id", TicketController.updateTicket)

// Route to get by id
ticketRouter.get("/:id", TicketController.getTicketById)

// Route to post new ticket
ticketRouter.post("/", TicketController.postNewTicket)

module.exports = ticketRouter;
