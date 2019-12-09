const mysql = require('mysql');

const { connection } = require('../../connection/index');

/** 
 * @function query
 * @param { String } queryString - command to be executed to query 
 * @param { String } actionType - action that is being accomplished (ie: Creating Table, Querying, etc...)
 * @param { Array } bulkData - bulk data 
 */

const query = (queryString, actionType, bulkData) => {
  if (actionType === 'CREATE_DATABASE' || actionType === 'DROP_DATABASE' || actionType === 'CHECK_DB_STATUS') {
    return new Promise ((resolve, reject) => {
      connection('DROP_CREATE_DB').query(queryString, bulkData, (err, result) => {
        if (err) {
          if (actionType === 'CHECK_DB_STATUS') {
            console.log(`${err} \n Failed attempt to check validity or existence of tables. Please try again.`);
          }
          console.log(`Error: ${actionType} failed. Please try again.`);
          console.log(`${err}`);
        }
        console.log('result: ', result);
        resolve(result);
      })
    })
  } else {
    return new Promise ((resolve, reject) => {
      connection().query(queryString, bulkData, (err, result) => {
        if (err) {
          console.log(`Error: ${actionType} failed. Please try again.`);
          console.log(`${err}`);
          resolve({syntax: queryString, actionType: `REATTEMPT_${actionType}`})
        } else {
          console.log('result: ', result);
          resolve(result);
        }
      })
    })
  }
};

module.exports = {
  query,
};