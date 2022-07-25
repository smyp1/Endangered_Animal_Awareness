const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Charity = new Schema(
  {
    name: String,
    link: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Charity", Charity);
