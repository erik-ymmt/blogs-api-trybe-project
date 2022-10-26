const identifyUserIdByEmail = require('../helpers/identifyUser');
const services = require('../services');

const createBlogPost = async (req, res) => {
  const newPost = req.body;
  const { email } = req;
  const userId = await identifyUserIdByEmail(email);
  const date = new Date();

  const post = { userId, ...newPost, published: date, updated: date };
  const result = await services.posts.createBlogPost(post);
  res.status(201).json(result);
};

module.exports = {
  createBlogPost,
};