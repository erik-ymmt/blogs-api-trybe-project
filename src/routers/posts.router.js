const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.authToken,
  controller.posts.createBlogPost,
);

module.exports = router;
