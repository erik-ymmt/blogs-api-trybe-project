const { BlogPost } = require('../models');

const createBlogPost = async (post) => {
  const result = await BlogPost.create(post);
  const postCreated = result.dataValues;
  postCreated.id = result.null;

  return postCreated;
};

const getAllPosts = async () => {
  const results = await BlogPost.findAll();
  return results;
};

const getPostById = async (id) => {
  const results = await BlogPost.findOne({ where: { id } });
  return results;
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
};
