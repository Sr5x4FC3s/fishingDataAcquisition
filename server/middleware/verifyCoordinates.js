const express = require('express');
const { query } = require('../../database/functions/actions/query');
const { checkCoordinates } = require('../../database/functions/actions/checkList');
const { convertCoordinateEntry } = require('../../utility/conversion/convertCoordinates');

const verifyCoordinateExistence = express.Router({mergeParams: true});

verifyCoordinateExistence.use((req, res, next) => {
  const urlList = ['/upload_images', ];

  urlList.forEach(url => {
    if (req.originalUrl.match(url)) {
      const convertedCoordinates = convertCoordinateEntry(req.originalUrl.match(/[-0-9]|[*]|[.]/gi).join(''));

      checkCoordinates(convertedCoordinates, 'VERIFY_COORDINATE_ENTRY')
        .then(result => {
          if (Object.values(result[0])[0] === 0) {
            const syntax = `INSERT INTO Locations(coordinates) VALUES("${convertedCoordinates}");`;

            query(syntax, 'INSERTING_COORDINATE_ENTRY', )
              .then(result => {
                next();
              })
              .catch(error => {
                console.log(`${error}`);
              })
          } else {
            next();
          }
        })
        .catch(error => {
          console.log(`${error}`);
          next();
        })
    } else {
      next();
    }
  });
});

module.exports = verifyCoordinateExistence;