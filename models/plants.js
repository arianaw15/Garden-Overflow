const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  type: { type: String, required: true },
  sun: { type: String, required: true },
  hardiness: { type: Array }
});

const Plants = mongoose.model("plants", plantsSchema);

module.exports = Plants;