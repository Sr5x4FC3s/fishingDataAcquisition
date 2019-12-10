const { query } = require('./query');

/** 
 * @function checkDate - check the existence of a date in the database to avoid duplications
 * @param { Integer } date - date that needs to be checked
 * @param { String } actionType - type of query action that is being performed
 * @return { Promise } - query promise
*/

const checkDate = (date, actionType) => {
  const syntax = `SELECT EXISTS(SELECT date FROM Date WHERE date = ${date})`;
  return new Promise ((resolve, reject) => resolve(query(syntax, actionType)));
};

module.exports = {
  checkDate,
};