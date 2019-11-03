const express = require('express');

const map_info = express.Router();

map_info.route('/COORDINATE_INFO').post((req, res, next) => {
  console.log(req.body)
  res.send({hello:'goodbye'}); 
});

module.exports = map_info;