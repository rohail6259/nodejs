const express = require("express");
const postRouter = require("../routes/posts");
const homeRouter = require("../routes/home");
const error = require("../middleware/error");
const cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/", homeRouter);
  app.use("/api/posts", postRouter);
  app.use(error);
};
