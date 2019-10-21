const express = require('express');

const { checkTableExistencePromise } = require('../../database/functions/checkExistence');
const { connection } = require('../../database/connection/index');

/** Database check will occur once on the initial load to ensure that the
 *  database is in correctly setup -- if not, measures will be taken to ensure 
 *  the database is in functioning correctly before the initial rendering of the
 *  application. Once the initial check has been completed, the flag will be 
 *  set from false to true, stating that the verification has been performed 
 *  and from now on the route will continully invoke next() 
 */
const check_database = express.Router();
check_database.route('/check_database').post((req, res, next) => {
  checkTableExistencePromise.then(result => {
    if (result) {
      console.log(`Success, database is currently populated with all the correct tables. All is well.`);
      res.status(200).send(result);
    } else {
      console.log('Load Status: ',result);
      console.log('Error: Failed attempt to check validity or existence of tables. Please try again.');
      res.status(200).send(result);
    }
  }).catch(err => {
    console.log('Error: A problem was encountered while verifying database status');
  })
});

module.exports = {
  check_database,
};