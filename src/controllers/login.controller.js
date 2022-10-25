const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { user };

  const token = jwt.sign(
    payload,
    secret,
    jwtConfig,
  );

  return token;
};

const loginRequest = (req, res) => {
  const user = req.body;
  try {
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  loginRequest,
};
