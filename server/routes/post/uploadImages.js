require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary');
const { bulkInsertRows } = require('../../../database/functions/insertRows');

const upload_images = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

upload_images.route('/upload_images/:component').post((req, res, next) => {
  const promises = req.files.map(image => cloudinary.uploader.upload(image.path));

  Promise.all(promises)
    .then(result => {
      let urlList = [];
      result.map(data => urlList.push(data.url));
      
      if (req.params === 'catch') {
        //save as catch images
      } else {
        //save as location images
      }
      // save image url to database as a reference... does not need to be run synchronously and can resolve after the response has been sent
      return urlList;
    })
    .then(result => res.status(200).send(result))
    .catch(error => {
      console.log(`${error}`);
      res.status(400).send();
    });
});

module.exports = upload_images; 