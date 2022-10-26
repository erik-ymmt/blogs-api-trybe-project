const { BlogPost } = require('../models');

const createBlogPost = async (post) => {
  const result = await BlogPost.create(post);
  const postCreated = result.dataValues;
  postCreated.id = result.null;

  return postCreated;
};

module.exports = {
  createBlogPost,
};
