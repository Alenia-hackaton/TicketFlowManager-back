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

module.exports = {
  getAllTickets,
};
