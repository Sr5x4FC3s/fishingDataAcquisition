const mysql = require('mysql');

const { connection } = require('../../connection/index');

/** 
 * @function query
 * @param { String } queryString - command to be executed to query 
 * @param { String } actionType - action that is being accomplished (ie: Creating Table, Querying, etc...)
 */

const query = (queryString, actionType) => {
  return new Promise ((resolve, reject) => {
    console.log('string: ', queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        console.log(`Error: ${actionType} failed. Please try again.`);
        throw(err);
      }
      console.log('result: ', result);
      resolve(result);
    })
  })
};

module.exports = {
  query,
};