import mongoose from "mongoose";

const CommitSchema = mongoose.Schema({
  message: {
    required: true,
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
});

const CommitModel = mongoose.model("Commit", CommitSchema);

export default CommitModel;
