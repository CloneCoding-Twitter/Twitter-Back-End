const express = require("express");
const articlesController = require("../controller/articles");
const uploader = require("../middleware/uploader");
const auth = require("../middleware/auth");
const router = express.Router();

const imageUpload = uploader.fields([{ name: "img", maxCount: 4 }]);

router.post("/", auth, imageUpload, articlesController.articlePost);
router.get("/", articlesController.articleGet);
router.put("/:articleId", auth, imageUpload, articlesController.articleUpdate);
router.delete("/:articleId", auth, articlesController.artiecleDelete);

module.exports = router;
