const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.userValidation,
  controller.user.createUser,
);

router.get(
  '/',
  middleware.authToken,
  controller.user.getUsers,
);

module.exports = router;
