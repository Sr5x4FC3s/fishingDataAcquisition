const mysql = require('mysql');
const { connection } = require('../connection/index'); 

const checkTableExistence = (connection, databaseName, tableName) => {
  let query = `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = ${databaseName}) AND (TABLE_NAME = ${tableName})`;
  let tablesExist = false;

  connection.query(query, (err, res, fields) => {
    if (err) {
      console.log('Error: Failed attempt to check validity or existence of tables. Please try again.');
    } else {
      console.log(`Success, ${databaseName} database is currently populated with all the correct tables. All is well.`);
      tablesExist = true;
    }
  });
  return tablesExist;
};

const checkTableExistencePromise = new Promise((resolve, reject) => {
  resolve(checkTableExistence(connection, 'fishing', 'locations'));
});

module.exports = {
  checkTableExistencePromise,
};
