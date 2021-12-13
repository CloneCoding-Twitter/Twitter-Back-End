const express = require("express");
const articlesRouter = require("./articles");
const UsersRouter = require("./users")
const router = express.Router();

router.use("/article", articlesRouter);
router.use("/user", UsersRouter);

module.exports = router;
