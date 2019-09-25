const express = require('express');

const map_info = express.Router();

map_info.use((req, res, next) => {
  console.log(req.body)
  res.send({hello:'goodbye'});
});

module.exports = map_info;