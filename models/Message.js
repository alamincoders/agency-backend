const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please provide a valid email address"],
    },
    number: {
      type: Number,
    },
    websiteUrl: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messagesSchema);

module.exports = Message;
