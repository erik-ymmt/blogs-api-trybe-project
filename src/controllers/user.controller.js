const services = require('../services');
const generateToken = require('../helpers/generateToken');

const createUser = async (req, res) => {
  const user = req.body;
  try {
    await services.user.createUser(user);
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  createUser,
};