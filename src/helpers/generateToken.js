const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const jwtConfig = {
    // expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { email: user.email };

  const token = jwt.sign(
    payload,
    secret,
    jwtConfig,
  );

  return token;
};

module.exports = generateToken;