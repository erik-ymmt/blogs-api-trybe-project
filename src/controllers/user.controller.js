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

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await services.user.getUserById(id);
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  await services.user.deleteUser(id);
  res.status(204).end();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};