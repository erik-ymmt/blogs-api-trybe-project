const { User } = require('../models');

const getRegisteredUsers = async () => {
  const result = await User.findAll({
    attributes: ['email', 'password'],
  });
  const emails = result.map((element) => element.dataValues.email);
  const passwords = result.map((element) => element.dataValues.password);

  return { emails, passwords };
};

module.exports = getRegisteredUsers;