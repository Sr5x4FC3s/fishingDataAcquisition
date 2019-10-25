const { query } = require('./actions.js/query');

/**
 * @function alterTable 
 * @param { Array } tableInformation
 * @param { Function } callback
 * @return { Promise } a promise list of commands in MySQL syntax
 */

const alterTable = (tableInformation, callback) => {
  let fkPromiseList = [];

  tableInformation.forEach(table => {
    Object.values(table)[0].foreign.forEach(foreignKey => {
      let fkCommand = callback(Object.keys(table)[0], foreignKey.table, foreignKey.pk_id);
      fkPromiseList.push(new Promise ((resolve, reject) => {
        resolve(query(fkCommand, 'ALTER TABLE'));
      }));
    })
  });

  return Promise.all(fkPromiseList);
};

module.exports = { 
  alterTable,
};
