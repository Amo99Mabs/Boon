const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  goal: Number,
  raised: { type: Number, default: 0 },
  backers: { type: Number, default: 0 },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
