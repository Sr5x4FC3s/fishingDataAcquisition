/**
 * @function convertCoordinateEntry
 * @param {String} coordinates 
 * @return {String} - returns a modified string ready for database entry 
 */

const convertCoordinateEntry = (coordinates) => {
  let modifiedCoordinateString = coordinates.replace(/[*]/gi, ',');
  return modifiedCoordinateString; 
};

module.exports = {
  convertCoordinateEntry
};