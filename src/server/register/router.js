const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/entrances', controller.getEntrances);
router.get('/dismissals', controller.getDismissals);

module.exports = router;