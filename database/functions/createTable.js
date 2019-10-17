const mysql = require('mysql');

/** 
 * @function
 * @param { Array } columnOptions
 * @param { Array } constraintOptions
 * @return { String } - MySQL syntax 
 */

const buildColumns = (columnOptions, constraintOptions) => {
  if (columnOptions.length !== constraintOptions.length) {
    console.log('Error: Column Options and Constraint Options are not equal, please check your entries');
    return null;
  };

  let constructedSyntax = '';

  for (let i = 0; i < columnOptions.length; i++) {
    constructedSyntax += `${columnOptions[i]} ${constraintOptions}, `;
  };
  return constructedSyntax.substring(0, constructedSyntax.length);
};


/** 
 * @function
 * @param { String } tableName
 * @param { Object } options  
 * @return { String } - MySQL createtable syntax
 */

const createTable = (tableName, options) => {
  let columns = buildColumns(options.columnOptions, options.constraintOptions);
  let syntax = `CREATE TABLE ${tableName} (${columns})`;
  return syntax;
};

module.exports = {
  createTable,
};