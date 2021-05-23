const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  zone: { type: Number, required: true },
  garden: { type: Array },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;