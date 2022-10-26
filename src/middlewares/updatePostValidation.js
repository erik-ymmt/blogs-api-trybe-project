const Joi = require('joi');

const fieldMissing = 'Some required fields are missing';

const schema = Joi.object({
  title: Joi.string().min(3).required().messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
  }),
  content: Joi.string().min(3).required().messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
  }),
});

const updatePostValidation = async (req, res, next) => {
  const post = req.body;
  const { error } = schema.validate(post);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = updatePostValidation;
