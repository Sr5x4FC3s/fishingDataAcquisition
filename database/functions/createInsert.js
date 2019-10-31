/**
 * @function createRow
 * @param { String } tableName 
 * @param { Array } columns - columns and values must match in length
 * @param { Array } values - columns and values must match in length
 * @return { String, null } - returns string (command) or null if there was an error
 */

const createRow = (tableName, columns, values) => {
  if (columns.length !== values.length) {
    return null;
  };

  let syntax = `INSERT INTO ${tableName} (`;
  
  columns.forEach(column => {
    syntax += `${column}, `;
  });

  syntax.substring(0, syntax.length - 2) + `) VALUES ?`;

  return syntax.substring(0, syntax.length - 2) + `) VALUES ?`;
};


/** 
 * @function listofRows
 * @param { Array } listofEntries
 * @param { Object } listofEntries[i]
 * @param { String } listofEntries[i].table
 * @param { Array } listofEntries[i].columns
 * @param { Array } listofEntries[i].values
 * @return { Array } - list of all rows that need to be inserted
 */

const listofRows = (listofEntries) => {
  let entriesList = [];

  listofEntries.forEach(entry => {
    let temp = createRow(entry.table, entry.columns, entry.values);
    let tempObj = {
      table: entry.table,
      syntax: temp,
      values: entry.values,
    };
    entriesList.push(tempObj);
  });

  return entriesList;
};

module.exports = {
  createRow,
  listofRows,
};