const Articles = require("../schemas/articles");

const createArticle = async ({ content, img }) => {
  try {
    await Articles.create({ content, img });
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createArticle };
