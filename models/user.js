const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
      required: true,
      unique: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
