const { query } = require('./actions.js/query');

/**
 * @function alterTable 
 * @param { Array } tableInformation
 * @param { Function } callback
 * @param { String } type 
 * @param { Array } failedFkList
 * @return { Promise } a promise list of commands in MySQL syntax
 */

const alterTable = (tableInformation, callback, type, failedFkList) => {
  let promiseList = [];

  switch (type) {
    case('FOREIGN_KEY'):
      tableInformation.forEach(table => {
        Object.values(table)[0].foreign.forEach(foreignKey => {
          let fkCommand = callback(Object.keys(table)[0], foreignKey.table, foreignKey.pk_id);
          promiseList.push(new Promise ((resolve, reject) => {
            resolve(query(fkCommand, 'ALTER TABLE'));
          }));
        })
      });
      break;
    case('AUTO_INCREMENT'): 
      tableInformation.forEach(table => {
        let autoIncrement = callback(Object.keys(table)[0], Object.values(table)[0]);
        
        if (autoIncrement) {
          promiseList.push(new Promise ((resolve, reject) => {
            resolve(query(autoIncrement, 'AUTO_INCREMENT'));
          }));
        }
      });
      break;
    case('REATTEMPT_FAILED_FK'): 
      failedFkList.map(command => {
        promiseList.push(new Promise ((resolve, reject) => {
          resolve(query(command.syntax, command.actionType))
        }));
      });
      break;
  }

  return Promise.all(promiseList);
};

module.exports = { 
  alterTable,
};
