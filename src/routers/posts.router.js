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

router.get(
  '/',
  middleware.authToken,
  controller.posts.getAllPosts,
);

router.get(
  '/:id',
  middleware.authToken,
  controller.posts.getPostById,
);

router.put(
  '/:id',
  middleware.authToken,
  middleware.updatePostValidation,
  controller.posts.updatePost,
);

module.exports = router;
