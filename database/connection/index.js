require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'fishing',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
});

module.exports = {
  connection,
};