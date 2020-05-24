const express = require('express');
const { executeQuery } = require('../../database');
const router = express.Router();

router.get('/', (req, res) => {
  executeQuery('SELECT * FROM parametros')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err));
});

router.get('/entsal', (req, res) => {
  executeQuery('SELECT SUM(entsal) as entsal FROM registro WHERE fecha >= (NOW() - INTERVAL 24 HOUR)')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err));
});

module.exports = router;