const userModel = require("../model/users");

const signup = async (req, res) => {
    const { loginId, nickname, password, passwordCheck } = req.body;
    await userModel.creatUser(loginId, nickname, password);

    res.status(201).send({
        message: "회원가입을 축하드립니다",
    })
}

module.exports = { signup };

