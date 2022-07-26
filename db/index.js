const mongoose = require("mongoose");
require("dotenv").config();
let MONGODB_URI = `mongodb+srv://smyp123:${process.env.MONGODB_PASSWORD}@cluster0.yekvopw.mongodb.net/test`;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
