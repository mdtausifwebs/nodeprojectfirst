const mongoose = require("mongoose");
const modelSchma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is not empty"],
    },
    email: {
      type: String,
      required: [true, "email is not empty"],
    },
    subject: {
      type: String,
      required: [true, "subject is not empty"],
    },
    massage: {
      type: String,
      required: [true, "massage is not empty"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("formdata", modelSchma);
