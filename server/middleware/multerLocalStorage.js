const multer = require('multer');
const express = require('express');

const save_images_locally = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'dist/local/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({storage});

save_images_locally.use(upload.array('photos'), (req, res, next) => {
  if (req.originalUrl.toLowerCase() === '/upload_images') {
    next();
  } else {
    next();
  }
});

module.exports = save_images_locally;