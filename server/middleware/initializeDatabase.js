const express = require('express');

const initialize_database = express.Router();

initialize_database.route('/database_init').post((req, res, next) => {
  const { initializeDatabasePromise } = require('../../database/functions/initializeDb'); 

  initializeDatabasePromise.then(result => {
    console.log(`Database has been successfully initialized.`);
    res.status(200).send();
  }).catch(err => {
    console.error(err);
    res.status(404).send();
  });
});

module.exports = {
  initialize_database,
};