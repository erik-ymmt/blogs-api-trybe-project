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

router.get(
  '/:id',
  middleware.authToken,
  controller.user.getUserById,
);

router.delete(
  '/me',
  middleware.authToken,
  controller.user.deleteUser,
);

module.exports = router;
