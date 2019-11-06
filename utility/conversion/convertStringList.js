/**
 * @function convertStringList
 * @param { String } tackleCombinedString 
 * @return { Array }
 */

const convertStringList = (tackleCombinedString) => {
  const safetyCheck = tackleCombinedString.replace(/([!@#$%^&*()|'"<>+;])/g, '--');
  return safetyCheck.match(/([A-z])+/g);
};

module.exports = {
  convertStringList,
};