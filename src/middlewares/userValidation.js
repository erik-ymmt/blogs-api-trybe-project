const Joi = require('joi');
const getRegisteredUsers = require('../helpers/getRegisteredUsers');

const fieldMissing = 'Some required fields are missing';

const schema = Joi.object({
  displayName: Joi.string().min(8).required()
  .messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
    'string.min': '"displayName" length must be at least 8 characters long',
}),
  email: Joi.string().email().required()
    .messages({
      'any.required': fieldMissing,
      'string.empty': fieldMissing,
      'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required()
    .messages({
      'any.required': fieldMissing,
      'string.empty': fieldMissing,
      'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

const userValidation = async (req, res, next) => {
  const user = req.body;
  const { error } = schema.validate(user);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { emails } = await getRegisteredUsers();
  if (emails.includes(user.email)) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};

module.exports = userValidation;