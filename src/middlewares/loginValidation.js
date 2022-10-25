const Joi = require('joi');

const loginValidation = (req, res, next) => {
  const user = req.body;

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

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = loginValidation;