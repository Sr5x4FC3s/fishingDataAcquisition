/** this is where data for table population goes */

exports.tableData = [
  {
    Coordinates: {
      primary: {
        exists: true,
        key: 'coordinate_id',
      },
      foreign: [
        {
          table: 'Locations',
          pk_id: 'LongLatPair',
        }
      ],
      columnOptions: ['coordinate_id'],
      constraintOptions: ['INT'],
    }
  },
  {
    Locations: {
      primary: {
        exists: true,
        key: 'LongLatPair',
      },
      foreign: [
        {
          table: 'Species',
          pk_id: 'species_name',
        },        {
          table: 'Weather',
          pk_id: 'weather_id',
        },
        {
          table: 'Water',
          pk_id: 'water_id',
        },
      ],
      columnOptions: ['LongLatPair', 'longitude', 'latitude', 'name', 'marker_color', 'marker_image',],
      constraintOptions: ['VARCHAR(255)', 'INT', 'INT', 'VARCHAR(255)', 'VARCHAR(255)', 'VARCHAR(255)',],
    }
  },
  {
    Weather: {
      primary: {
        exists: true,
        key: 'weather_id',
      },
      foreign: [
        {
          table: 'Date',
          pk_id: 'date',
        }
      ],
      columnOptions: ['weather_id', 'season', 'air_temp', 'wind_speed', 'sky_type', 'barometer_pressure', 'weather_events', 'notable_weather',],
      constraintOptions: ['INT', 'VARCHAR(255)', 'VARCHAR(255)', 'INT', 'VARCHAR(255)', 'INT', 'VARCHAR(255)', 'VARCHAR(255)', ],
    }
  },
  {
    Water: {
      primary: {
        exists: true,
        key: 'water_id',
      },
      foreign: [
        {
          table: 'Date',
          pk_id: 'date',
        }
      ],
      columnOptions: ['water_id', 'water_clarity', 'water_temp', 'ph_level', 'sediment_type', 'floor_type', ],
      constraintOptions: ['INT', 'VARCHAR(55)', 'INT', 'INT', 'VARCHAR(255)', 'VARCHAR(255)'],
    }
  },
  {
    Regions: {
      primary: {
        exists: true,
        key: 'region_id',
      },
      foreign: [
        {
          table: 'Species',
          pk_id: 'species_name',
        },        
        {
          table: 'IndividualCatch',
          pk_id: 'catch_id',
        }, 
        {
          table: 'Photos',
          pk_id: 'photo_id',
        },
      ],
      columnOptions: ['region_id'],
      constraintOptions: ['INT'],
    }
  },
  {
    Date: {
      primary: {
        exists: true,
        key: 'date',
      },
      foreign: [
        {
          table: 'Weather',
          pk_id: 'weather_id',
        },
        {
          table: 'Water',
          pk_id: 'water_id',
        },
        {
          table: 'IndividualCatch',
          pk_id: 'catch_id',
        },
        {
          table: 'Photos',
          pk_id: 'photo_id',
        },
      ],
      columnOptions: ['date'],
      constraintOptions: ['INT'],
    }
  },
  {
    Photos: {
      primary: {
        exists: true,
        key: 'photo_id',
      },
      foreign: [
        {
          table: 'Date',
          pk_id: 'date',
        },
        {
          table: 'Regions',
          pk_id: 'region_id',
        },
        {
          table: 'IndividualCatch',
          pk_id: 'catch_id',
        },
        {
          table: 'Bait',
          pk_id: 'bait_name',
        },
        {
          table: 'Tackle',
          pk_id: 'tackle_name',
        },
        {
          table: 'Rigs',
          pk_id: 'rig_name',
        },
      ],
      columnOptions: ['photo_id', ],
      constraintOptions: ['INT', ],
    }
  },
  {
    Bait: {
      primary: {
        exists: true,
        key: 'bait_name',
      },
      foreign: [],
      columnOptions: ['bait_name', 'information', ],
      constraintOptions: ['VARCHAR(155)', 'BLOB'],
    }
  },
  {
    Tackle: {
      primary: {
        exists: true,
        key: 'tackle_name',
      },
      foreign: [],
      columnOptions: ['tackle_name', 'information', ],
      constraintOptions: ['VARCHAR(255)', 'VARCHAR(255)', ],
    }
  },
  {
    Rigs: {
      primary: {
        exists: true,
        key: 'rig_name',
      },
      foreign: [
        {
          table: 'Tackle',
          pk_id: 'tackle_name',
        }
      ],
      columnOptions: ['rig_name', 'tackle_combination', ],
      constraintOptions: ['VARCHAR(255)', 'VARCHAR(255)', ],
    }
  },
  {
    Species: {
      primary: {
        exists: true,
        key: 'species_name',
      },
      foreign: [
        {
          table: 'Regions',
          pk_id: 'region_id',
        }
      ],
      columnOptions: ['species_name', 'scientific_name', 'species_category', 'weight', 'length', 'species_description', ],
      constraintOptions: ['VARCHAR(255)', 'VARCHAR(255)', 'VARCHAR(255)', 'VARCHAR(255)', 'VARCHAR(255)', 'VARCHAR(255)', ],
    }
  },
  {
    individualCatch: {
      primary: {
        exists: true,
        key: 'catch_id',
      },
      foreign: [
        {
          table: 'Regions',
          pk_id: 'region_id',
        },
        {
          table: 'Date',
          pk_id: 'date',
        },
        {
          table: 'Water',
          pk_id: 'water_id',
        },
        {
          table: 'Weather',
          pk_id: 'weather_id',
        },
        {
          table: 'Photos',
          pk_id: 'photo_id',
        },
      ],
      columnOptions: ['catch_id', 'time', 'method_description', ],
      constraintOptions: ['INT', 'INT', 'VARCHAR(255)', ],
    }
  },
];
