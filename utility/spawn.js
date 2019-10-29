const { exec, spawn } = require('child_process');

/** 
 * exec is used with smaller data because it's buffered in memory before returning it
 * spawn can be used with larger data sets because it's piped streamed and not buffered 
 */

// /** Linux based operating system setup */
const cur_dir = process.cwd();
const pyFileLocation = '/python/database';
const pyVENV = '/python/ENV';

// const createProcess = (directory, fileLocation, command, options) => {
//   return spawn(command, {
//     stdio: options.stdio,
//     shell: option.shells,
//     cwd: `${directory}${fileLocation}`,
//   });
// };
// const child = spawn('python3 startDatabase.py', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: cur_dir + pyFileLocation
// });

const child = spawn('source bin/activate && python3 database/startDatabase.py', {
  stdio: 'inherit',
  shell: true,
  cwd: cur_dir + pyVENV
});

/** Microsoft based operating system setup */

module.exports = {
  child,
  // createProcess,
};