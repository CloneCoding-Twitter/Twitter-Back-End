const userModel = require("../model/users");
const jwt = require("jsonwebtoken");

// signup
const signup = async (req, res) => {
  const { loginId, nickname, password } = req.body;
  await userModel.creatUser(loginId, nickname, password);

  res.status(201).send({
    message: "회원가입을 축하드립니다",
  });
};

// login
const login = async (req, res) => {
  const { loginId, password } = req.body;
  const userCheck = await userModel.findUser({ loginId });
  if (!userCheck) {
    res.status(400).send({ errorMessage: "닉네임 또는 패스워드가 잘못됐습니다." });
    return;
  }
  const token = jwt.sign({ id: userCheck["id"] }, "my-secret-key");
  res.send({
    token,
  });
};

module.exports = { signup, login };
