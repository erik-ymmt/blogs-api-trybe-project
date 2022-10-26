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

module.exports = {
  createCategory,
};
