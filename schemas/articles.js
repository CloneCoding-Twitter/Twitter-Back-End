const mongoose = require("mongoose");

const { Schema } = mongoose;
const ArticlesSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
});
ArticlesSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
ArticlesSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Articles", ArticlesSchema);
