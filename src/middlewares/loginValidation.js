const Joi = require('joi');
const getRegisteredUsers = require('../helpers/getRegisteredUsers');

const loginFieldsValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required()
      .messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
        'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required()
      .messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
        'string.min': '"password" length must be at least 6 characters long',
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
    return res.status(401).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = loginValidation;