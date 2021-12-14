const mongoose = require("mongoose");

const { Schema } = mongoose;
const usersSchema = new Schema({
  loginId: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
usersSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
usersSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Users", usersSchema);
