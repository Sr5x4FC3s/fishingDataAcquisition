const mysql = require('mysql');
const { query } = require('./actions.js/query');

const initializeDatabase = () => {
  return query(`CREATE DATABASE fishing`, 'CREATE DATABASE');
};

const initializeDatabasePromise = new Promise((resolve, reject) => {
  resolve(initializeDatabase());
});

module.exports = {
  initializeDatabasePromise,
};