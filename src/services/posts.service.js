const { BlogPost } = require('../models');

const createBlogPost = async (post) => {
  const result = BlogPost.create(post);
  return result;
};

module.exports = {
  createBlogPost,
};
