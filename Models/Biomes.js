const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Biome = new Schema(
  {
    name: { type: String, required: true },
    continent: { type: Schema.Types.ObjectId, ref: "Continent" },
    location: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Biome", Biome);
