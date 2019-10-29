const express = require('express');
const { exec, spawn } = require('child_process');

const { child } = require('../../utility/spawn');
const { createProcess } = require('../../utility/spawn');

const reset_database = express.Router();

reset_database.route('/database_reset').post((req, res, next) => {
  //create spawn and execute python script to populate database 
  //for testing purposes -- create fishing2 as schema name 
  child();
  // const cur_dir = process.cwd();
  // const pyFileLocation = '/python/database';
  // const spawnOptions = {
  //   stdio: 'inherit',
  //   shell: true, 
  // }; 

  // createProcess(cur_dir, pyFileLocation, 'pythom3 start.py', spawnOptions);
  res.send('henlo');
});

module.exports = {
  reset_database,
};