const tableData = require('../../database/functions/tables/index').tableData;
const { matchProperties } = require('./matchProperties');
const { convertStringList } = require('./convertStringList');

/** 
 * @function searchForFields
 * @param { String } tableName
 * @param { Array } data
 * @return { Array }
 */

const searchForFields = (tableName, data) => {
  const filtered = [];

  data.map(table => {
    if (table[tableName]) {
      filtered.push({columns: table[tableName].columnOptions, constraints: table[tableName].constraintOptions});
    }
  });

  return filtered[0];
};


/** 
 * @function convertFormData
 * @param { Object } data
 * @param { String } type
 * @return { Array } 
 */

const convertFormData = (data, type) => {
  let listofConverted = [];

  console.log('stuff: ', data, type)

  data.tables.map(table => {
    let converted = {};
    let columns = [];
    let values = [];
    const columnsAndConstraints = searchForFields(table, tableData);
    const stateKeys = Object.keys(data.data);

    columnsAndConstraints.columns.forEach(key => {
      console.log('length and values: ', columnsAndConstraints, stateKeys);
      for (let i = 0; i < stateKeys.length; i++) {
        console.log('keypair: ', key, stateKeys[i])
        if (matchProperties(key, stateKeys[i])) {
          columns.push(key);
          values.push(data.data[stateKeys[i]]);
          stateKeys.splice(stateKeys.indexOf(stateKeys[i]), 1);
          columnsAndConstraints.columns.splice(columnsAndConstraints.columns.indexOf(key), 1);
          break;
        }
      }
    });

    if (table === 'Tackle') {
      values = convertStringList(data.data.tackle);
    };

    if (table === 'Bait') {
      values = convertStringList(data.data.bait);
    };

    if (table === 'Rigs') {
      //need to accept array or concated strings of pk for tackle components
      console.log('entered rigs conditional');
    };

    converted.table = table;
    converted.columns = columns;
    converted.values = values;
    listofConverted.push(converted);
  });
  console.log('list: ', listofConverted)
  return listofConverted;
};

module.exports = {
  convertFormData,
};