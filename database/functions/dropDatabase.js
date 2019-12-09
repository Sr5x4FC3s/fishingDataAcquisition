const mysql = require('mysql');

const { query } = require('./actions/query');

const dropDatabase = (database) => {
  let command = `DROP DATABASE IF EXISTS ${database};`;

  return new Promise((resolve, reject) => {
    resolve(query(command, 'DROP_DATABASE'));
  });
};

module.exports = {
  dropDatabase, 
};