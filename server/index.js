const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

/*************************** MIDDLEWARE ***************************/

/***************************** POST ROUTES *****************************/
const { check_database } = require('./routes/post/checkDatabase');
const { initialize_database } = require('./routes/post/initializeDatabase');
const { drop_database } = require('./routes/post/dropDatabase');
const { reset_database } = require('./routes/post/resetDatabase');
const { insert_data } = require('./routes/post/insertToDatabase'); 
const map_info = require('./routes/post/mapInformation');
const coordinate_info =  require('./routes/post/retrieveCoordinateInformation');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

/***************************** MIDDLEWARES *************************/
// app.use('/', [check_database, ]);

app.use('/', express.static(path.join(__dirname, '../dist'))); 

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
];

app.use('/', options);

app.listen(port, () => console.log(`Listening on port: ${port}`));