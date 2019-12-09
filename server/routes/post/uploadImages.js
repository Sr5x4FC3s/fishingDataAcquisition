require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary');
const { selectTable } = require('../../../utility/conversion/selectTable');
const { listofRows } = require('../../../database/functions/createInsert');
const { bulkInsertRows } = require('../../../database/functions/insertRows');
const { tableData } = require('../../../database/functions/tables/index');
const { setCurrentDate } = require('../../../utility/createDate');

const upload_images = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

upload_images.route('/upload_images/:component').post((req, res, next) => {
  const promises = req.files.map(image => cloudinary.uploader.upload(image.path));
  const currentDate = setCurrentDate();

  Promise.all(promises)
    .then(result => {
      const tables = selectTable('PHOTO_RELATIONSHIPS');
      let urlList = [];
      let tableAssociationList;
      let configuredData = [];
      result.map(data => urlList.push(data.url));

      const findTableData = () => {
        let tableIndex = {};

        for (let i = 0; i < tableData.length; i++) {
          for (let j = 0 ; j < tables.length; j++) {
            if (Object.keys(tableData[i])[0] === tables[j]) {
              tableIndex[tables[j]] = {
                columns: tableData[i][tables[j]].columnOptions, 
              };
            }
            continue;
          }
        }

        return tableIndex;
      };

      const createInsertObject = (table, tableInfo, options) => {
        /** 
         * options data schema: 
         * columns in use will be added here with the corresponding value 
         */
        const optionsKeys = Object.keys(options);
        let values = [];

        tableInfo.columns.map(columnHeader => {
          for(let k = 0; k < optionsKeys.length; k++) {
            if (columnHeader === optionsKeys[k]) {
              values.push(options[optionsKeys[k]]);
              break;
            } else if (k === optionsKeys.length - 1) {
              values.push(null);
            }
          }
        });
        tableInfo.table = table;
        tableInfo.values = values;

        return tableInfo;
      };

      const colsAndConsList = findTableData();
      
      if (req.params === 'catch') {
        tableAssociationList = ['Date', 'individualCatch', 'Rigs', 'Tackle', 'Bait', 'Photos'];
        
        urlList.map(url => {
          tableAssociationList.map(table => {
            configuredData.push(createInsertObject(table, colsAndConsList[table], {
              url: url,
              type: 'catch',
              coordinates: 'some coordinate to be added later',
              catch_id: 1, //changes depending on what id it is
              //add more information here depending on the type
            }));
          })
        });

        bulkInsertRows(configuredData, listofRows);
      } else {
        tableAssociationList = ['Date', 'Locations', 'Photos'];
        
        urlList.map(url => {
          tableAssociationList.map(table => {
            configuredData.push(createInsertObject(table, colsAndConsList[table], {
              url: url,
              type: 'location',
              coordinates: 'some coordinate to be added later',
            }));
          })
        });

        // bulkInsertRows(configuredData, listofRows);
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