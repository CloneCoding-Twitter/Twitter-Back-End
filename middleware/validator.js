const { validationResult, body } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: "3자이상 10자이하로 입력해주세요" });
};

const validatck = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res
    .status(400)
    .json({ message: "비밀번호를 대소문숫자특수문자 포함시켜주세요" });
};

const validateId = [
  body("loginId")
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/),
  validate,
];

const validateNick = [
  body("nickname")
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/),
  validate,
];

const validatepass = [
  body("password")
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/),
  validatck,
];

module.exports = { validateId, validateNick, validatepass };
