const { User } = require('../models');

const createUser = async (user) => {
  const { dataValues } = await User.create(user);
  return dataValues;
};

module.exports = {
  createUser,
};