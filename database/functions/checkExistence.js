const mysql = require('mysql');
const { connection } = require('../connection/index'); 

/** 
 * @function checkTableExistence
 * @param { Object } connection - database connection
 * @param { String } databaseName 
 * @param { String } tableName
 * @return { Promise - Boolean }
 */

const checkTableExistence = (connection, databaseName, tableName) => {
  return new Promise ((resolve, reject) => {
    let query = `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = '${databaseName}') AND (TABLE_NAME = '${tableName}')`;
    
    resolve(connection.query(query, (err, res, fields) => {
      if (err) {
        console.log(err);
        console.log(`Error: ${err} \n Failed attempt to check validity or existence of tables. Please try again.`);
        return false;
      } else {
        console.log(`Success, ${databaseName} database is currently populated with all the correct tables. All is well.`);
        return res;
      }
    }));
  }).then(res => {
    return true;
  }).catch(err => {
    console.log(`Error: ${err}. \n Occurred while checking if the database is ready.`)
  })
};


const checkTableExistencePromise = new Promise((resolve, reject) => {
  resolve(checkTableExistence(connection, 'fishing', 'Locations'));
});

module.exports = {
  checkTableExistencePromise,
};
