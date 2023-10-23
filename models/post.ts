import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: String,
  content: String,
});

const post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default post;
