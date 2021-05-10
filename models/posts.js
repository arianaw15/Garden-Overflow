const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  zone: { type: Number, required: true },
  garden: { type: Array },
  zip: { type: Number, required: true }
});

const Posts = mongoose.model("posts", postSchema);

module.exports = Posts;