const express = require("express");
const { Post, validate } = require("../model/post");
const router = express.Router();


router.get("/", async (req, res) => {
    const result = await Post.find();
    res.send(result);
  });
  
  router.get("/:id", async (req, res) => {
    const post = await Post.find({ _id: req.params.id });
    if (!post) return res.status(400).send("Post ID not found!");
    res.send(post);
  });
  
  router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });
  
    await post.save();
    res.send(post);
  });
  
  router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const post = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    if (!post) return res.status(400).send("Post ID not found!");
    res.send(post);
  });
  
  router.delete("/:id", async (req, res) => {
    const post = await Post.deleteOne({ _id: req.params.id });
    if (!post) return res.status(400).send("Post ID not found!");
  
    res.send(post);
  });
  
  module.exports = router;
  
