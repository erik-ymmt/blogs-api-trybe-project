const login = require('./login.router');
const user = require('./user.router');
const categories = require('./categories.router');
const posts = require('./posts.router');

module.exports = {
  login,
  user,
  categories,
  posts,
};
