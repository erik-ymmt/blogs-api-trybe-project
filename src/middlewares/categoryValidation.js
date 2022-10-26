const Joi = require('joi');

const categoryFieldsValidation = (category) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'any.required': '"name" is required',
      'string.empty': '"name" is required',
    }),
  });

  const { error } = schema.validate(category);

  if (error) return error.details[0].message;
  return false;
};

const categoryValidation = async (req, res, next) => {
  const category = req.body;
  const error = categoryFieldsValidation(category);
  if (error) {
    return res.status(400).json({ message: error });
  }
  return next();
};

module.exports = categoryValidation;
