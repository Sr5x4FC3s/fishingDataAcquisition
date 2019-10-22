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
    constructedSyntax += `${columnOptions[i]} ${constraintOptions[i]}, `;
  };
  
  return constructedSyntax;
};


/** 
 * @function 
 * @param { String } key
 * @return { String } 
 */

const addPrimaryKey = (key) => {
  return `, PRIMARY KEY (${key}), `;      
};


/** 
 * @function 
 * @param { String } tableReferenced
 * @param { String, Integer } id
 * @return { String } 
 */

const addForeignKey = (tableReferenced, id) => {
  return `FOREIGN KEY (${tableReferenced}_id) REFERENCES ${tableReferenced} (${id}), `
};


/** 
 * @function
 * @param { String } tableName
 * @param { Object } options  
 * @param options.columnOptions - list of column headers 
 * @param options.constraintOptions - list of column types corresponding with columnOptions
 * @param options.primary - options for primary key
 * @param options.foreign - options for foreign keys
 * @return { String } - MySQL createtable syntax
 */

const createTable = (tableName, options) => {
  let columns = buildColumns(options.columnOptions, options.constraintOptions);
  let primaryKeySegment;
  let foreignKeySegment;
  let syntax = `CREATE TABLE ${tableName} (${columns})`;
  
  if (options.primary.exists) {
    primaryKeySegment = addPrimaryKey(options.primary.key);
    syntax = syntax.substring(0, syntax.length - 1) + primaryKeySegment;
  }
  
  if (options.foreign.length > 0) {
    options.foreign.forEach(table => {
      foreignKeySegment = addForeignKey(table.table, table.pk_id);

      if (!primaryKeySegment) {
          syntax = syntax.substring(0, syntax.length - 1) + foreignKeySegment;
      }

      syntax += foreignKeySegment;
    })
  }
  if (primaryKeySegment || foreignKeySegment) {
    return syntax.substring(0, syntax.length - 2) + `)`
  }

  return syntax.substring(0, syntax.length - 3) + `)`;
};

module.exports = {
  createTable,
};