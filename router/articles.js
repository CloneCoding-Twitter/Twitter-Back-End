const express = require("express");
const articlesController = require("../controller/articles");
const uploader = require("../middleware/uploader");

const router = express.Router();

router.post(
  "/",
  uploader.fields([{ name: "img", maxCount: 4 }]),
  articlesController.articlePost
);

module.exports = router;
("/api/article");
