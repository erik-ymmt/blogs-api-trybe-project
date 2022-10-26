const jwt = require('jsonwebtoken');
const getRegisteredUsers = require('../helpers/getRegisteredUsers');

const secret = process.env.JWT_SECRET;

const tokenAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const { emails } = await getRegisteredUsers();
    if (!emails.includes(decoded.email)) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = tokenAuth;