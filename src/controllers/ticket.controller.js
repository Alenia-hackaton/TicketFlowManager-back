const Ticket = require("../models/ticket.model");

const getAllTickets = (req, res) => {
  Ticket.getAll()
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No tickets found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const updateTicket = (req, res) => {
  const { id } = req.params;
  const { ticket_status } = req.body;
  Ticket.updateStatus(id, ticket_status)
  .then((result) => {
      if (result) {
        console.log(result)
        res.status(200).json(result);
      } else {
        res.status(404).send("Ticket not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating ticket");
    });
};

const getTicketById = (req, res) => {
  const { id } = req.params;
  Ticket.getById(id)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No tickets found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}

const postNewTicket = (req, res) => {
  Ticket.createTicket(req.body)
  .then((result) => {
      if (result) {
        console.log(result)
        res.status(200).json(result);
      } else {
        res.status(404).send("Ticket not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating ticket");
    });
};

module.exports = {
  getAllTickets,
  updateTicket,
  getTicketById,
  postNewTicket
};
