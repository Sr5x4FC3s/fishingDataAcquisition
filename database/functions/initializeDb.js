const mysql = require('mysql');
const { query } = require('./actions/query');

const initializeDatabase = (database) => {
  let command = `CREATE DATABASE ${database};`;

  return new Promise ((resolve, reject) => {
    resolve(query(command, 'CREATE_DATABASE'));
  });
};

module.exports = {
  initializeDatabase,
};