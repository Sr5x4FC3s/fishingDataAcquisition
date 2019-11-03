const express = require('express');

const drop_database = express.Router();

drop_database.route('/database_init').post((req, res, next) => {
  const { dropDatabasePromise } = require('../../../database/functions/dropDatabase'); 
  dropDatabasePromise.then(result => {
    console.log(`Database has been successfully deleted.`);
    res.status(200).send();
  }).catch(err => {
    console.error(err);
    res.status(404).send();
  });
});

module.exports = {
  drop_database,
};