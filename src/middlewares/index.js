const loginValidation = require('./loginValidation');
const userValidation = require('./userValidation');
const categoryValidation = require('./categoryValidation');
const postValidation = require('./postValidation');
const updatePostValidation = require('./updatePostValidation');
const authToken = require('./authToken');

module.exports = {
  loginValidation,
  userValidation,
  categoryValidation,
  postValidation,
  updatePostValidation,
  authToken,
};
