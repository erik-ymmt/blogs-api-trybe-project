const express = require('express');
const controller = require('../controllers');
// const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  controller.categories.createCategory,
);

module.exports = router;
