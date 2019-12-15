const express = require('express');
const { checkDate } = require('../../database/functions/actions/checkList');
const { setCurrentDate } = require('../../utility/createDate'); 
const { query } = require('../../database/functions/actions/query');

const verifyDateExistence = express.Router();

verifyDateExistence.use((req, res, next) => {
  const urlList = ['upload_images', ];

  urlList.forEach(url => {
    if (req.originalUrl === url) {
      const currentDate = setCurrentDate();

      checkDate(currentDate, 'VERIFY_CURRENT_DATE_ENTRY')
        .then(result => {
          if (Object.values(result[0])[0] === 0) {
            const syntax = `INSERT INTO Date(date) VALUES(${currentDate});`;

            query(syntax, 'INSERTING_DATE_ENTRY', )
              .then(result => {
                next();
              })
              .catch(err => {
                console.log(`${err}`);
              })
          } else {
            next();
          }
        })
        .catch(err => {
          console.log(`${err}`);
          next();
        })
    } else {
      next();
    }
  });
});

module.exports = verifyDateExistence;