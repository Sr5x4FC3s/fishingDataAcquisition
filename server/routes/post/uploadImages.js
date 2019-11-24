const express = require('express');

const upload_images = express.Router();

upload_images.route('/upload_images').post((req, res, next) => {
  console.log();

  res.status(200).send('hello');
});

module.exports = upload_images; 