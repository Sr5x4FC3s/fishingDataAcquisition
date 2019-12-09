const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 3003;

/*************************** MIDDLEWARE ***************************/
const save_images_locally = require('../server/middleware/multerLocalStorage');

/***************************** POST ROUTES *****************************/
const { check_database } = require('./routes/post/checkDatabase');
const { initialize_database } = require('./routes/post/initializeDatabase');
const { drop_database } = require('./routes/post/dropDatabase');
const { reset_database } = require('./routes/post/resetDatabase');
const { insert_data } = require('./routes/post/insertToDatabase');
const verifyDateExistence = require('./middleware/verifyDate'); 
const upload_images = require('./routes/post/uploadImages');
const map_info = require('./routes/post/mapInformation');
const coordinate_info =  require('./routes/post/retrieveCoordinateInformation');


const app = express();

//remove possibly
app.use('/uploads', express.static(path.join(__dirname, '../dist/local/uploads')))

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist'))); 

/***************************** MIDDLEWARES *************************/
app.use('/', [save_images_locally, verifyDateExistence, ]);

/*************************** GET HANDLERS **************************/
// app.use('/', [check_database, ]);

app.get('/species', (req, res, next) => {
  //test data set
  const data = {
    speciesName: 'lingcod',
    scientificName: 'some_name',
    weight: 'maximum 100lbs',
    length: 'maximum length: 55"',
    category: 'bottom fish',
    description: 'some description',
    // notes: [],
    notes: [{date: 'some date', note: 'some note'}, {date: 'some date', note: 'some note'}, {date: 'some date', note: 'some note'},],
  };

  // do a database query and pull results and send back 
  res.status(200).send(data);
});

app.get('/location', (req, res, next) => {
  //test data set 
  const data = {
    locationName: 'San Francisco',
    photos: 'some Photos',
    misc: 'some misc items',
    catches: [
      {
        species: 'lingcod',
        date: 'some date',
        images: 'images',
      },
      {
        species: 'rockfish',
        date: 'some date',
        images: 'images',
      }, 
      {
        species: 'halibut',
        date: 'some date',
        images: 'images',
      }, 
      {
        species: 'perch',
        date: 'some date',
        images: 'images',
      }, 
    ]
  };

  // database query and to get catches from a set coordinate and send it back to the client at the same time

  res.status(200).send(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

/*************************** POST HANDLERS *************************/
const options = [
  check_database, 
  initialize_database, 
  drop_database, 
  reset_database, 
  insert_data, 
  map_info, 
  coordinate_info,
  upload_images, 
];

app.use('/', options);

app.listen(port, () => console.log(`Listening on port: ${port}`));