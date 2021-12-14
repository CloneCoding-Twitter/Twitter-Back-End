const express = require("express");

const userController = require("../controller/users");
const {
  validateId,
  validateNick,
  validatepass,
} = require("../middleware/validator");

const router = express.Router();

//id check api
router.post("/idcheck", validateId, userController.idcheck);

//nickname check api
router.post("/nickcheck", validateNick, userController.nickcheck);

//sign up api
router.post("/signup", validatepass, userController.signup);

//login api
router.post("/login", userController.login);

module.exports = router;
