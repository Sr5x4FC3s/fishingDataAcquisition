const mysql = require('mysql');

const { query } = require('./actions.js/query');

const dropDatabase = () => {
  return query(`DROP DATABASE fishing2`, 'DROP DATABASE');
};

const dropDatabasePromise = new Promise ((resolve, reject) => {
  resolve(dropDatabase());
});

module.exports = {
  dropDatabasePromise,
};