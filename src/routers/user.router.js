const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.userValidation,
  controller.user.createUser,
);

module.exports = router;
