const express = require('express');
const { exec, spawn } = require('child_process');

const reset_database = express.Router();

reset_database.route('/database_reset').post((req, res, next) => {
  //create spawn and execute python script to populate database 
  //for testing purposes -- create fishing2 as schema name 
  const cur_dir = process.cwd();
  const pyFileLocation = '/python/ENV';
  
  const test = true;

  const createProcess = () => {
    const child = spawn('source bin/activate && python3 database/startDatabase.py', {
      stdio: 'inherit',
      shell: true,
      cwd: cur_dir + pyFileLocation,
    });
    return child;
  };

  if (test) {
    createProcess();
  }
  res.send('henlo');
});

module.exports = {
  reset_database,
};