const { User } = require('../models');

const identifyUserIdByEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
  const { id } = result.dataValues;
  return id;
};

module.exports = identifyUserIdByEmail;