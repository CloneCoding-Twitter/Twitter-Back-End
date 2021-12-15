const mongoose = require("mongoose");

const { Schema } = mongoose;
const CommentsSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  loginId: {
    type: String,
    required: true,
  },
  articleId: {
    type: String,
    required: true,
  },
});
CommentsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
CommentsSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Comments", CommentsSchema);
