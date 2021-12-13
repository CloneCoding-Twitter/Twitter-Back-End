const express = require("express");
const articlesController = require("../controller/articles");
const uploader = require("../middleware/uploader");
const router = express.Router();

const imageUpload = uploader.fields([{ name: "img", maxCount: 4 }]);

router.post("/", imageUpload, articlesController.articlePost);
router.get("/", articlesController.articleGet);
router.put("/:articleId", imageUpload, articlesController.articleUpdate);
router.delete("/:articleId", articlesController.artiecleDelete);

module.exports = router;
