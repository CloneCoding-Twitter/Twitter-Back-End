const express = require("express");
const articlesController = require("../controller/articles");
const commentsController = require("../controller/comments");
const uploader = require("../middleware/uploader");
const auth = require("../middleware/auth");
const router = express.Router();

const imageUpload = uploader.fields([{ name: "img", maxCount: 4 }]);

router.post("/", auth, imageUpload, articlesController.articlePost);
router.get("/", articlesController.articlesGet);
router.put("/:articleId", auth, imageUpload, articlesController.articleUpdate);
router.delete("/:articleId", auth, articlesController.artiecleDelete);
router.get("/:articleId", articlesController.articleGet);

router.get("/:articleId/comment", commentsController.commentsGet);
router.post("/:articleId/comment", auth, commentsController.commentPost);
router.delete(
  "/:articleId/comment/:commentId",
  auth,
  commentsController.commentDelete
);

module.exports = router;
