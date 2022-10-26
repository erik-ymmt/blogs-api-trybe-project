const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.authToken,
  middleware.categoryValidation,
  controller.categories.createCategory,
);

router.get(
  '/',
  middleware.authToken,
  controller.categories.getCategories,
);

module.exports = router;
