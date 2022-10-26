const services = require('../services');
const generateToken = require('../helpers/generateToken');

const createUser = async (req, res) => {
  const user = req.body;
  try {
    await services.user.createUser(user);
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

const getUsers = async (_req, res) => {
  const result = await services.user.getUsers();
  res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
};