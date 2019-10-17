const mysql = require('mysql');

const checkTableExistence = (connection, databaseName, tableName) => {
  let query = `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = ${databaseName}) AND (TABLE_NAME = ${tableName})`;

  return connection.query(query, (err, res, fields) => {
    if (err) {
      console.log('Error: Failed attmept to check validity or existence of tables. Please try again.');
    }
    return res;
  })
};

module.exports = {
  checkTableExistence,
};
