const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.authToken,
  middleware.postValidation,
  controller.posts.createBlogPost,
);

module.exports = router;
