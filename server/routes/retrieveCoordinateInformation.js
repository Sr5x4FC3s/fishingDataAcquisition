const express = require('express');

const instanceOfTab = require('../../tempData/index').instanceOfTab;

const coordinate_info = express.Router();

coordinate_info.route('/retrieveCoordinateInfo').post((req, res, next) => {
  let value = null;

  for (let i = 0; i < instanceOfTab.length; i ++) {
    if (JSON.stringify(instanceOfTab[i].coordinates) === JSON.stringify(req.body.coordinates)) {
      value = instanceOfTab[i];
      break;
    } else {
      value = 'Not Found';
    }
  }
  res.status(200).send(value);
});

module.exports = coordinate_info;  