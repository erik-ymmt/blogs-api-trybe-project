const { Category } = require('../models');

const createCategory = async (category) => {
  const result = await Category.create(category);
  const categoryCreated = result.dataValues;
  categoryCreated.id = result.null;

  return categoryCreated;
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createCategory,
  getCategories,
};
