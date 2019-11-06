/**
 * @function matchProperties - takes two string values and compares them
 * @param { String } databaseColumn 
 * @param { String } stateKey 
 * @return { Boolean }
 */

const matchProperties = (databaseColumn, stateKey) => {
  let column = databaseColumn.match(/[a-z]+/g);
  let handleUpperCase = stateKey.match(/[A-Z]\w+/g);
  let state = stateKey.match(/[a-z]+/g);

  if (handleUpperCase) {
    state.pop();
    state.push(handleUpperCase[0].toLowerCase());
  };

  console.log('the VALUES: ', column, state)

  if (JSON.stringify(column) === JSON.stringify(state)) {
    return true;
  } else if (column[0] ==='date' || column[0] ==='time' || column[0] ==='bait' || column[0] ==='tackle') {
    //add photo and images categories
    return true;
  } else {
    return false;
  }
};

module.exports = {
  matchProperties,
};