const database = require("../database");

const getAll = () => {
    return database
    .query("SELECT * FROM tickets")
    .then(([results]) => results);
};

// const updateStatus = (id, ticket_status) => {
//     return database
//     .query(
//         "UPDATE tickets SET ticket_status = ? WHERE id = ?",
//         [ticket_status, id]
//     )
//     .then(([results]) => (results));
// }

module.exports = {
    getAll
    // updateStatus
};