const articlesModel = require("../model/articles");

const articlePost = async (req, res, next) => {
  try {
    const { nickname, loginId } = res.locals.user;
    const { content } = req.body;
    const img = [];
    if (!content || !req.files.img) {
      res.sendStatus(400);
      return;
    }
    req.files.img.forEach((v) => {
      img.push("localhost" + ":3000" + "/" + v.filename);
    });
    const article = await articlesModel.createArticle(
      content,
      img,
      nickname,
      loginId
    );
    res.status(200).json({ article });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const articlesGet = async (req, res, next) => {
  try {
    const articles = await articlesModel.findArticles();
    res.status(200).json({ result: articles });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const articleUpdate = async (req, res, next) => {
  try {
    const { nickname } = res.locals.user;
    const { content } = req.body;
    const { articleId } = req.params;
    const article = await articlesModel.findArticle(articleId);
    if (article.nickname !== nickname) {
      res.sendStatus(400);
      return;
    }
    if (!content) {
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
    const editArticle = await articlesModel.findArticle(articleId);
    res.status(200).json({ editArticle });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const artiecleDelete = async (req, res, next) => {
  try {
    const { nickname } = res.locals.user;
    const { articleId } = req.params;
    const article = await articlesModel.findArticle(articleId);
    if (article.nickname !== nickname) {
      res.sendStatus(400);
      return;
    }
    await articlesModel.deleteArticles(articleId);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const articleGet = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const article = await articlesModel.findArticle(articleId);
    res.status(200).json({ article });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  articlePost,
  articlesGet,
  articleUpdate,
  artiecleDelete,
  articleGet,
};
