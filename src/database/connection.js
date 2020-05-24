const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'logger',
  password: '123456',
  database: 'aforo'
});

/**
 * Executes a database query and handles any possible error.
 * @param {string} query The SQL query to execute.
 */
function executeQuery(query) {
  return new Promise((resolve, reject) => {
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
    db.end(function (err) {
      if (err) {
        return reject(err);
      }
  
      console.log('DB disconnected');
    });
  });
}

module.exports = { db, executeQuery };