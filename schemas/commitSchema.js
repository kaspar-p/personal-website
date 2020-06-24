const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommitSchema = new Schema({
  message: {
    required: true,
    type: String
  },
  url: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    required: true,
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }
});

module.exports = mongoose.model("Commit", CommitSchema);
