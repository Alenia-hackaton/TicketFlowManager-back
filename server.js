const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = process.env.APP_PORT;
const ticketRouter = require('./routes/index.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the ticket server');
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

ticketRouter(app);

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});