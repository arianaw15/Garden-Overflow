const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  userName: { type: String, required: true },
  postid: { type: String, required: true},
  body: { type: String, required: true }
});

const Comments = mongoose.model("comments", commentsSchema);

module.exports = Comments;