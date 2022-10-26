const express = require('express');
const router = require('./routers');

const app = express();

app.use(express.json());
app.use('/login', router.login);
app.use('/user', router.user);
app.use('/categories', router.categories);

module.exports = app;
