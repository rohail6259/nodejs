const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  mongoose.set("useCreateIndex", true);
  mongoose
    .connect("mongodb://localhost/vidly-node", options)
    .then(() => winston.info("Connected to db..."));
};
