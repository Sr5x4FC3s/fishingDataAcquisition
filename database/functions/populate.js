const { createTable } = require('./createTable'); 

/**
 * @function populate 
 * @param { Array } tableInformation
 * @param tableInformation[i].tableName - name of the table 
 * @param tableInformation[i].tableName.columnOptions - list of column headers
 * @param tableInformation[i].tableName.constraintOptions - list of types for the corresponding headers
 * @param { Function } callback
 * @return { Array } a list of create table commands to be executed 
 */

const populate = (tableInformation, callback) => {
  let listOfCommands = [];

  tableInformation.forEach(table => {
    let sqlCommand = callback(Object.keys(table)[0], Object.values(table)[0]);
    listOfCommands.push(sqlCommand);
  });

  return listOfCommands;
};

module.exports = {
  populate,
};
