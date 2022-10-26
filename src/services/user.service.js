const { User } = require('../models');

const createUser = async (user) => {
  const { dataValues } = await User.create(user);
  return dataValues;
};

const getUsers = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = {
  createUser,
  getUsers,
};