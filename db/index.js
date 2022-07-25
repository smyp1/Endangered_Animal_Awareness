const mongoose = require("mongoose");

let MONGODB_URI =
  "mongodb+srv://smyp123:Ylza5f5Rie52QrVq@cluster0.yekvopw.mongodb.net/test";

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
