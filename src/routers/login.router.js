const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.post('/', controller.login.loginRequest);

module.exports = router;
