const express = require("express");
const userController = require("../controller/users")

const router = express.Router();

//sign up api
router.post("/signup", userController.signup);

//login api
router.post("/login", userController.login);

module.exports = router;