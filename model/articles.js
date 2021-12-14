const Articles = require("../schemas/articles");

const createArticle = async (content, img, nickname, loginId) => {
  try {
    const article = await Articles.create({
      content: content,
      img: img,
      nickname: nickname,
      loginId: loginId,
    });
    return article;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const findArticles = async () => {
  try {
    const articles = await Articles.find({});
    return articles;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const findArticle = async (input) => {
  try {
    const article = await Articles.findOne({ _id: input });
    return article;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateAriticles = async (articleId, content, img) => {
  try {
    await Articles.updateOne(
      { _id: articleId },
      { $set: { content: content, img: img } }
    );
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteArticles = async (articleId) => {
  try {
    await Articles.deleteOne({ _id: articleId });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  createArticle,
  findArticles,
  findArticle,
  updateAriticles,
  deleteArticles,
};
