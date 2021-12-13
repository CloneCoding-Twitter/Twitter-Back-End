const articlesModel = require("../model/articles");

const articlePost = async (req, res, next) => {
  try {
    const { content } = req.body;
    const img = [];
    req.files.img.forEach((v) => {
      img.push("localhost" + ":3000" + "/" + v.filename);
    });

    await articlesModel.createArticle({
      content,
      img,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const articleGet = () => {};

const articleUpdate = () => {};

const artiecleDelete = () => {};

module.exports = { articlePost, articleGet, articleUpdate, artiecleDelete };
