const { executeQuery } = require('../../database');

function getEntrances(req, res) {
    executeQuery('SELECT SUM(entsal) as entrances FROM registro WHERE entsal >= 0')
        .then(result => res.json(result.rows[0]))
        .catch(err => res.status(500).json(err));
}

function getDismissals(req, res) {
    executeQuery('SELECT SUM(entsal) as dismissals FROM registro WHERE entsal < 0')
        .then(result => res.json(result.rows[0]))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    getEntrances,
    getDismissals
};