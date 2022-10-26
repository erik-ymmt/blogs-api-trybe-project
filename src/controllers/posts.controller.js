const services = require('../services');

const createBlogPost = async (req, res) => {
  const newPost = req.body;
  const result = await services.posts.createBlogPost(newPost);
  res.status(400).json(result);
};

module.exports = {
  createBlogPost,
};