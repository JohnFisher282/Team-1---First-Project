const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.57i19.mongodb.net/cinema?retryWrites=true&w=majority`;
const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connection;