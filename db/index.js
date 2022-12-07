const mongoose = require("mongoose");

require("dotenv").config();
let MONGODB_URI = `mongodb+srv://cluster0.yekvopw.mongodb.net/test`;

let dbUrl = MONGODB_URI;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
