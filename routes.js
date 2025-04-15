const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')

router.get('/', homeController.index);
router.get('/login/index', loginController.index);

module.exports = route;