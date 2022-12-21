const express = require('express');
const { signUp } = require('../controller/user-controller.js');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

router.post('/signup', errorHandler(signUp));

module.exports = router;