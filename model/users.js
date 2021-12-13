const Users = require("../schemas/users");

const creatUser = async ( loginId, nickname, password ) => {
  try {
    await Users.create({ loginId, nickname, password });
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { creatUser };
