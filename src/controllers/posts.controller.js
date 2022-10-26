const getRegisteredPosts = require('../helpers/getRegisteredPosts');
const identifyUserIdByEmail = require('../helpers/identifyUser');
const services = require('../services');

const registerNewPost = async (newPost, postId) => {
  const postCategories = newPost.categoryIds;

  postCategories.forEach(async (categoryId) => {
    await services.postsCategories.registerNewPost({ categoryId, postId });
  });
};

const createBlogPost = async (req, res) => {
  const newPost = req.body;
  const { email } = req;
  const userId = await identifyUserIdByEmail(email);
  const date = new Date();

  const post = { userId, ...newPost, published: date, updated: date };
  const result = await services.posts.createBlogPost(post);

  await registerNewPost(newPost, result.id);

  res.status(201).json(result);
};

const getAllPosts = async (_req, res) => {
  const results = await services.posts.getAllPosts();
  res.status(200).json(results);
};

const getPostById = async (req, res) => {
  const id = Number(req.params.id);

  const existentIds = await getRegisteredPosts();
  if (!existentIds.includes(id)) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  const result = await services.posts.getPostById(id);
  res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const updated = new Date();
  console.log('controller', updated);

  const data = { title, content, updated };
  const result = await services.posts.updatePost(id, data);
  res.status(200).json(result);
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  updatePost,
};
