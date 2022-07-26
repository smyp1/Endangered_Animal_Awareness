const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Animal = new Schema(
  {
    name: { type: String, required: true },
    danger_level: { type: String, required: true },
    image: { type: String, required: true },
    biome: { type: Schema.Types.ObjectId, ref: "Biome" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("animal", Animal);
