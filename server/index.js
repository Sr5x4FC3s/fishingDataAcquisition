const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

/*************************** MIDDLEWARE ***************************/
const { check_database } = require('./routes/post/checkDatabase');
const { initialize_database } = require('./routes/post/initializeDatabase');
const { drop_database } = require('./routes/post/dropDatabase');
const { reset_database } = require('./routes/post/resetDatabase');
const { insert_data } = require('./routes/post/insertToDatabase'); 

/***************************** ROUTES *****************************/
const map_info = require('./routes/post/mapInformation');
const coordinate_info =  require('./routes/post/retrieveCoordinateInformation');


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