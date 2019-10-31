const axios = require('axios');

//define fetch and use this to be invoked inall other functions 
export const httpPost = (route, data) => {
  return axios.post(route, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
};

export const httpGet = (route) => {
  return axios.get(route)
  .then(res => {
    return res;
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
}; 

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
      return axios.post(`/map_info`, data)
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        }); 
      break;
    case 'DATABASE_STATUS':
      return axios.post(`/check_database`, {})
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      break;
    case 'DATABASE_INIT':
      return axios.post(`/database_init`, {})
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      break;
    case 'RESET_DATABASE':
      return axios.post(`/database_reset`, data)
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      break;
    case 'INSERT_DATA':
      return axios.post(`/insert_data`, data)
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
      break;
  }
};

/**
 * @function retrieve
 * @param {String} type
 * type legend: 'DATABASE_STATUS'
 * @return {*} response that is relative to which case is executed
 */
export const retrieve = (type) => {
  switch(type) {
    case 'DATABASE_STATUS':
      let request = axios.get(`/checkDatabase`)
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