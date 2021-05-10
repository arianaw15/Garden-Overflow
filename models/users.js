const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zone: { type: Number, required: true },
  garden: { type: Array },
  zip: { type: Number, required: true }
});

const User = mongoose.model("users", userSchema);

module.exports = User;