const {Pool} = require('pg');

const connectionString = 'postgres://logger:123456@localhost:5432/aforo';

const pool = new Pool({
  connectionString: connectionString,
  ssl: false
});


/**
 * Executes a database query and handles any possible error.
 * @param {string} query The SQL query to execute.
 */
function executeQuery(query) {
  return new Promise((reslove, reject) => {
    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      reslove(results);
    })
  });
}

module.exports = { executeQuery };
