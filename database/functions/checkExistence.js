const mysql = require('mysql');
const { connection } = require('../connection/index'); 
const { query } = require('./actions/query');

/** 
 * @function checkTableExistence
 * @param { String } databaseName 
 * @param { String } tableName
 * @return { Promise - Boolean }
 */

  const checkTableExistence = (databaseName, tableName) => {

    let check = `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = '${databaseName}') AND (TABLE_NAME = '${tableName}')`;
    
    return new Promise ((resolve, reject) => {
      resolve(query(check, 'CHECK_DB_STATUS'))
    }).then(res => {
      if (!Object.values(res[0])[0]) {
        return false;
      };
      return true;
    }).catch(err => {
      console.log(`${err}`);
    })
};

module.exports = {
  checkTableExistence, 
};
