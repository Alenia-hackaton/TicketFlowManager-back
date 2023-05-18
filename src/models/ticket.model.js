const database = require("../../database");

const getAll = () => {
  return database.query("SELECT * FROM tickets").then(([results]) => results);
};

const updateStatus = (id, ticket_status) => {
    return database
    .query(
        "UPDATE tickets SET ticket_status = ? WHERE id = ?",
        [ticket_status, id]
    )
    .then(([results]) => (results));
}

const getById = (id) => {
  return database
  .query("SELECT * FROM tickets WHERE id = ?", [id])
  .then(([results]) => results);
}

const createTicket = (ticket) => {
  return database
    .query(
      "INSERT INTO tickets set ?", ticket
    )
    .then(([results]) => results);
};

module.exports = {
    getAll,
    updateStatus,
    getById, 
    createTicket
};
