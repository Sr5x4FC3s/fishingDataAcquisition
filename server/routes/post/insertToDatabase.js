const express = require('express');

const { listofRows } = require('../../../database/functions/createInsert');
const { bulkInsertRows, filterTables } = require('../../../database/functions/insertRows');

const insert_data = express.Router();

insert_data.route('/insert_data').post((req, res, next) => {
  const tempdata = [
    {
      table: 'Water',
      columns: ["water_id", "water_clarity", "water_temp", "ph_level", "sediment_type", "floor_type"],
      values: [1, "clear", 78, 12, "rock", "sand"],
    },
    {
      table: 'Water',
      columns: ["water_id", "water_clarity", "water_temp", "ph_level", "sediment_type", "floor_type"],
      values: [3, "cloud", 43,33,"sand", "dirt"],
    },
    {
      table: 'Water',
      columns: ["water_id", "water_clarity", "water_temp", "ph_level", "sediment_type", "floor_type"],
      values: [44, "rain", 33, 43, "weeds", "shards"],
    },
    {
      table: 'Water',
      columns: ["water_id", "water_clarity", "water_temp", "ph_level", "sediment_type", "floor_type"],
      values: [22,"cloudy",22,12,"weeds","rocks"],
    },
    {
      table: 'Water',
      columns: ["water_id", "water_clarity", "water_temp", "ph_level", "sediment_type", "floor_type"],
      values: [32,"sunny",66,76,"rocks","rocks"],
    },
    {
      table: 'Weather',
      columns: ["weather_id", "season", "air_temp", "wind_speed", "sky_type", "barometer_pressure", "weather_events", "notable_weather"],
      values: [1,"fall",43,43,"clear",33,"deaf ears","thunder"],
    },
    {
      table: 'Weather',
      columns: ["weather_id", "season", "air_temp", "wind_speed", "sky_type", "barometer_pressure", "weather_events", "notable_weather"],
      values: [3,"summer",13,65,"clear",44,"deaf ears","lightning"],
    },
    {
      table: 'Weather',
      columns: ["weather_id", "season", "air_temp", "wind_speed", "sky_type", "barometer_pressure", "weather_events", "notable_weather"],
      values: [12, "spring",3,45,"cloudy",33,"deaf blind","hail"],
    },
  ];

  bulkInsertRows(tempdata, listofRows).then(result => {
    console.log(result);
    res.send()
  }).catch(err => {
    console.log(err);
  });
});

module.exports = {
  insert_data,
};