const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LastCalledSchema = Schema(
  {
    lastCalled: {
      required: true,
      type: Date,
      default: null,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("LastCalled", LastCalledSchema);
