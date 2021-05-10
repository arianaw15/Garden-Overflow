const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  sun: { type: String, required: true },
  hardiness: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Plants = mongoose.model("Plants", plantSchema);

module.exports = Plants;