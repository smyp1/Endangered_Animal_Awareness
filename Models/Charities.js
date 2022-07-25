const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Charity = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Charity", Charity);
