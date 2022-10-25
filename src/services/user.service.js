const { User } = require('../models');

const createUser = async (user) => {
  const { dataValues } = await User.create(user);
  console.log(dataValues);
  return dataValues;
};

module.exports = {
  createUser,
};