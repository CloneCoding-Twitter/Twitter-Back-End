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

//영소문, 숫자 혼합 3~12자
const validateId = [
  body("loginId")
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/),
  validate,
];

//길이: 최소 3글자, 10자 제한, 문자 숫자만 가능.
const validateNick = [
  body("nickname")
    .isLength({ min: 3 })
    .matches(/[a-z]+[A-Z0-9]*$/),
  validate,
];

//길이: 4~12자 제한
//영대소문숫자특수문자 혼합
const validatepass = [
  body("password")
    .isLength({ min: 3 })
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/
    ),
  validatck,
];

module.exports = { validateId, validateNick, validatepass };
