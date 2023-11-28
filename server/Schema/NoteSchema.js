

const mongoose = require('mongoose');

// Define the detail schema for paragraphs and tables
const detailSchema = new mongoose.Schema({
  paraType: String,
  title: String,
  description: mongoose.Schema.Types.Mixed,
});

const subtopicSchema = new mongoose.Schema({
  title: String,
  detail: [detailSchema],
});

const subjectSchema = new mongoose.Schema({
  subject: String,
  title: String,
  chapter: String,
  description: String,
  subtopic: [subtopicSchema],
  tag: String,
});

// const Subject = mongoose.model('Subject', subjectSchema);

module.exports = subjectSchema;