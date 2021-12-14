const userModel = require("../model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//id check api
const idcheck = async (req, res, next) => {
  try {
    const loginId = req.body;
    const checkId = await userModel.findDb(loginId);
    if (!checkId) {
      res.status(400).send({ errorMessage: "사용 가능한 아이디입니다" });
    } else {
      res.status(200).send({ errorMessage: "존재하는 아이디입니다" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//nickname check api
const nickcheck = async (req, res, next) => {
  try {
    const nickname = req.body;
    const checkNick = await userModel.findDb(nickname);
    if (!checkNick) {
      res.status(400).send({ errorMessage: "사용가능한 닉네임입니다" });
    } else {
      res.status(200).send({ errorMessage: "존재하는 닉네임입니다" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// signup
const signup = async (req, res, next) => {
  try {
    const { loginId, nickname, password, passwordCheck } = req.body;
    if (password !== passwordCheck) {
      res.status(400).send({ errorMessage: "비밀번호가 일치하지 않습니다." });
      return;
    }
    const hashedPass = bcrypt.hashSync(password, 5);
    await userModel.creatUser(loginId, nickname, hashedPass);

    res.status(201).send({
      message: "회원가입을 축하드립니다",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// login
const login = async (req, res, next) => {
  try {
    const { loginId, password } = req.body;
    const userCheck = await userModel.findDb({ loginId });
    if (!userCheck || !password || !loginId) {
      //비밀번호만 맞는 경우는 알려주지않음
      res
        .status(400)
        .send({ errorMessage: "닉네임 또는 패스워드가 잘못됐습니다." });
      return;
    }
    const result = bcrypt.compareSync(password, userCheck.password);
    if (!result) {
      res
        .status(400)
        .send({ errorMessage: "닉네임 또는 패스워드가 잘못됐습니다." });
      return;
    }
    const nickname = userCheck.nickname;
    const token = jwt.sign({ id: userCheck["id"] }, "hyeop-secret-key");
    res.status(200).send({
      token,
      loginId: loginId,
      nickname: nickname,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { signup, login, idcheck, nickcheck };
