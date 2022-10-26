const service = require('../services');

const createCategory = async (req, res) => {
  const category = req.body;
  try {
    const result = await service.categories.createCategory(category);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await service.categories.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
