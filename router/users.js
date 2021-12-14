const express = require("express");
const { body } = require("express-validator");
const userController = require("../controller/users");
const { validate, validatck } = require("../middleware/validator");

const router = express.Router();

//영소문, 숫자 혼합 3~12자
const validateId = [body("loginId").matches(/[a-z]+[A-Z0-9]*$/), validate];

//길이: 최소 3글자, 10자 제한, 문자 숫자만 가능.
const validateNick = [body("nickname").matches(/[a-z]+[A-Z0-9]*$/), validate];

//길이: 4~12자 제한
//영대소문숫자특수문자 혼합
const validatepass = [
  body("password").matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/
  ),
  validatck,
];

//id check api
router.post("/idcheck", validateId, userController.idcheck);

//nickname check api
router.post("/nickcheck", validateNick, userController.nickcheck);

//sign up api
router.post("/signup", validatepass, userController.signup);

//login api
router.post("/login", userController.login);

module.exports = router;
