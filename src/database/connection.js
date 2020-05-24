const mysql = require('mysql');
const dbConfiguration = {
  host: 'localhost',
  user: 'logger',
  password: '123456',
  database: 'aforo'
};

/**
 * Executes a database query and handles any possible error.
 * @param {string} query The SQL query to execute.
 */
function executeQuery(query) {
  return new Promise((resolve, reject) => {
    const db = mysql.createConnection(dbConfiguration);
    db.connect(function (err) {
      if (err) {
        return reject(err);
      }
  
      console.log('connected as id ' + db.threadId);
    });
    db.query(query, function (err, rows, fields) {
      if (err) {
        return reject(err);
      }
      return resolve({ rows, fields });
    });
    db.end();
  });
}

module.exports = { executeQuery };