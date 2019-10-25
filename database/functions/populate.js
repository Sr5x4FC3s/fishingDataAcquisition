const { createTable } = require('./createTable'); 
const { query } = require('./actions.js/query');

/**
 * @function populate 
 * @param { Array } tableInformation
 * @param tableInformation[i].tableName - name of the table 
 * @param tableInformation[i].tableName.columnOptions - list of column headers
 * @param tableInformation[i].tableName.constraintOptions - list of types for the corresponding headers
 * @param { Function } callback
 * @return { Promise } a list of promises in MySQL syntax
 */

const populate = (tableInformation, callback) => {
  let listOfCommands = [];
  
  tableInformation.forEach(table => {
    let sqlCommand = callback(Object.keys(table)[0], Object.values(table)[0]);
    listOfCommands.push(new Promise((resolve, reject) => {
      resolve(query(sqlCommand, 'CREATE TABLE'));
    }));
  });

  return Promise.all(listOfCommands);
};

module.exports = {
  populate,
};
