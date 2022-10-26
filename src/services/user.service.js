const { User } = require('../models');

const createUser = async (user) => {
  const { dataValues } = await User.create(user);
  return dataValues;
};

const getUsers = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] } });
  return result;
};

const getUserById = async (id) => {
  const result = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] } });
  return result;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};