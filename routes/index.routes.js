const ticketRouter = require("./ticket.routes")

const setupRoutes = (app) =>{
    app.use("/tickets", ticketRouter)
}

module.exports = setupRoutes