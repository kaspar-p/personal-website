const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
  title: {
    required: false,
    type: String,
  },
  desc: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: new Date().toLocaleDateString(),
  },
  isCommit: {
    type: Boolean,
    required: true,
    default: false,
  },
  commit: {
    type: Schema.Types.ObjectId,
    ref: "Commit",
    required: false,
  },
});

module.exports = mongoose.model("Update", UpdateSchema);
