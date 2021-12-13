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

const findUser = async ( id ) => {
  return Users.findOne(id);
}

module.exports = { creatUser, findUser };
