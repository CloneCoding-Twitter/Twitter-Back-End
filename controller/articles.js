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

const articleGet = async (req, res, next) => {
  try {
    const articles = await articlesModel.findArticles();
    console.log(articles);
    res.status(200).json({ result: articles });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const articleUpdate = async (req, res, next) => {
  try {
    const { content } = req.body;
    const { articleId } = req.params;
    const { user } = res.locals.user;
    const article = await articlesModel.findArticle(articleId);
    if (article.nickname !== user.nickname) {
      res.sendStatus(400);
      return;
    }
    let img = article.img;
    if (req.files.img) {
      img = [];
      req.files.img.forEach((v) => {
        img.push("localhost" + ":3000" + "/" + v.filename);
      });
    }
    await articlesModel.updateAriticles(articleId, content, img);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const artiecleDelete = async (req, res, next) => {
  const { articleId } = req.params;
  const { user } = res.locals.user;
  const article = await articlesModel.findArticle(articleId);
  if (article.nickname !== user.nickname) {
    res.sendStatus(400);
    return;
  }
  await articlesModel.deleteArticles(articleId);
  res.sendStatus(200);
};

module.exports = { articlePost, articleGet, articleUpdate, artiecleDelete };
