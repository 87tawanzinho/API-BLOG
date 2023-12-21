const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Blog", Blog);
