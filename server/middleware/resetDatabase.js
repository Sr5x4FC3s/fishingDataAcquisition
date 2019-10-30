const express = require('express');
const { spawn, execSync } = require('child_process');

const reset_database = express.Router();

reset_database.route('/database_reset').post((req, res, next) => {

  if (req.body.flag) {
    const cur_dir = process.cwd();
    const pyFileLocation = '/python/ENV';

    /** no errors repopulating the database */
    let noErrors = true;
    
    let py = spawn('source bin/activate && python3 database/startDatabase.py', {
      shell: true,
      cwd: cur_dir + pyFileLocation,
    });

    py.stdout.on('data', data => {   
      process.stdout.write(data.toString());

      let regex = 'True';
      let findBoolean = data.toString().match(regex);

      if (findBoolean) {
        res.status(200).send({status: 'success'});
      } else {
        res.status(200).send({status: 'error'})
      }
    });
  };
});

module.exports = {
  reset_database,
};