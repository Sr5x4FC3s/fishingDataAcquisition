/** this is where data for table population goes */

exports.tableData = [
  {
    Locations: {
      primary: {
        exists: true,
        key: "coordinates",
      },
      foreign: [],
      columnOptions: ["coordinates", "location_name", "marker_color", "marker_image", "species_name", "environment_id", ],
      constraintOptions: ["VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "INT", ],
    }
  },
  {
    LocationRelationships: {
      primary: {
        exists: false,
        key: "",
      },
      foreign: [
        {
          table: "Locations",
          pk_id: "coordinates",
        },
        {
          table: "Species",
          pk_id: "species_name",
        },        {
          table: "Environment",
          pk_id: "environment_id",
        },
      ],
      columnOptions: ["coordinates", "species_name", "environment_id", ],
      constraintOptions: ["VARCHAR(255)", "VARCHAR(255)", "INT", ],
    }
  },
  {
    Environment: {
      primary: {
        exists: true,
        key: "environment_id",
      },
      foreign: [
        {
          table: "Date",
          pk_id: "date",
        }
      ],
      columnOptions: ["environment_id", "season", "air_temp", "wind_speed", "sky_type", "barometer_pressure", "weather_events", "notable_weather", "water_clarity", "water_temp", "ph_level", "seafloor_type", "date",],
      constraintOptions: ["INT", "VARCHAR(255)", "VARCHAR(255)", "INT", "VARCHAR(255)", "INT", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(55)", "INT", "INT", "VARCHAR(255)", "INT",],
    }
  },
  {
    Notes: {
      primary: {
        exists: true,
        key: "note_id",
      },
      foreign: [
        {
          table: "Locations",
          pk_id: "coordinates",
        },
        {
          table: "Species",
          pk_id: "species_name",
        },
        {
          table: "individualCatch",
          pk_id: "catch_id",
        },
      ],
      columnOptions: ["note_id", "coordinates", "notes", "species_name", "catch_id", ],
      constraintOptions: ["INT", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)","INT", ],
    }
  },
  {
    Date: {
      primary: {
        exists: true,
        key: "date",
      },
      foreign: [
        {
          table: "Environment",
          pk_id: "environment_id",
        },
        {
          table: "IndividualCatch",
          pk_id: "catch_id",
        },
      ],
      columnOptions: ["date", "environment_id", "catch_id", ],
      constraintOptions: ["INT", "INT", "INT", ],
    }
  },
  {
    PhotoRelationships: {
      primary: {
        exists: false,
        key: "",
      },
      foreign: [
        {
          table: "Photos",
          pk_id: "photo_id",
        },
        {
          table: "Date",
          pk_id: "date",
        },
        {
          table: "IndividualCatch",
          pk_id: "catch_id",
        },
        {
          table: "Bait",
          pk_id: "bait_name",
        },
        {
          table: "Tackle",
          pk_id: "tackle_name",
        },
        {
          table: "Rigs",
          pk_id: "rig_name",
        },
      ],
      columnOptions: ["photo_id", "date", "catch_id", "bait_name", "tackle_name", "rig_name", ],
      constraintOptions: ["INT", "INT", "INT", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", ],
    }
  },
  {
    Photos: {
      primary: {
        exists: true,
        key: "photo_id",
      },
      foreign: [],
      columnOptions: ["photo_id", "image"],
      constraintOptions: ["INT", "VARCHAR(255)"],
    }
  },
  {
    Bait: {
      primary: {
        exists: true,
        key: "bait_name",
      },
      foreign: [],
      columnOptions: ["bait_name", "information", ],
      constraintOptions: ["VARCHAR(155)", "BLOB", ],
    }
  },
  {
    Tackle: {
      primary: {
        exists: true,
        key: "tackle_name",
      },
      foreign: [],
      columnOptions: ["tackle_name", "information", ],
      constraintOptions: ["VARCHAR(255)", "VARCHAR(255)", ],
    }
  },
  {
    Rigs: {
      primary: {
        exists: true,
        key: "rig_name",
      },
      foreign: [],
      columnOptions: ["rig_name", "tackle_combination", ],
      constraintOptions: ["VARCHAR(255)", "VARCHAR(255)", ],
    }
  },
  {
    Species: {
      primary: {
        exists: true,
        key: "species_name",
      },
      foreign: [
        {
          table: "Notes",
          pk_id: "note_id",
        },
      ],
      columnOptions: ["species_name", "scientific_name", "species_category", "species_weight", "species_length", "species_description", "note_id", ],
      constraintOptions: ["VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "VARCHAR(255)", "INT", ],
    }
  },
  {
    individualCatch: {
      primary: {
        exists: true,
        key: "catch_id",
      },
      foreign: [
        {
          table: "Date",
          pk_id: "date",
        },
        {
          table: "Notes",
          pk_id: "note_id",
        },
        {
          table: "Environment",
          pk_id: "environment_id",
        },
        {
          table: "Photos",
          pk_id: "photo_id",
        },
        {
          table: "Rigs",
          pk_id: "rig_name",
        },
        {
          table: "Tackle",
          pk_id: "tackle_name",
        },
        {
          table: "Bait",
          pk_id: "bait_name",
        },
      ],
      columnOptions: ["catch_id", "individual_weight", "time_id", "method_description", "date", "environment_id", "photo_id", "rig_name", "bait_name", "tackle_name", "note_id", ],
      constraintOptions: ["INT", "INT", "INT", "VARCHAR(255)", "INT", "INT", "INT",  "VARCHAR(255)",  "VARCHAR(255)", "VARCHAR(255)", "INT", ],
    }
  },
];