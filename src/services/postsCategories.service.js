const { PostCategory } = require('../models');

const registerNewPost = async (postCat) => {
  await PostCategory.create(postCat);
};

module.exports = { registerNewPost };