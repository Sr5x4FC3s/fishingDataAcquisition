require('dotenv').config();
const mysql = require('mysql');

const connection = (type) => {
  let options = {
    host: 'localhost',
    database: 'fishing',
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
  };

  switch(type) {
    case('DROP_CREATE_DB'):
      delete options.database;
      return mysql.createPool(options);

    default:
      return mysql.createPool(options);
  };
}; 

module.exports = {
  connection,
};