import mongoose from "mongoose";

const UpdateSchema = mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commit",
    required: false,
  },
});

const UpdateModel = mongoose.model("Update", UpdateSchema);

export default UpdateModel;
