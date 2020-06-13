const Joi = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    lowercase: true,
  }
});

const Post = new mongoose.model("Posts", postSchema);

function validatePost(post) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(50).required(),
  };
  return Joi.validate(post, schema);
}

module.exports.postSchema = postSchema
module.exports.Post = Post
module.exports.validate = validatePost