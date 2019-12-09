/**
 * @function selectTable
 * @param { String } type 
 * @return { Array } - list of associated tables that need to be either referenced or updated
 */

const selectTable = (type) => {
  let tables = [];

  switch(type) {
    case('SPECIES'):
      tables.push('Species');
      tables.push('Regions');
      break;
    case('INDIVIDUAL_DETAILS'):
      tables.push('Regions');
      tables.push('Date');
      tables.push('Water');
      tables.push('Weather');
      tables.push('Photos');
      tables.push('Rigs');
      tables.push('Tackle');
      tables.push('Bait');
      tables.push('individualCatch');
      break;
    case('LOCATION_RELATIONSHIPS'):
      tables.push('Locations');
      tables.push('Species');
      tables.push('Enviroment');
      break;
    case('COORDINATES'):
      tables.push('Coordinates');
      tables.push('Locations');
      break;
    case('PHOTO_RELATIONSHIPS'): 
      tables.push('Photos');
      tables.push('Date');
      tables.push('individualCatch');
      tables.push('Rigs');
      tables.push('Tackle');
      tables.push('Bait');
      tables.push('Locations');
      break;
    default: 
      return null;
  }

  return tables; 
};

module.exports = {
  selectTable, 
};