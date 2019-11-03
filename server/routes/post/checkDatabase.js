const express = require('express');

const { checkTableExistence } = require('../../../database/functions/checkExistence');
const { connection } = require('../../../database/connection/index');
const { initializeDatabase } = require('../../../database/functions/initializeDb');
const { dropDatabase } = require('../../../database/functions/dropDatabase');
const { populate } = require('../../../database/functions/populate'); 
const { alterTable } = require('../../../database/functions/alterTables');
const { createTable, addForeignKey, addAutoIncrement } = require('../../../database/functions/createTable');
const tableData = require('../../../database/functions/tables/index').tableData;

/** Database check will occur once on the initial load to ensure that the
 *  database is in correctly setup -- if not, measures will be taken to ensure 
 *  the database is in functioning correctly before the initial rendering of the
 *  application. Once the initial check has been completed, the flag will be 
 *  set from false to true, stating that the verification has been performed 
 *  and from now on the route will continully invoke next() 
 */

const check_database = express.Router();

check_database.route('/check_database').post((req, res, next) => {
  checkTableExistence('fishing', 'Locations').then(result => {
    if (result) {
      res.status(200).send(result);
    } else {
      console.log(`Load Status: ${result}`);
      console.log('Error: Failed attempt to check validity or existence of tables. Please try again.');
      
      dropDatabase('fishing')
        .then(() => initializeDatabase('fishing'))
        .then(() => populate(tableData, createTable))
        .then(() => alterTable(tableData, addAutoIncrement, 'AUTO_INCREMENT'))
        .then(() => alterTable(tableData, addForeignKey, 'FOREIGN_KEY'))
        .then(result => {
          let reattemptList = result.filter(value => {
            return value.hasOwnProperty('syntax');
          });

          if (reattemptList.length > 0) {
            alterTable(null, null, 'REATTEMPT_FAILED_FK', reattemptList)
              .then(result => console.log(result))
              .catch(err => console.log(`${err}`))
              .then(() => res.status(200).send());
          } else {
            return;
          }
        })
        .then(result => {
          res.status(200).send();
        })
        .catch(err => {
          console.log(`${err}`);
        })
    }
  }).catch(err => {
    console.log(`Error: ${err}. \n A problem was encountered while verifying database status`);
    res.status(404).send(err);
  })
});

module.exports = {
  check_database,
};