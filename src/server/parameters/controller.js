const { executeQuery } = require('../../database');

/**
 * Lists all parameters stored in database.
 * @param {*} req The request object used to perform the call.
 * @param {*} res The response object used to serve the answer to the client.
 */
function getParameters(req, res) {
    executeQuery('SELECT * FROM parametros')
        .then(result => res.json(result.rows))
        .catch(err => res.status(500).json(err));
}

/**
 * Gets the specified parameter in the query parameters.
 * @param {*} req The request object used to perform the call.
 * @param {*} res The response object used to serve the answer to the client.
 */
function getParameter(req, res) {
    executeQuery(`SELECT * FROM parametros where parametro='${req.params.parameter}'`)
    .then(result => res.json(result.rows[0]))
    .catch(err => res.status(500).json(err));
}

module.exports = {
    getParameters,
    getParameter
};