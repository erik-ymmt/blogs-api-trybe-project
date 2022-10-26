const user = require('./user.service');
const categories = require('./categories.service');
const posts = require('./posts.service');
const postsCategories = require('./postsCategories.service');

module.exports = {
  user,
  categories,
  posts,
  postsCategories,
};
