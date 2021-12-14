const Users = require("../schemas/users");

const creatUser = async ( loginId, nickname, hashedPass ) => {
  try {
    await Users.create({ loginId, nickname, password: hashedPass });
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const findDb = async ( id ) => {
  return Users.findOne(id);
}

module.exports = { creatUser, findDb };
