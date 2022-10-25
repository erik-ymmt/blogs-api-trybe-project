const Joi = require('joi');
const { User } = require('../models');

const getRegisteredUsers = async () => {
  const result = await User.findAll({
    attributes: ['email', 'password'],
  });
  const emails = result.map((element) => element.dataValues.email);
  const passwords = result.map((element) => element.dataValues.password);

  return { emails, passwords };
};

const loginFieldsValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required()
      .messages({
        'any.required': 'Some required fields are missing',
        'string.email': 'Invalid fields',
    }),
    password: Joi.string().min(5).required()
      .messages({
        'any.required': 'Some required fields are missing',
        'string.min': 'Invalid fields',
    }),
  });

  const { error } = schema.validate(user);

  if (error) return error.details[0].message;
  return false;
};

const loginValidation = async (req, res, next) => {
  const user = req.body;
  const { email, password } = user;
  const fieldError = loginFieldsValidation(user);
  if (fieldError) {
    return res.status(400).json({ message: fieldError });
  }

  const { passwords, emails } = await getRegisteredUsers();

  if (!passwords.includes(password) || !emails.includes(email)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = loginValidation;