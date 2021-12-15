const Comments = require("../schemas/comments");

const findComments = async (articleId) => {
  try {
    const comments = await Comments.find({ articleId });
    return comments;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const findComment = async (commentId) => {
  try {
    const commentData = await Comments.findOne({ _id: commentId });
    return commentData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createComment = async (articleId, comment, nickname, loginId) => {
  try {
    const commentData = await Comments.create({
      articleId: articleId,
      comment: comment,
      nickname: nickname,
      loginId: loginId,
    });
    return commentData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteComment = async (commentId) => {
  try {
    const result = await Comments.deleteOne({ _id: commentId });
    return result;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { findComments, createComment, findComment, deleteComment };
