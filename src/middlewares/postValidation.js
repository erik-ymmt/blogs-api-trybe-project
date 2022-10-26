const Joi = require('joi');
const getRegisteredCategories = require('../helpers/getRegisteredCategories');

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
  categoryIds: Joi.array().min(1).required().messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
  }),
});

const postValidation = async (req, res, next) => {
  const post = req.body;
  const { error } = schema.validate(post);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const existentCategories = await getRegisteredCategories();
  const { categoryIds } = post;
  const categoryVerification = categoryIds
    .every((category) => existentCategories.ids.includes(category));

  if (!categoryVerification) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = postValidation;
