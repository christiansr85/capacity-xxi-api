const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getParameters);
router.get('/:parameter', controller.getParameter);

module.exports = router;