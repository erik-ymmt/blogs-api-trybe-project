const { Category } = require('../models');

const getRegisteredCategories = async () => {
  const result = await Category.findAll();
  const ids = result.map((element) => element.dataValues.id);
  const names = result.map((element) => element.dataValues.name);

  return { ids, names };
};

module.exports = getRegisteredCategories;