const mysql = require('mysql');
const { query } = require('./actions.js/query');

const initializeDatabase = () => {
  return query(`CREATE DATABASE fishing`, 'CREATE DATABASE');
};

module.exports = {
  initializeDatabase, 
};