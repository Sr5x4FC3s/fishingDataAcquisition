const axios = require('axios');

/**
 * 
 * @function fetch
 * @param {String} type 
 * type legend: 'COORDINATE_INFO'
 * @param {*} data 
 * @return {*} some sort of response which is dependent on type of data we're trying to access
 */
export const fetch = (type, data) => {
  switch(type) {
    case 'COORDINATE_INFO':
      let request = axios.post(`/map_info`, data)
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      return request;
      break;
    default:
      //some code 
  }
};