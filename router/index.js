const express = require("express");
const articlesRouter = require("./articles");
const router = express.Router();

router.use("/article", articlesRouter);

module.exports = router;
