const express = require("express")

const connection = require("./connection");

const parser = require("body-parser");

const app = express();

app.use(parser.json());

const listingRoutes = require("./Routes/listingRoutes");

const bookingRoutes = require("./Routes/bookingRoutes");

app.use("/listings", listingRoutes);

app.use("/bookings", bookingRoutes);

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

app.use("*", (req, res, next) => next({ status: 404, message: "Invalid URL" }));

// let server = app.listen(3000, () => console.log(`Listening on ${ 3000 }`));

// const wss = new SocketServer({ server });

const server = app.listen(3000, () => {
  console.log("Server succesfully started on port", server.address().port);
});

module.exports = server;
