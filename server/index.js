const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

/*************************** MIDDLEWARE ***************************/
const { check_database } = require('./middleware/checkDatabase');
const { initialize_database } = require('./middleware/initializeDatabase');
const { drop_database } = require('./middleware/dropDatabase');
const { reset_database } = require('./middleware/resetDatabase');
const { insert_data } = require('./middleware/insertToDatabase'); 

/***************************** ROUTES *****************************/
const map_info = require('./routes/mapInformation');
const coordinate_info =  require('./routes/retrieveCoordinateInformation');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

/***************************** MIDDLEWARES *************************/
// app.use('/', [check_database, ]);

app.use('/', express.static(path.join(__dirname, '../dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

/*************************** GET HANDLERS **************************/
// app.use('/', [check_database, ]);

/*************************** POST HANDLERS *************************/
app.use('/', [check_database, initialize_database, drop_database, reset_database, insert_data, map_info, coordinate_info, ]);

app.listen(port, () => console.log(`Listening on port: ${port}`));