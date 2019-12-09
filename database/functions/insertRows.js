const { query } = require('./actions.js/query');

/** 
 * @function filterTables
 * @param { Array } data
 * @return { Object } - Object with table names as keys and values as the data set
 */

const filterTables = (data) => {
  let tables = [];
  let tableLists = {};

  /** parse data and grab one of each unique table name */
  data.forEach(entry => {
    if (tables.length < 1) {
      tables.push(entry.table);
    } else {
      let temp = false;
      tables.forEach(table => {
        if (entry.table !== table) {
          temp = true;
        } else {
          temp = false;
        }
      });
      if (temp) {
        tables.push(entry.table);
      }
    }
  });

  console.log('made tables: ', tables)

  /** create an object which contains the table names as keys and set the 
   * values as an array of arrays of data that cooresponds to the row */
  tables.forEach(table => {
    data.filter(tableType => {
      if (tableType.table === table) {
        if (!tableLists[table]) {
          tableLists[table] = {};
          tableLists[table].values = [];
          tableLists[table].syntax = tableType.syntax;
        };
        tableLists[table].values.push(tableType.values);
      }
    });
  });

  return tableLists;
};

const singleInsert = (data, callback, type) => {
  let listofRows = callback(data, type);
  console.log(data)
  console.log(listofRows);
  // return new Promise((resolve, reject) => {
  //   resolve(query())
  // });
};

/** 
 * @function bulkInsertRows
 * @param { Array } data
 * @param { Function } callback
 * @return { Promise }
 */

const bulkInsertRows = (data, callback) => {
  let insertPromises = [];
  let listofRows = callback(data);
  let sortedTables = filterTables(listofRows);

  for (let rowValue in sortedTables) {
    insertPromises.push(new Promise ((resolve, reject) => query(sortedTables[rowValue].syntax, 'BULK_INSERT', [sortedTables[rowValue].values])));
  };

  return Promise.all(insertPromises);
};

module.exports = {
  singleInsert, 
  bulkInsertRows,
  filterTables,
};