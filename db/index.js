const mongoose = require("mongoose");

require("dotenv").config();
let MONGODB_URI = `mongodb+srv://smyp123:${process.env.MONGODBPASSWORD}@cluster0.yekvopw.mongodb.net/test`;

let dbUrl =
  process.env.NODE_ENV === "production"
    ? MONGODB_URI
    : "mongodb://0.0.1:27017/test";
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
