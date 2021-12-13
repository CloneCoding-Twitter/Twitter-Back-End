const express = require("express");
const articlesController = require("../controller/articles");
const uploader = require("../middleware/uploader");

const router = express.Router();

router.post(
  "/",
  uploader.fields([{ name: "img", maxCount: 4 }]),
  articlesController.articlePost
);

router.get("/", articlesController.articleGet);

router.put(
  "/:articleId",
  uploader.fields([{ name: "img", maxCount: 4 }]),
  articlesController.articleUpdate
);

router.delete("/:articleId", articlesController.artiecleDelete);
module.exports = router;
("/api/article");
