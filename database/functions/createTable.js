/** 
 * @function buildColumns
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
 * @function addPrimaryKey
 * @param { String } key
 * @return { String } 
 */

const addPrimaryKey = (key) => {
  return `, PRIMARY KEY (${key}), `;      
};


/** 
 * @function addForeignKey
 * @param { String } tableReferenced
 * @param { String, Integer } id
 * @return { String } 
 */

const addForeignKey = (currentTable, tableReferenced, id) => {
  return `ALTER TABLE ${currentTable} ADD FOREIGN KEY (${id}) REFERENCES ${tableReferenced}(${id});`
};

/** 
 * @function addAutoIncrement
 * @param { Object } currentTable
 * @return { String, Null }
 */

const addAutoIncrement = (tableName, currentTable) => {
  if (currentTable.primary.key.match ('_id') && currentTable.primary.exists) {
    return `ALTER TABLE ${tableName} MODIFY ${currentTable.primary.key} INTEGER NOT NULL AUTO_INCREMENT;`;
  } else {
    return null;
  }
};

/** 
 * @function createTable
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
  let syntax = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;
  
  if (options.primary.exists) {
    primaryKeySegment = addPrimaryKey(options.primary.key);
    syntax = syntax.substring(0, syntax.length - 3) + primaryKeySegment;
  }
  
  if (primaryKeySegment) {
    return syntax.substring(0, syntax.length - 2) + `);`
  }

  return syntax.substring(0, syntax.length - 3) + `);`;
};

module.exports = {
  createTable,
  addForeignKey,
  addAutoIncrement,
};