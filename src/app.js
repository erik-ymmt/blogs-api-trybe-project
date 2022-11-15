const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const router = require('./routers');
const swaggerJson = require('../swagger.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/login', router.login);
app.use('/user', router.user);
app.use('/categories', router.categories);
app.use('/post', router.posts);

module.exports = app;
